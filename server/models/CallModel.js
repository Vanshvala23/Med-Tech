const mongoose = require('mongoose');

const callSchema = mongoose.Schema({
  caller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  callStart: { type: Date },
  callEnd: { type: Date },
  recordingUrl: { type: String }, // Optional for recording storage
}, { timestamps: true });

// Virtual to calculate call duration
callSchema.virtual('callDuration').get(function () {
  if (this.callStart && this.callEnd) {
    return Math.round((this.callEnd - this.callStart) / 1000); // in seconds
  }
  return null;
});

callSchema.pre('save', function (next) {
  if (this.callEnd && this.callStart && this.callEnd < this.callStart) {
    return next(new Error('Call end time must be after call start time.'));
  }
  next();
});

module.exports = mongoose.model('Call', callSchema);
