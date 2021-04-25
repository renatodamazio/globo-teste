<template>
    <div class="grid grid-cols-8 gap-4">
        <div class="col-span-8 mb-4 text-gray-500 px-1 flex text-sm items-center space-x-3">
            <b>Status:</b> <i class="status" :style="`background-color: ${status}`"></i>
        </div>

        <div class="lg:col-span-4 col-span-8">
            <Card>
                <template v-slot:header>Memória</template>
                <graph apiurl="get-memory-use" />
            </Card>
        </div>

        <div class="lg:col-span-4 col-span-8">
            <Card>
                <template v-slot:header>CPU</template>
                <graph apiurl="get-cpu-use" />
            </Card>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            active: 'dash',
            admin: 1,
            status: '',
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

    created() {
        this.getClusterStatus();
    },

    methods: {
        getClusterStatus() {
            axios.get('http://localhost:3000/get-cluster-status')
            .then(({ data }) => {
                this.status = data.status;
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }
}
</script>

<style lang="postcss" scoped>
    .status {
        width: 10px;
        height: 10px;
        @apply inline-block rounded-full;

    }
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