<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Richard Akinmade</title>
	<meta name="description" content={project.description} />
</svelte:head>

<article class="project-page fade-in">
  <a href="/projects" class="back">← Back</a>

  <header class="glass hero">
    <h1>{project.title}</h1>
    <p>{project.description}</p>
  </header>

  <img src={`/images/landscape/${project.image}`} class="hero-img" alt={project.title}/>

  <section class="glass section">
    <h2>Stack</h2>
    <ul class="tools">
      {#each project.tools as tool}
        <li>{tool}</li>
      {/each}
    </ul>
  </section>

  <section class="glass section">
    <h2>Links</h2>
    {#if project.code}
      <a href={project.code}>Source</a>
    {/if}
    {#if project.demo}
      <a href={project.demo}>Live</a>
    {/if}
    {#if !project.code && !project.demo}
      <p class="muted-note">No public links yet — this project is still in development.</p>
    {/if}
  </section>
</article>

<style>
.project-page {
  max-width: 900px;
  margin: auto;
}

.back {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: var(--neon);
}

.hero {
  padding: 2.5rem;
  margin-bottom: 2rem;
}

.hero p {
  color: var(--muted);
}

.hero-img {
  width: 100%;
  border-radius: var(--radius);
  margin-bottom: 2rem;
}

.section {
  padding: 2rem;
  margin-bottom: 2rem;
}

.muted-note {
  color: var(--muted);
  font-size: 0.9rem;
}
</style>
