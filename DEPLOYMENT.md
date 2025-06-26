# Deployment Guide for PDF to Markdown Converter

## Quick Deploy to Vercel

### 1. Frontend Deployment
1. Go to [Vercel Dashboard](https://vercel.com)
2. Connect your GitHub repo: `scratchieapp/pdf-to-markdown-converter`
3. Set **Root Directory** to `frontend`
4. Add environment variables in Vercel:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   REACT_APP_WS_URL=wss://your-backend-url.vercel.app
   REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   ```

### 2. Backend Deployment
1. Create new Vercel project for backend
2. Set **Root Directory** to `backend`
3. Add environment variables:
   ```
   MISTRAL_API_KEY=your_mistral_api_key
   STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_from_stripe
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   JWT_SECRET=your-secure-jwt-secret-key
   ```

### 3. Update URLs
After deployment, update:
1. Frontend environment variables with actual backend URL
2. Google OAuth redirect URIs in Google Console
3. Stripe webhook endpoint in Stripe Dashboard

### 4. Test HTTPS
The system requires HTTPS for:
- Stripe live payments
- Google OAuth
- WebSocket connections (wss://)

### Domain Setup
- Frontend: `pdf-to-markdown.net`
- Backend: `api.pdf-to-markdown.net` (or subdirectory)

## Environment Variables Summary

### Frontend (.env)
```
REACT_APP_API_URL=https://api.pdf-to-markdown.net
REACT_APP_WS_URL=wss://api.pdf-to-markdown.net
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_...
REACT_APP_GOOGLE_CLIENT_ID=google_client_id
```

### Backend (.env)
```
MISTRAL_API_KEY=your_mistral_api_key
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
JWT_SECRET=secure-random-string
PORT=3001
```

## Post-Deployment Configuration

1. **Stripe Webhooks**: Set endpoint to `https://api.pdf-to-markdown.net/api/webhook/stripe`
2. **Google OAuth**: Add redirect URIs:
   - `https://pdf-to-markdown.net`
   - `https://pdf-to-markdown.net/auth/callback`
3. **DNS**: Point `pdf-to-markdown.net` to Vercel

## Testing Checklist
- [ ] Frontend loads on HTTPS
- [ ] File upload works
- [ ] PDF analysis detects page count correctly
- [ ] Free trial flow (Google OAuth) works
- [ ] Payment flow (Stripe) works
- [ ] WebSocket progress updates work
- [ ] Download generates correct markdown