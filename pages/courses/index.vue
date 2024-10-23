<script lang="ts">

//import { createDirectus, rest, withToken, readItems } from '@directus/sdk';
//const client = createDirectus('https://cms.headless.optical.coffee').with(rest());
//const request = await client.request(
//  withToken('Token', readItems('courses'))
//);
//import { createDirectus, rest, withToken, readItems } from '@directus/sdk';
const courses = await useDirectus(readItems('courses', {}));
</script>

<template>
    <div>

    {{ courses }}
    </div>
</template>