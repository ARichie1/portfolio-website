<script lang="ts">
	import { darkMode, showCV, showCVMenu, showMobileMenu } from "$lib/stores/uiStore";
	import { assetsPath } from "$lib/stores/assets";

	const toggleTheme = () => darkMode.update(v => !v);
	const toggleCVMenu = () => showCVMenu.update(v => !v);

	const navLinks = [
		{title: "home", url: "/", id:0},
		{title: "projects", url: "/projects", id:1},
		{title: "about", url: "/about", id:2},
		{title: "experience", url: "/experience", id:4},
		{title: "contact", url: "/contact", id:3}
	]
</script>

<nav class="main-nav" class:show-mobile-menu={$showMobileMenu}>
	<div class="nav-inner-wrapper nav-section">
		<ul class="nav-menu">
		{#each navLinks as navlink (navlink.id)}
			<li>
				<a href={navlink.url}
					onclick={() => {
						showCVMenu.set(false)
						showMobileMenu.set(false)}}>
					{navlink.title}</a>
			</li>
		{/each}
		</ul>
		
		<ul class="nav-actions nav-section">
			<li class="cv-button-container nav-action">
				<button class="cv-btn link-btn" 
					onclick={toggleCVMenu}
					aria-label="Toggle CV menu">
					My Cv
					<svg viewBox="0 0 24 24" class="icon chevron"
						class:open-cv-menu={$showCVMenu}
						fill="none" stroke-linejoin="round">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>

				{#if $showCVMenu}
					<div class="cv-menu glass fade-in"
						class:show-cv-menu={$showCVMenu}>
						<ul>
							<li>
								<a href={assetsPath.cv} download class="btn btn-outline"
									onclick={() => {
										showCVMenu.set(false)
										showMobileMenu.set(false)}}>
									Download CV
								</a>
							</li>
							<li>
								<button class="btn btn-glass link-button" 
									onclick={() => {
									showCV.set(true)
									showCVMenu.set(false)
									showMobileMenu.set(false)}}>
									Preview CV
								</button>
							</li>
						</ul>
					</div>
				{/if}
			</li>
			<li class="nav-action">
				<button class="theme-toggle-btn"
					class:dark={$darkMode}
					class:light={!$darkMode}
					onclick={toggleTheme} aria-label="Toggle Theme">
					
					<p class="icon-wrapper">
						{#if !$darkMode}
							<!-- 🌞 Sun -->
							<svg viewBox="0 0 24 24" class="icon sun"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="4.5" />
								<g stroke-width="2" stroke-linecap="round">
								<line x1="12" y1="1.5" x2="12" y2="4"/>
								<line x1="12" y1="20" x2="12" y2="22.5"/>
								<line x1="1.5" y1="12" x2="4" y2="12"/>
								<line x1="20" y1="12" x2="22.5" y2="12"/>
								<line x1="4.2" y1="4.2" x2="6" y2="6"/>
								<line x1="18" y1="18" x2="19.8" y2="19.8"/>
								<line x1="4.2" y1="19.8" x2="6" y2="18"/>
								<line x1="18" y1="6" x2="19.8" y2="4.2"/>
								</g>
							</svg>
						{:else if $darkMode}
							<!-- 🌙 Moon -->
							<svg viewBox="0 0 24 24" class="icon moon"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
							</svg>
						{/if}
					</p>
				</button>
			</li>
		</ul>
	</div>
</nav>
