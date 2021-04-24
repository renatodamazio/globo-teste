<template>
    <div class="grid grid-cols-8 gap-4">
        <div class="col-span-8">
            Cluster: OK
        </div>

        <div class="lg:col-span-4 col-span-8">
            <Card>
                <template v-slot:header>Memória</template>
                <graph apiurl="d23c3262-967e-4567-b7f6-2fd263748811" />
            </Card>
        </div>

        <div class="lg:col-span-4 col-span-8">
            <Card>
                <template v-slot:header>CPU</template>
                <graph apiurl="b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f" />
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 'dash',
            admin: 1,

            links: [
                {
                    text: 'Usuários',
                    href: '/usuarios',
                    level: 1
                },{
                    text: 'Principal',
                    href: '/dash',
                    level: 0
                },{
                    text: 'Login',
                    href: '/login',
                    level: 0
                }
            ]
        }
    },

    components: {
        Graph: () => import('@/components/Graph'),
        Card: () => import('@/components/Card'),
    },
}
</script>

<style lang="postcss" scoped>
    aside {
        @apply border-r-2 bg-white flex-grow border-gray-100;
    }

    .main-section {
        @apply w-full p-6 overflow-auto;
        max-height: 100vh;
    }

    .wrapper {
        height: 100vh;
        @apply bg-blue-500 p-8;
    }

    .menu ul,
    .menu ul li,
    .menu ul li button {
        @apply w-full text-left;
    }

    .menu ul li button {
        @apply p-2 w-full;
    }

    .menu ul li button:hover {
        @apply bg-gray-800 text-white;
    }
</style>