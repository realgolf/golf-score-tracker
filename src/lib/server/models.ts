import mongoose from 'mongoose';
import RoundSchema from './models/RoundSchema';

const User_Schema = new mongoose.Schema({
	user: {
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		name: { type: String, require: true },
		registration_date: { type: Date, require: true },
		last_login_date: { type: Date, require: true },
		measurement_units: { type: String, required: true, default: 'meters' },
		theme: { type: String, required: true, default: 'system' },
		handicap: { type: Number, required: true, default: 54 },
		handicap_updated: { type: Date, required: true, default: new Date() }
	},
	golf_round: [RoundSchema],
	handicap_history: [
		{
			handicap: { type: Number },
			date: { type: Date }
		}
	]
});

export const User_Model = mongoose.model('User', User_Schema);
