<template>
    <div class="bg-white rounded-xl py-4 px-2 h-auto shadow-md">
        <div class="w-full text-lg font-black text-gray-800"><slot name="header"></slot></div>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "Card"
}
</script>