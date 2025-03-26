const Call = require('../models/CallModel');
const io = require('socket.io')(3001);

// Map to store user and socket connection
const userSocketMap = {};

exports.CallRecording = async (req, res) => {
  try {
    const { callId, recordingUrl } = req.body;

    if (!recordingUrl || !callId) {
      return res.status(400).json({ message: 'Call ID and Recording URL are required' });
    }

    const call = await Call.findById(callId);
    if (!call) {
      return res.status(404).json({ message: 'Call not found' });
    }

    call.recordingUrl = recordingUrl;
    await call.save();
    res.json({ message: 'Call recording saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving call recording', error: error.message });
  }
};

// WebSocket Connection Management
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Register user with socket
  socket.on('registerUser', ({ userId }) => {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} registered with socket ID: ${socket.id}`);
  });

  // Handle Call Initiation
  socket.on('callUser', ({ from, to }) => {
    const receiverSocketId = userSocketMap[to];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('incomingCall', { from });
    } else {
      console.log(`User ${to} not connected.`);
    }
  });

  // Handle Call Acceptance
  socket.on('answerCall', ({ from, to }) => {
    const callerSocketId = userSocketMap[from];
    if (callerSocketId) {
      io.to(callerSocketId).emit('callAccepted', { to });
    }
  });

  // Handle Disconnection
  socket.on('disconnect', () => {
    const userId = Object.keys(userSocketMap).find(key => userSocketMap[key] === socket.id);
    if (userId) {
      delete userSocketMap[userId];
      console.log(`User ${userId} disconnected`);
    }
  });
});
