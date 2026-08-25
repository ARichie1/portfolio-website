<script>
	import { showMobileMenu} from "$lib/stores/uiStore"
	import { firstName } from "$lib/stores/bio"
	import NavBar from "./NavBar.svelte";
	const toggleMenu = () => showMobileMenu.update(v => !v);
</script>

<header class="app-header glass">
	<div class="header-left">
		<a href="/" class="logo-link" aria-label="Home">
			<p class="logo">{firstName}<span>.</span></p>
		</a>
	</div>

	<NavBar />

	<button class="hamburger-btn" class:show-mobile-menu={$showMobileMenu} 
		onclick={toggleMenu}
		aria-label="Toggle menu">
		<svg viewBox="0 0 24 24" class="icon">
			<line class="line top" x1="3" y1="6" x2="21" y2="6" />
			<line class="line middle" x1="3" y1="12" x2="21" y2="12" />
			<line class="line bottom" x1="3" y1="18" x2="21" y2="18" />
		</svg>
	</button>
</header>
