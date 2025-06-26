const clients = new Map();

export function setupWebSocket(wss) {
  wss.on('connection', (ws) => {
    const clientId = generateClientId();
    clients.set(clientId, ws);
    console.log(`WebSocket client connected: ${clientId}. Total clients: ${clients.size}`);
    
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);
        console.log('WebSocket message received:', data);
        if (data.type === 'subscribe' && data.sessionId) {
          ws.sessionId = data.sessionId;
          console.log(`Client ${clientId} subscribed to session ${data.sessionId}`);
        }
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });
    
    ws.on('close', () => {
      console.log(`WebSocket client disconnected: ${clientId}`);
      clients.delete(clientId);
    });
    
    ws.send(JSON.stringify({ type: 'connected', clientId }));
  });
}

export function broadcastProgress(sessionId, progress) {
  const message = JSON.stringify({
    type: 'progress',
    sessionId,
    ...progress
  });
  
  console.log(`Broadcasting to ${clients.size} clients for session ${sessionId}:`, progress);
  
  let sentCount = 0;
  clients.forEach((ws) => {
    if (ws.readyState === ws.OPEN && ws.sessionId === sessionId) {
      ws.send(message);
      sentCount++;
    }
  });
  
  console.log(`Sent progress update to ${sentCount} clients`);
}

function generateClientId() {
  return Math.random().toString(36).substring(7);
}