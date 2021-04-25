<template>
    <div>
        <label class="input-element-choose" :for="id">
            <input 
                :id="id" 
                :type="type" 
                :name="name"
                :required="required"
                :value="value"
                :checked="defaultValue == value"
                @change="$emit('input', defaultValue)" 
            />
            <span class="choose"></span>
            <span>{{ label }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                default: ''
            },
            defaultValue: {
                default: ''
            },
            type: {
                required: true
            },
            name: {
                required: true
            },
            id: {
                required: true
            },
            label: {
                required: true
            },
            required: {
                default: false
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .input-element-choose {
        @apply flex items-center space-x-1 cursor-pointer;
    }

    .input-element-choose input {
        @apply hidden;
    }

    .choose {
        width: 20px;
        height: 20px;
        @apply bg-blue-500 border-2 flex items-center justify-center border-white cursor-pointer inline-block text-white rounded-full;
    }

    .input-element-choose input:checked ~ .choose:before {
        opacity: 1;
    }

    .choose::before {
        content: '';
        width: 8px;
        height: 8px;
        opacity: 0;
        @apply rounded-full bg-white inline-block transition;
    }
</style>