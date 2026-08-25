<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { darkMode, showCV, showCVMenu, showMobileMenu } from '$lib/stores/uiStore';
	import CVViewer from '$lib/components/CVViewer.svelte';
	import { onMount } from 'svelte';

	const { children } = $props();

	$effect(() => {
		document.documentElement.className = $darkMode ? '' : 'light';
	});

	let showBackToTop = $state(false);
	let backToTopClicked = $state(false);

	const SCROLL_SHOW_THRESHOLD = 400;

	function handleScroll() {
		showBackToTop = window.scrollY > SCROLL_SHOW_THRESHOLD;
	}

	const backtoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// retrigger the click-pulse animation even on rapid repeat clicks
		backToTopClicked = false;
		requestAnimationFrame(() => {
			backToTopClicked = true;
		});
	}

	function handleBackToTopAnimationEnd() {
		backToTopClicked = false;
	}

	onMount(() => {
		showCVMenu.set(false)
		showMobileMenu.set(false)
		showCV.set(false)

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Richard Akinmade — Full-Stack Developer</title>
	<meta name="description" content="Portfolio of Richard Akinmade, a full-stack and cross-platform developer building robust, scalable, and secure frontend and backend systems." />
</svelte:head>

<div class="app">
	<Header />

	{#if $showCV}
		<div class="cv-container show-cv">
			<CVViewer />
		</div>
	{/if}

	<main class="app-main">
		{@render children()}
	</main>
	<button class="back-to-top-btn"
		class:visible={showBackToTop}
		class:clicked={backToTopClicked}
		onclick={backtoTop}
		onanimationend={handleBackToTopAnimationEnd}
		aria-label="Back to top">
		<svg viewBox="0 0 24 24" class="icon chevron"
			fill="none" stroke-linejoin="round">
			<polyline points="6 9 12 15 18 9" />
		</svg>
	</button>
	<Footer />
</div>
