// RoundSchema.ts
import mongoose from 'mongoose';
import HoleDataSchema from './HoleDataSchema';

const RoundSchema = new mongoose.Schema({
	id: {type: String},
	course: {
		name: { type: String, required: true },
		location: { type: String },
		parInfo: {type: Number},
		courseRating: { type: String },
		slope: { type: Number }
	},
	roundInfo: {
		date: { type: Date, required: true },
		time: { type: String },
		weatherConditions: { type: String },
		playingPartners: [{ type: String }]
	},
	holeByHoleData: [HoleDataSchema],
	overallStatistics: {
		totalStrokes: { type: Number },
		totalPutts: { type: Number },
		fairwaysHitPercentage: { type: Number },
		greensInRegulationPercentage: { type: Number }
	}
});

export default RoundSchema;
