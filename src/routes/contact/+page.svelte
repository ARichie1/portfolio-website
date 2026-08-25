<script>
	import ContactForm from "$lib/components/ContactForm.svelte";
	import Socials from "$lib/components/Socials.svelte";

</script>

<svelte:head>
	<title>Contact — Richard Akinmade</title>
	<meta name="description" content="Get in touch with Richard Akinmade via email, social media, or the contact form." />
</svelte:head>

<section class="contact-me fade-in page-section">
	<header class="contacts-header">
		<h1>Contact Me</h1>
		<p>
			You can reach me via any social media platform below
		</p>
	</header>

	<div class="contact-content">
		<div class="social-links-container">
			<Socials />
		</div>

		<div class="or"><h6>OR</h6></div>
		
		<div class="contact-form-container">
			<ContactForm showTitle={true} title={"Send An E-mail"}/>
		</div>
	</div>
</section>

<style>
	.contact-me {
		max-width: 1200px;
		margin: auto;
		padding: 4rem 1rem;
	}

	.contacts-header {
		padding: 2.5rem;
		margin-bottom: 3rem;
	}

	.contacts-header h1 {
		font-size: 2.6rem;
		margin-bottom: 0.6rem;
	}

	.contacts-header p {
		color: var(--muted);
		max-width: 600px;
	}
</style>