<script>
	import { aboutFull } from "$lib/stores/bio";
  import { assetsPath } from "$lib/stores/assets";
</script>

<svelte:head>
	<title>About — Richard Akinmade</title>
	<meta name="description" content="Learn more about Richard Akinmade's background, skills, and approach to full-stack and cross-platform development." />
</svelte:head>

<section class="about-me fade-in page-section">
	<div class="about-inner">
		<h1 class="about-title">About Me</h1>

		<div class="bio">
			<div class="pfp-container">
				<div class="pfp-frame">
					<img class="pfp" alt="Profile"
					src={assetsPath.pfp}/>
					<div class="pfp-accent-line"></div>
				</div>
			</div>

			<div class="about-content">
				<div class="description">
					<p>{aboutFull.intro}</p>
					<p>{aboutFull.software}</p>
					<p>{aboutFull.web3}</p>
					<p>{aboutFull.hardware}</p>
					<p>{aboutFull.mindset}</p>
				</div>
			</div>
		</div>

		<div class="about-to-contact">
			<p>Feel Free To Contact Me Via Social Media or Just Send A Mail</p>
			<div class="learn-more">
				<a href="/contact" class="redirect-link">
					<span>Contact Me</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.about-title {
		font-size: 2.6rem;
		margin-bottom: 0.6rem;
	}

	.about-me.page-section{
		padding-top: 0% !important;
	}
	.about-me.page-section .about-inner .bio{
		flex-direction: column;
		text-align: justify;
		margin-top: 20px;
		width: 100%;
	}
	.about-me.page-section 
	.about-inner .bio .about-content{
		margin-top: 30px;
	}

	.about-to-contact{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8em;
		margin-top: 30px;
	}
	.about-to-contact p{
		width: 70%;
	}
	.about-to-contact .learn-more{
		width: 30%;
		margin-top: 0;
		justify-content: flex-end;
	}
	.about-to-contact .learn-more a{
		font-size: 0.8em;
	}
</style>