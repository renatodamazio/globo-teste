<template>
    <div>
        <button @click="$emit('click', true)" :class="[variation, className]">
            <slot></slot>
            {{title}}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: ''
        },

        className: {
            default: ''
        },

        variation: {
            default: 'primary'
        }
    }
}
</script>

<style lang="postcss" scoped>
    button {
        @apply py-2 transition;
    }

    button.primary {
        @apply text-white bg-blue-500 border-blue-500 rounded-md;
    }

    button.primary:hover {
        @apply bg-blue-400 shadow-md;
    }

    button.danger {
        @apply text-white bg-red-500 border-red-500 rounded-md;
    }

    button.danger:hover {
        @apply bg-red-400 shadow-md;
    }

    button.white {
        @apply text-black bg-white border-white;
    }
    
    button.white:hover {
        @apply bg-gray-800 shadow-md text-white;
    }
</style>