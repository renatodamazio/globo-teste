<template>
    <div class="login-wrapper">
        <Card class="card-login">
            <form @submit.prevent="handleSubmit">
                <h1 class="text-xl font-black">Login</h1>
                
                <hr class="my-4"/>
                
                <Message v-if="erroMessage" :message="erroMessage" />

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
import axios from 'axios';

export default {
    data() {
        return {
            api_url: process.env.VUE_APP_API_URL,
            erroMessage: false,
            email: 'usarioadm@teste.com.br',
            password: '123mudar',
        }
    },

    components: {
        FormInput: () => import('./FormInput'),
        Button: () => import('./Button'),
        Card: () => import('./Card'),
        Message: () => import('./Message')
    },

    methods: {
        handleSubmit() {
            axios.post(`${this.api_url}/login`, {
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                if (data.success) {
                
                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('user', JSON.stringify(data.resp));
                    this.$router.push('/dash');
                    location.reload();
                
                } else {

                    this.erroMessage = data.message;
                
                }
            })
            .catch((err) => {
                console.error(err);
            })
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