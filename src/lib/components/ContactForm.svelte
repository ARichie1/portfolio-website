<script lang="ts">
	import emailjs from "@emailjs/browser";
	import {
		PUBLIC_EMAILJS_SERVICE_ID,
		PUBLIC_EMAILJS_TEMPLATE_ID,
		PUBLIC_EMAILJS_PUBLIC_KEY
	} from "$env/static/public";

	const props = $props<{
		showTitle?: boolean;
		title?: string;
	}>();

	let title = $state(props.title ?? "Contact");
	let showTitle = $state(props.showTitle ?? false);

	type Status = "idle" | "sending" | "success" | "error";

	let name = $state("");
	let email = $state("");
	let message = $state("");
	let honeypot = $state(""); // hidden field — bots fill this in, humans never see it

	let status = $state<Status>("idle");
	let errorMessage = $state("");
	let fieldErrors = $state<{ name?: string; email?: string; message?: string }>({});

	const isConfigured =
		PUBLIC_EMAILJS_SERVICE_ID &&
		PUBLIC_EMAILJS_SERVICE_ID !== "your_service_id" &&
		PUBLIC_EMAILJS_TEMPLATE_ID &&
		PUBLIC_EMAILJS_TEMPLATE_ID !== "your_template_id" &&
		PUBLIC_EMAILJS_PUBLIC_KEY &&
		PUBLIC_EMAILJS_PUBLIC_KEY !== "your_public_key";

	function validate() {
		const errors: typeof fieldErrors = {};

		if (!name.trim()) {
			errors.name = "Please enter your name.";
		}

		if (!email.trim()) {
			errors.email = "Please enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			errors.email = "Please enter a valid email address.";
		}

		if (!message.trim()) {
			errors.message = "Please write a message.";
		} else if (message.trim().length < 10) {
			errors.message = "Message should be at least 10 characters.";
		}

		fieldErrors = errors;
		return Object.keys(errors).length === 0;
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		// honeypot tripped — silently pretend success, drop the message
		if (honeypot) {
			status = "success";
			return;
		}

		if (!validate()) return;

		if (!isConfigured) {
			status = "error";
			errorMessage =
				"Email sending isn't configured yet. See EMAIL_SETUP.md to connect EmailJS.";
			return;
		}

		status = "sending";
		errorMessage = "";

		try {
			await emailjs.send(
				PUBLIC_EMAILJS_SERVICE_ID,
				PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: name.trim(),
					from_email: email.trim(),
					message: message.trim(),
					time: new Date().toLocaleString()
				},
				{ publicKey: PUBLIC_EMAILJS_PUBLIC_KEY }
			);

			status = "success";
			name = "";
			email = "";
			message = "";
			fieldErrors = {};
		} catch (err) {
			status = "error";
			errorMessage = "Something went wrong sending your message. Please try again, or email me directly.";
			console.error("EmailJS send failed:", err);
		}
	}

	function resetStatus() {
		if (status === "success" || status === "error") status = "idle";
	}
</script>

<div class="contact-form-wrapper">
	{#if showTitle}
		<h4 class="form-title">{title}</h4>
	{/if}

	{#if status === "success"}
		<div class="form-status success" role="status">
			<svg viewBox="0 0 24 24" class="status-icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M20 6 9 17l-5-5" />
			</svg>
			<p>Thanks — your message is on its way. I'll get back to you soon.</p>
			<button type="button" class="reset-btn" onclick={resetStatus}>Send another message</button>
		</div>
	{:else}
		<form class="contact-form" onsubmit={handleSubmit} novalidate>
			<div class="field">
				<input
					type="text"
					placeholder="Name"
					name="name"
					bind:value={name}
					aria-invalid={!!fieldErrors.name}
					disabled={status === "sending"}
					required
				/>
				{#if fieldErrors.name}<span class="field-error">{fieldErrors.name}</span>{/if}
			</div>

			<div class="field">
				<input
					type="email"
					placeholder="Email"
					name="email"
					bind:value={email}
					aria-invalid={!!fieldErrors.email}
					disabled={status === "sending"}
					required
				/>
				{#if fieldErrors.email}<span class="field-error">{fieldErrors.email}</span>{/if}
			</div>

			<div class="field">
				<textarea
					placeholder="Message"
					name="message"
					bind:value={message}
					aria-invalid={!!fieldErrors.message}
					disabled={status === "sending"}
					required
				></textarea>
				{#if fieldErrors.message}<span class="field-error">{fieldErrors.message}</span>{/if}
			</div>

			<!-- Honeypot: hidden from real users, invisible to screen readers -->
			<input
				type="text"
				name="company"
				bind:value={honeypot}
				class="honeypot"
				tabindex="-1"
				autocomplete="off"
				aria-hidden="true"
			/>

			{#if status === "error"}
				<p class="form-error" role="alert">{errorMessage}</p>
			{/if}

			<button type="submit" disabled={status === "sending"}>
				{#if status === "sending"}
					<span class="spinner" aria-hidden="true"></span>
					Sending...
				{:else}
					Send
				{/if}
			</button>
		</form>
	{/if}
</div>

<style>
	.contact-form-wrapper {
		width: 400px;
		height: 500px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		padding: 0.5em;
	}
	.contact-form {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		font-weight: bold;
	}

	.field {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	input,
	textarea {
		width: 100%;
		border: 2px solid var(--border);
		border-radius: 6px;
		padding: 10px;
		color: var(--text);
		border-radius: var(--radius-sm);
		background: transparent;
		font: inherit;
	}

	input {
		height: 50px;
	}

	textarea {
		max-width: 100%;
		min-width: 100%;
		min-height: 100px;
		max-height: 60%;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border: none;
		box-shadow: 0 0 0 2px var(--neon);
	}

	input[aria-invalid="true"],
	textarea[aria-invalid="true"] {
		border-color: #ff5c5c;
	}

	input:disabled,
	textarea:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.field-error {
		font-size: 0.75rem;
		font-weight: 500;
		color: #ff7070;
	}

	.honeypot {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
		pointer-events: none;
		left: -9999px;
	}

	.form-error {
		width: 100%;
		font-size: 0.8rem;
		font-weight: 500;
		color: #ff7070;
		text-align: center;
		margin: 0;
	}

	button[type="submit"] {
		position: relative;
		padding: 0.85rem 2rem;
		border: 1.5px solid var(--border);
		color: var(--text);
		border-radius: 3px;
		font-family: var(--font-body);
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.25s ease;
		overflow: hidden;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
	}

	button[type="submit"]:hover:not(:disabled) {
		background: transparent;
		color: var(--accent);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px var(--neon);
	}

	button[type="submit"]:disabled {
		cursor: not-allowed;
		opacity: 0.75;
	}

	.spinner {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid var(--border);
		border-top-color: var(--neon);
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.form-status {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
	}

	.form-status.success .status-icon {
		width: 3rem;
		height: 3rem;
		color: var(--neon);
		filter: drop-shadow(0 0 8px var(--neon-soft));
	}

	.form-status p {
		color: var(--text);
		max-width: 280px;
	}

	.reset-btn {
		background: transparent;
		border: 1.5px solid var(--border);
		color: var(--text);
		padding: 0.6rem 1.4rem;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition: all 0.25s ease;
	}

	.reset-btn:hover {
		color: var(--accent);
		border-color: var(--neon);
	}
</style>
