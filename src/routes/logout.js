import { browser } from '$app/env';
import { session } from '$app/stores';
import supabase from '$lib/db';

export async function get() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	if (browser) {
		session.set(null);
	}

	return {
		status: 302,
		headers: {
			location: '/',
			'set-cookie': `session=; path=/; expires=0;`
		}
	};
}
