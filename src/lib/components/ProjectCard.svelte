<script>
  const { project } = $props();

  const src = "/images/landscape/"
</script>

<article class="project card glass sliding-border">
  <img class="img" src={src + project.image} alt={project.title} />

  <div class="content">
    <div class="title">
      <h5><a href={`/projects/${project.id}`}>{project.title}</a></h5>
    </div>
    <p class="description">{project.description}</p>

    <ul class="tools">
      {#each project.tools as tool}
        <li class="skill-card sliding-border">{tool}</li>
      {/each}
    </ul>

    <div class="links">
      {#if project.viewCode}
        <a href={project.code} class="redirect-link">
          <span>Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      {/if}

      {#if project.viewDemo}
        <a href={project.demo} class="redirect-link">
          <span>Live Demo</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      {:else}
        <a href="/contact" class="redirect-link">
          <span>Contact For Demo</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      {/if}

      <div class="state">
        <p class="indicator" class:active={!project.inDevelopement}></p>
        {#if project.inDevelopement}
          Still In Development
        {:else}
          Active
        {/if}
      </div>
    </div>
  </div>
</article>
