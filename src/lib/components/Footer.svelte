<script>
	import { fullName } from "$lib/stores/bio";
</script>

<footer class="app-footer">
	<p>
		© {new Date().getFullYear()} {fullName}
	</p>
</footer>

<style>
    .app-footer {
        padding: 2rem 1rem;
        text-align: center;
        color: var(--muted);
        font-size: 0.85rem;
    }
</style>