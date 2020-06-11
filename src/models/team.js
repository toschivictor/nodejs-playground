import { model, Schema } from 'mongoose';

export const teamSchema = new Schema({
  teamName: {
    type: String,
    required: [true, 'teamName is required'],
  },
  createdAt: { type: Date },
});

export const Team = model('Team', teamSchema);
