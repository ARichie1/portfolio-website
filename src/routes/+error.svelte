<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Auto-redirect home after a few seconds, same as the previous 404 page did.
	onMount(() => {
		const timer = setTimeout(() => {
			goto('/');
		}, 4000);

		return () => clearTimeout(timer);
	});
</script>

<svelte:head>
	<title>{page.status} - {page.error?.message ?? 'Something went wrong'}</title>
</svelte:head>

<div class="error-page-container">
	<h1>{page.status}</h1>
	<h2>{page.error?.message ?? 'Something went wrong'}</h2>
	<p>Redirecting to the homepage shortly...</p>
	<a href="/"><button class="btn">Go Back Now</button></a>
</div>

<style>
	.error-page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 60vh;
		padding: 2rem 1rem;
		gap: 0.75rem;
	}

	.error-page-container h1 {
		font-size: clamp(3rem, 10vw, 6rem);
		font-weight: 900;
		color: var(--neon);
		line-height: 1;
		margin: 0;
	}

	.error-page-container h2 {
		font-size: 1.4rem;
		color: var(--text);
		margin: 0 0 0.5rem;
	}

	.error-page-container p {
		color: var(--muted);
		font-size: 0.9rem;
		margin: 0 0 1.5rem;
	}

	.btn {
		padding: 0.85rem 2rem;
		border: 1.5px solid var(--accent);
		background: var(--accent);
		color: #0a0a0b;
		border-radius: 3px;
		font-family: var(--font-body);
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.25s ease;
	}

	.btn:hover {
		background: transparent;
		color: var(--accent);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px var(--neon);
	}
</style>
