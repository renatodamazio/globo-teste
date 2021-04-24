<template>
    <div class="login-wrapper">
        <Card class="card-login">
            <form @submit="handleSubmit">
                <h1 class="text-xl font-black">Login</h1>
                <hr class="my-4"/>
                <FormInput 
                    label="E-mail"
                    type="email"
                    v-model="email"
                    :required="true"
                    placeholder="Digite seu e-mail"
                />
                
                <FormInput 
                    label="Senha"
                    type="password"
                    v-model="password"
                    :required="true"
                    placeholder="Digite seu e-mail"
                />

                <hr class="my-4"/>
                <Button className="lg:w-auto float-right px-8 w-full">Login</Button>
            </form>
        </Card>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    components: {
        FormInput: () => import('./FormInput'),
        Button: () => import('./Button'),
        Card: () => import('./Card')
    },

    methods: {
        handleSubmit(e) {
            e.preventDefault();
        }
    }
}
</script>

<style lang="postcss" scoped>
    .card-login {
        @apply w-full items-center justify-center px-6;
        max-width: 360px;
    }
    .login-wrapper {
        height: 100vh;
        @apply bg-blue-500 p-6 flex items-center justify-center;
    }
</style>