<template>
    <div class="text-red-800 bg-red-200 rounded-md mb-4 w-full px-3 py-2">
        {{message}}
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>