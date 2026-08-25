<script>
	import { showCV } from "$lib/stores/uiStore";
	import { assetsPath } from "$lib/stores/assets";

	const src = assetsPath?.cv
</script>

<div class="cv-overlay">
    <div class="cv-modal">
        <div class="close-container">
            <button class="close"
                aria-label="cv close button"
                onclick={() => showCV.set(false)}>
                    <svg viewBox="0 0 24 24" class="icon">
                        <line class="line top" x1="6" y1="6" x2="18" y2="18" />
                        <line class="line bottom" x1="6" y1="18" x2="18" y2="6" />
                    </svg>
            </button>
        </div>

        <iframe src={src} title="CV Viewer"></iframe>
    </div>
</div>

