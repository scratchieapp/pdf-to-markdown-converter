export async function convertToMarkdown(ocrResults, progressCallback = null) {
  let markdown = '';
  
  console.log('Converting OCR results to markdown:', ocrResults.length, 'chunks');
  
  for (const result of ocrResults) {
    const pageRange = result.pageRange;
    console.log(`Processing chunk ${pageRange[0] + 1}-${pageRange[1]}:`, result.content);
    
    markdown += `\n\n<!-- Pages ${pageRange[0] + 1} - ${pageRange[1]} -->\n\n`;
    
    if (result.content) {
      // Handle Mistral OCR response format with pages array
      if (result.content.pages && Array.isArray(result.content.pages)) {
        // New Mistral OCR format with pages
        for (const page of result.content.pages) {
          if (page.markdown) {
            markdown += processTextContent(page.markdown);
            markdown += '\n\n'; // Add spacing between pages
          }
        }
      } else if (result.content.content) {
        // Array format
        for (const item of result.content.content) {
          if (item.type === 'text') {
            markdown += processTextContent(item.text);
          } else if (item.type === 'image_url' && item.image_url) {
            markdown += `\n![Image](data:image/png;base64,${item.image_url.url})\n`;
          }
        }
      } else if (result.content.choices && result.content.choices[0]) {
        // Chat completion format
        const choice = result.content.choices[0];
        if (choice.message && choice.message.content) {
          markdown += processTextContent(choice.message.content);
        }
      } else if (typeof result.content === 'string') {
        // Direct string format
        markdown += processTextContent(result.content);
      } else {
        console.log('Unknown content format:', result.content);
      }
    }
  }
  
  console.log('Final markdown length:', markdown.length);
  return cleanupMarkdown(markdown);
}

function processTextContent(text) {
  if (!text) return '';
  
  let processed = text;
  
  processed = processed.replace(/^#{1,6}\\s+/gm, (match) => '\\n' + match);
  
  processed = processed.replace(/\\$\\$(.*?)\\$\\$/gs, (match, equation) => {
    return `\\n\\n$$\\n${equation.trim()}\\n$$\\n\\n`;
  });
  
  processed = processed.replace(/\\$(.*?)\\$/g, (match, equation) => {
    return `$${equation.trim()}$`;
  });
  
  processed = processed.replace(/\\|(.+)\\|/g, (match) => {
    if (match.includes('---')) {
      return '\\n' + match + '\\n';
    }
    return match;
  });
  
  return processed;
}

function cleanupMarkdown(markdown) {
  // Fix escaped newlines  
  markdown = markdown.replace(/\\n/g, '\n');
  
  // Remove excessive newlines
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  // Trim whitespace
  markdown = markdown.replace(/^\s+|\s+$/g, '');
  
  // Convert tabs to spaces
  markdown = markdown.replace(/\t/g, '    ');
  
  return markdown;
}