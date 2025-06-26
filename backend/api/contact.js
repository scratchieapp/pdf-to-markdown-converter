const { Resend } = require('resend');

exports.config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

module.exports = async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email address format' 
      });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().substring(0, 255);
    const sanitizedPhone = phone ? phone.trim().substring(0, 20) : '';
    const sanitizedMessage = message.trim().substring(0, 5000);

    console.log('Contact form submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      hasPhone: !!sanitizedPhone,
      messageLength: sanitizedMessage.length
    });

    // Create email content
    const emailSubject = `Contact Form: ${sanitizedName}`;
    const emailBody = `
New contact form submission from PDF to Markdown Converter:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone || 'Not provided'}

Message:
${sanitizedMessage}

---
Sent from PDF to Markdown Converter
Timestamp: ${new Date().toISOString()}
User IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Unknown'}
`;

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        console.log('Attempting to send email via Resend...');
        
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const emailResult = await resend.emails.send({
          from: 'PDF Converter <noreply@scratchie.com>', // Must be from verified domain
          to: 'james@scratchie.com',
          subject: emailSubject,
          text: emailBody,
          reply_to: sanitizedEmail, // User's email as reply-to
        });

        console.log('Email sent successfully via Resend:', emailResult.data?.id);
        
      } catch (emailError) {
        console.error('Failed to send email via Resend:', emailError);
        // Don't fail the request if email fails - still log the contact
      }
    } else {
      console.log('RESEND_API_KEY not configured - logging contact form submission:');
      console.log('TO: james@scratchie.com');
      console.log('SUBJECT:', emailSubject);
      console.log('BODY:', emailBody);
    }

    // Store contact in a simple log or database if needed
    // For now, we'll just log it
    const contactRecord = {
      timestamp: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };

    console.log('Contact form record:', JSON.stringify(contactRecord, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to process contact form. Please try again.' 
    });
  }
};