// HoleDataSchema.ts
import mongoose from 'mongoose';

const HoleDataSchema = new mongoose.Schema({
	holeNumber: { type: Number, required: true },
	strokes: { type: Number, required: true },
	putts: { type: Number, required: true },
	fairwaysHit: { type: Boolean },
	greensInRegulation: { type: Boolean },
	penaltyStrokes: { type: Number, default: 0 }
});

export default HoleDataSchema;