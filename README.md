# PDF to Markdown Converter

A minimalist web application that converts PDF documents to Markdown using Mistral OCR API with real-time progress tracking.

## ✨ Features

- 🖱️ **Drag-and-drop PDF upload** interface
- 📊 **Real-time progress tracking** with WebSocket updates
- 📄 **Large PDF support** (handles 300+ pages by chunking)
- 🎨 **Beautiful, minimalist UI** with Tailwind CSS
- 🔄 **Smart filename conversion** (first 10 chars + "_converted.md")
- 📋 **Complex document support** including tables, equations, and images
- 💾 **Direct download** of converted files

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd pdf-to-markdown
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment**
   ```bash
   cp backend/.env.example backend/.env
   # Add your Mistral API key to backend/.env
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

5. **Open http://localhost:3000** and start converting PDFs!

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks
- **Real-time Updates**: WebSocket connection
- **File Handling**: FormData API with progress tracking

### Backend (Node.js + Express)
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js
- **PDF Processing**: pdf-lib for chunking
- **OCR Service**: Mistral OCR API
- **Real-time Communication**: WebSocket Server
- **File Storage**: Local filesystem with cleanup

### Key Components
- **Progress System**: Two-level progress (overall + task-specific)
- **Chunking Strategy**: 10-page chunks for optimal processing
- **Error Handling**: Graceful fallbacks and retry logic
- **Session Management**: UUID-based session tracking

## 📊 Progress Tracking

The app features a sophisticated two-level progress system:

### Main Progress Bar (Blue)
- Overall completion: 0-100%
- Tracks progress across all processing stages

### Sub-task Progress (Green)
- **OCR Phase**: Shows chunk processing (e.g., "3 of 32 chunks")
- **Conversion Phase**: Markdown processing progress
- **Individual task completion percentage**

## 💰 Pricing

- **Mistral OCR**: $0.001 per page
- **Example costs**:
  - 10-page document: $0.01
  - 150-page document: $0.15
  - 300-page document: $0.30

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables
```bash
MISTRAL_API_KEY=your_mistral_api_key_here
PORT=3001
NODE_ENV=production
MAX_FILE_SIZE=52428800
CHUNK_SIZE=10
```

## 🔧 Development

```bash
# Install dependencies
npm run install:all

# Start development servers
npm run dev

# Build for production
npm run build:frontend

# Start production backend
npm run start:backend
```

## 📝 API Endpoints

- `POST /api/upload` - Upload and process PDF
- `GET /health` - Health check
- `GET /downloads/:filename` - Download converted files
- `WebSocket /` - Real-time progress updates

## 🛠️ Technical Details

### PDF Processing Pipeline
1. **Upload**: Receive PDF via multipart form
2. **Chunking**: Split into 10-page chunks using pdf-lib
3. **OCR**: Process each chunk with Mistral OCR API
4. **Conversion**: Extract and format markdown content
5. **Delivery**: Provide download link with custom filename

### WebSocket Flow
1. Frontend generates session ID and connects
2. Backend tracks session-specific progress
3. Real-time updates broadcast to connected clients
4. Automatic cleanup on completion

## 🔍 Troubleshooting

### Common Issues
- **"WebSocket connection failed"**: Check that both servers are running
- **"OCR failed"**: Verify Mistral API key and file format
- **"File too large"**: Ensure PDF is under 50MB
- **"Progress stuck at 5%"**: Check WebSocket connection in browser console

### Debug Mode
Enable detailed logging by checking browser console and backend terminal output.

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

Built with ❤️ using Mistral OCR, React, and Node.js