<script>
  const { children } = $props();
</script>

<section class="projects-layout fade-in page-section">
  <div class="projects-content">
    {@render children()}
  </div>
</section>

<style>
.projects-layout {
  max-width: 1200px;
  margin: auto;
  padding: 4rem 1rem;
}
</style>
