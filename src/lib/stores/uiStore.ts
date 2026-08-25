import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const THEME_STORAGE_KEY = 'theme';

function getInitialDarkMode(): boolean {
	if (!browser) return true; // dark mode first, per design

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === 'light') return false;
	if (stored === 'dark') return true;

	return true; // no saved preference yet — default to dark
}

export const darkMode = writable(getInitialDarkMode());

if (browser) {
	darkMode.subscribe((value) => {
		localStorage.setItem(THEME_STORAGE_KEY, value ? 'dark' : 'light');
	});
}

export const showCV = writable(false);
export const  showCVMenu = writable(false);
export const  showMobileMenu = writable(false);