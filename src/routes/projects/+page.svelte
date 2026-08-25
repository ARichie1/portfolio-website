<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { projects } from "$lib/stores/projects";

	let query = $state("");
	let activeTools = $state<string[]>([]);

	// Unique, sorted list of every technology used across all projects
	const allTools = [...new Set(projects.flatMap((p) => p.tools))].sort((a, b) =>
		a.localeCompare(b)
	);

	function toggleTool(tool: string) {
		activeTools = activeTools.includes(tool)
			? activeTools.filter((t) => t !== tool)
			: [...activeTools, tool];
	}

	function clearFilters() {
		query = "";
		activeTools = [];
	}

	const filteredProjects = $derived(
		projects.filter((project) => {
			const q = query.trim().toLowerCase();
			const matchesQuery =
				q === "" ||
				project.title.toLowerCase().includes(q) ||
				project.description.toLowerCase().includes(q) ||
				project.tools.some((tool) => tool.toLowerCase().includes(q));

			const matchesTools =
				activeTools.length === 0 ||
				activeTools.every((tool) => project.tools.includes(tool));

			return matchesQuery && matchesTools;
		})
	);

	const hasActiveFilters = $derived(query.trim() !== "" || activeTools.length > 0);
</script>

<svelte:head>
	<title>Projects — Richard Akinmade</title>
	<meta name="description" content="Browse Richard Akinmade's fullstack projects spanning frontend, backend, infrastructure, and modern web systems." />
</svelte:head>

<header class="projects-header">
	<h1>Projects</h1>
	<p>
		Fullstack projects exploring frontend, backend,
		infrastructure, and modern web systems.
	</p>
</header>

<div class="projects-toolbar">
	<div class="search-field">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="search-icon" fill="none"
			stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.35-4.35" />
		</svg>
		<input
			type="text"
			placeholder="Search projects by name, description, or tech..."
			bind:value={query}
			aria-label="Search projects"
		/>
		{#if query}
			<button
				type="button"
				class="clear-query-btn"
				onclick={() => (query = "")}
				aria-label="Clear search"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6 6 18M6 6l12 12" />
				</svg>
			</button>
		{/if}
	</div>

	<div class="tool-filters" role="group" aria-label="Filter by technology">
		{#each allTools as tool}
			<button
				type="button"
				class="filter-pill"
				class:active={activeTools.includes(tool)}
				onclick={() => toggleTool(tool)}
				aria-pressed={activeTools.includes(tool)}
			>
				{tool}
			</button>
		{/each}
	</div>

	<div class="results-meta">
		<span>
			{filteredProjects.length}
			{filteredProjects.length === 1 ? "project" : "projects"} found
		</span>
		{#if hasActiveFilters}
			<button type="button" class="clear-all-btn" onclick={clearFilters}>
				Clear filters
			</button>
		{/if}
	</div>
</div>

{#if filteredProjects.length > 0}
	<div class="projects-grid">
		{#each filteredProjects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
{:else}
	<div class="empty-state">
		<p>No projects match your search or filters.</p>
		<button type="button" class="clear-all-btn" onclick={clearFilters}>
			Clear filters
		</button>
	</div>
{/if}

<style>
	.projects-header {
		padding: 2.5rem;
		margin-bottom: 3rem;
	}

	.projects-header h1 {
		font-size: 2.6rem;
		margin-bottom: 0.6rem;
	}

	.projects-header p {
		color: var(--muted);
		max-width: 600px;
	}

	.projects-toolbar {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	.search-field {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}

	.search-icon {
		position: absolute;
		left: 1rem;
		width: 1.1rem;
		height: 1.1rem;
		color: var(--muted);
		pointer-events: none;
	}

	.search-field input {
		width: 100%;
		padding: 0.85rem 2.75rem;
		border: 1.5px solid var(--border);
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text);
		font-size: 0.9rem;
	}

	.search-field input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--neon);
	}

	.clear-query-btn {
		position: absolute;
		right: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: transparent;
		color: var(--muted);
		transition: color 0.2s ease, background 0.2s ease;
	}

	.clear-query-btn svg {
		width: 0.9rem;
		height: 0.9rem;
	}

	.clear-query-btn:hover {
		color: var(--text);
		background: var(--border);
	}

	.tool-filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.filter-pill {
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
		background: transparent;
		border: 1.5px solid var(--border);
		padding: 0.4rem 0.85rem;
		border-radius: 999px;
		transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
	}

	.filter-pill:hover {
		color: var(--text);
		border-color: var(--neon);
		transform: translateY(-1px);
	}

	.filter-pill.active {
		color: #000;
		background: var(--neon);
		border-color: var(--neon);
	}

	.results-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.8rem;
		color: var(--muted);
	}

	.clear-all-btn {
		background: transparent;
		color: var(--neon);
		font-size: 0.8rem;
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.clear-all-btn:hover {
		color: var(--text);
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 4rem 1rem;
		text-align: center;
		color: var(--muted);
	}

	.empty-state .clear-all-btn {
		font-size: 0.85rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.2rem;
	}
</style>
