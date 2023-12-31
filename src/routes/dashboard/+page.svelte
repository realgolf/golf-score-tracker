<script>
	export let data;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<main>
	<p>Welcome to your Real Golf Score Tracker {data.name}</p>
	<p>Your current Handicap is: {data.handicap}</p>

	{#if data.recentRounds}
		<section class="recent-rounds">
			<h2>Recent Rounds</h2>
			{#each data.recentRounds as round}
				<div>
					<p>Date: {round.date}</p>
					<p>Total Strokes: {round.totalStrokes}</p>
					<p>Putts: {round.putts}</p>
					<!-- Add more details as needed -->
				</div>
			{/each}
		</section>
	{/if}

	{#if data.performanceOverview}
		<section class="performance-overview">
			<h2>Performance Overview</h2>
			<p>Average Score: {data.performanceOverview.averageScore}</p>
			<p>Average Putts: {data.performanceOverview.averagePutts}</p>
			<p>Fairways Hit Percentage: {data.performanceOverview.fairwaysHitPercentage}%</p>
			<p>
				Greens in Regulation Percentage: {data.performanceOverview.greensInRegulationPercentage}%
			</p>
		</section>
	{/if}

	{#if data.handicap}
		<section class="handicap-info">
			<h2>Handicap Information</h2>
			<p>Current Handicap: {data.handicap}</p>
			{#if data.handicap_history && data.handicap_history.length !== 0}
				<div class="handicap_history">
					<p>Handicap History:</p>
					{#each data.handicap_history.slice().reverse() as entry}
						<p>{entry.handicap} on {new Date(entry.date).toLocaleString()}</p>
					{/each}
				</div>
			{/if}
		</section>
	{/if}

	{#if data.achievements}
		<section class="achievements-and-challenges">
			<h2>Achievements and Challenges</h2>
			<p>Achievements: {data.achievements.join(', ')}</p>
			<p>Challenges: {data.challenges.join(', ')}</p>
		</section>
	{/if}
</main>

<style>
	section {
		background-color: var(--nav-color);
		border-radius: 10px;
		border: 1px solid var(--border-color);
		margin: 1rem 0;
		padding: 1rem 1rem;
	}

	.handicap_history {
		margin-left: 1.5rem;
	}
</style>
