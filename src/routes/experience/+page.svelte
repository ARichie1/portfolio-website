<script lang="ts">
	import { experience } from "$lib/stores/bio";
</script>

<svelte:head>
	<title>Experience — Richard Akinmade</title>
	<meta name="description" content="Richard Akinmade's professional experience across freelance, consulting, and technical roles." />
</svelte:head>

<section class="section fade-in">
	<h1 class="section-title">Experience</h1>

	<ul class="timeline">
		{#each experience as job}
			<li class="job glass sliding-border">
				<div class="job-header">
					<h3>{job.title}</h3>
					<span class="dates">{job.dates}</span>
				</div>
				<div class="org">{job.org}</div>

				{#if job.points.length > 0}
					<ul class="points">
						{#each job.points as point}
							<li>{point}</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	.section {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
	}

	.section-title {
		margin-bottom: 2rem;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.job {
		padding: 1.5rem;
		border-radius: var(--radius-lg);
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.job-header h3 {
		font-size: 1.05rem;
		color: var(--text);
	}

	.dates {
		font-size: 0.8rem;
		color: var(--muted);
		white-space: nowrap;
	}

	.org {
		font-size: 0.9rem;
		color: var(--neon);
		margin-top: 0.15rem;
		margin-bottom: 0.75rem;
	}

	.points {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-left: 1.1rem;
	}

	.points li {
		font-size: 0.9rem;
		color: var(--muted);
		list-style: disc;
	}
</style>
