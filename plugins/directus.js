import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('https://cms.headless.optical.coffee').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});
