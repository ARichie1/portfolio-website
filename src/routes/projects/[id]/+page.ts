import { error } from '@sveltejs/kit';
import { projects } from '$lib/stores/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.id.toString() === params.id);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
