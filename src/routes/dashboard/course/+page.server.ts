import { User_Model } from '$lib/server/models';
import type { Actions } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { formattedTime, today } from './time';

export const actions: Actions = {
	add_course: async (event) => {
		const email = event.cookies.get('email');

		const data = await event.request.formData();
		const course_name = data.get('course_name');
		const course_location = data.get('course_location');
		const par_info = data.get('par_info');
		const course_rating = data.get('course_rating');
		const playing_partner = data.get('playing_partner') as string;
		let partners: string[] = [];

		try {
			const user = await User_Model.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					body: JSON.stringify({ error: 'User not found' })
				};
			}

			//Generate a unique ID for a round
			const roundId = uuidv4();

			if (playing_partner) {
				partners = playing_partner.split(', ');
			}

			if (user.golf_round) {
				user.golf_round.push({
					id: roundId,
					course: {
						name: course_name,
						location: course_location,
						parInfo: par_info,
						courseRating: course_rating
					},
					roundInfo: {
						date: today,
						time: formattedTime,
						playingPartners: partners
					}
				});
			}

			await user.save();
			console.log(user);
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				body: JSON.stringify({ error: 'Error saving game' })
			};
		}
	}
};
