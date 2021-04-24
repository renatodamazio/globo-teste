<template>
    <div class="FormInput">
        <label :for="id">{{label}}</label>
        <input 
            class="transition duration-500 ease-in-out"
            :type='type'
            :name='name'
            :required='required'
            :placeholder="placeholder"
            :id='id'
            v-bind:value='value'
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: ['label', 'id', 'required', 'name', 'value', 'type', 'placeholder']
}
</script>

<style lang="postcss" scoped>
    .FormInput {
        @apply flex flex-col;
    }

    label {
        @apply text-gray-600 pb-1 text-sm;
    }

    input {
        @apply border-2 border-gray-200 p-2 w-full mb-4 transition-all outline-none rounded-md;
    }

    input:focus {
        @apply border-blue-500 shadow-md;
    }
</style>