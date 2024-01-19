import { User_Model } from '$lib/server/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');

	const user = await User_Model.findOne({ 'user.email': email });

	console.log(user);

	const name = user?.user?.name as string;
	const handicap = user?.user?.handicap as number;
	const registration_date = user?.user?.registration_date as Date;
	const handicap_updated = user?.user?.handicap_updated as Date;
	const measurement_units = user?.user?.measurement_units as string;
	const theme = user?.user?.theme as string;
	const last_login_date = user?.user?.last_login_date as Date;

	//Performance Overview

	const avarageScore = user?.performanceOverview?.averageScore as number;
	const avaragePutts = user?.performanceOverview?.averagePutts as number;
	const fairwaysHitPercentage = user?.performanceOverview?.fairwaysHitPercentage as number;
	const greensInRegulationPercentage = user?.performanceOverview
		?.greensInRegulationPercentage as number;

	//Handicap History

	const handicap_history = user?.handicap_history.map((history) => {
		const historyCopy = JSON.parse(JSON.stringify(history));
		delete historyCopy._id; // Remove the _id field
		return historyCopy;
	});

	return {
		name,
		handicap,
		registration_date,
		handicap_updated,
		measurement_units,
		theme,
		last_login_date,
		avarageScore,
		avaragePutts,
		fairwaysHitPercentage,
		greensInRegulationPercentage,
		handicap_history
	};
};
