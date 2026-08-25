<script>
	import {fullName, aboutMini} from "$lib/stores/bio"
	import { assetsPath } from "$lib/stores/assets";
	import {skills} from "$lib/stores/skills"
	import { projects } from "$lib/stores/projects";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Socials from "$lib/components/Socials.svelte";
	import ContactForm from "$lib/components/ContactForm.svelte";

	// Convert skills object to array for easier iteration
	const skillCategories = Object.values(skills);

	// Home page shows only featured projects, capped at 4.
	// Falls back to the first 4 projects if fewer than 4 are marked featured.
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
	const homeProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 4);
</script>

<div class="main-page">
	<section class="hero">

		<p class="hero-tagline">Code That Works, Designs That Engage</p>
		
		<h1 class="hero-title">
			Hi, I’m <span>{fullName}</span>
		</h1>

		<p class="hero-subtitle">
			Full-Stack & Cross-Platform Developer building robust, scalable,
			and secure frontend & backend systems.
		</p>

		<div class="call-to-actions">
			<div class="checkout">
				<a href={assetsPath.cv} download class="btn-link">Download Cv</a>
				<a href="/contact" class="btn-link sliding-border">Contact Me</a>
			</div>

			<Socials />
		</div>
	</section>

	<section class="about-me">
		<div class="about-inner">
			<div class="section-title">
				<h5>About Me</h5>
			</div>
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
						<p>{aboutMini.intro}</p>
						<p>{aboutMini.beyond}</p>
						<p>{aboutMini.end}</p>
					</div>
				</div>
			</div>
			<div class="learn-more">
				<a href="/about" class="redirect-link">
					<span>Learn More About Me</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section class="skills">
		<div class="skills-inner">
			<div class="section-title">
				<h5>What I Work With</h5>
			</div>

			<div class="skills-grid">
				{#each skillCategories as category, i}
					<div class="skill-card sliding-border">
						<div class="card-header">
							<span class="card-icon">{@html category.icon}</span>
							<div class="skill-title">{category.title}</div>
						</div>

						<ul class="tool-list">
							{#each category.tools as tool}
								<li class="tool-item sliding-border">
									<span class="dot"></span>
									{tool}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="projects">
		<div class="section-title">
			<h5>Projects</h5>
		</div>
		<div class="projects-grid">
			{#each homeProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<div class="learn-more">
			<a href="/projects" class="redirect-link">
				<span>See More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>
	</section>

	<section class="contact-me">
		<div class="section-title">
			<h5>Contact Me Via</h5>
		</div>

		<div class="contact-me-inner">
			<div class="social-links-container">
				<Socials />
			</div>

			<div><h6>OR</h6></div>
			
			<div class="contact-form-container">
				<ContactForm showTitle={true} title={"Send An E-mail"}/>
			</div>
		</div>
	</section>
</div>
