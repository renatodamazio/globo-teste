<template>
    <div>
        <div class="modal" :class="modalOpenRemoveUser ? 'modal-visible' : 'modal-hidden'">
            <Card class="w-1/4 relative">
                <template slot:header>
                    <div class="p-2 w-full mb-3 border-b-2 font-black text-lg pt-4">
                        Remover Usuário

                        <span class="close-wrapper">
                            <Button v-on:click="modalOpenRemoveUser = false" className="px-4 rounded-full" variation="white">
                                <font-awesome-icon icon="times" />
                            </Button>
                        </span>
                    </div>
                </template>

                <div class="pb-8 pt-4 text-center ">
                    Deseja remover o usuário <b>{{ selectedUser.name }}</b> ?
                </div>

                <div class="flex space-x-4 border-t-2 pt-3">
                    <Button class="w-full" className="w-full" v-on:click="confirmRemoveUser(selectedUser.id)">Sim, remover</Button>
                    <Button class="w-full" v-on:click="closeModal" className="w-full" variation="danger">Cancelar</Button>
                </div>
            </Card>
        </div>

        <div class="modal" :class="modalOpen ? 'modal-visible' : 'modal-hidden'">
            <Card class="w-1/4 relative">
                <template slot:header>
                    <div class="p-2 w-full mb-3 border-b-2 font-black text-lg py-4">
                        {{modal_title}}

                        <span class="close-wrapper">
                            <Button v-on:click="closeModal" className="px-4 rounded-full" variation="white">
                                <font-awesome-icon icon="times" />
                            </Button>
                        </span>
                    </div>
                </template>

                <div class="p-2">
                    <form @submit="save">
                        <FormInput 
                            label="Nome" 
                            type="text"
                            required
                            v-model="formValues.name"
                        />
                        <FormInput 
                            label="E-mail" 
                            type="email"
                            required
                            v-model="formValues.email"
                        />
                        
                        <FormInput 
                            label="Senha" 
                            type="password"
                            required
                            v-model="formValues.password"
                        />
                        <div class="border-t-2 pt-4 flex space-x-4">
                            <Button class="w-full" className="w-full">Salvar</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>

        <span class="flex w-full flex-row-reverse pb-8">
            <Button v-on:click="modalOpen = true, modal_title = 'Novo usuário'">
                <span class="px-4">
                    Adicionar novo usuário
                    <font-awesome-icon icon="times" />
                </span>
            </Button>
        </span>

        <ul class="list">
            <li v-for="(user, i) in users" :key="i">
                <div>{{user.name}}</div>

                <div class="actions space-x-3">
                    <Button className="px-3" variation="danger" v-on:click="openModalRemoveUser(user, i)">
                        <font-awesome-icon icon="times" />
                    </Button>
                    
                    <Button className="px-3" v-on:click="openModalEditUser(user, i)">
                        <font-awesome-icon icon="edit" />
                    </Button>
                </div>
            </li>

            <li v-if="!users.length" class="h-full">
                <div class="w-full h-full text-center p-8 bg-white item-center">    
                    <h1 class="text-xl">Nenhum usuário cadastrado</h1>
                    <p class="py-3 text-gray-500">Clique no link para começar</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data:() => ({
        modalOpen: false,
        modalOpenRemoveUser: false,
        modal_title: 'Novo usuário',
        selectedUser: '',
        
        formValues: {
            name: '',
            password: '',
            email: ''
        },

        users: [
            {
                name: 'John Doe',
                email: 'usuariocomum@teste.com.br',
                access: '0',
                password: '123mudar',
            },
            {
                name: 'Lorem Ipsum',
                email: 'usarioadm@teste.com.br',
                access: '1',
                password: '123mudar',
            }
        ]
    }),

    components: {
        FormInput: () => import('@/components/FormInput'),
        Card: () => import('@/components/Card'),
        Button: () => import('@/components/Button')
    },

    methods: {
        closeModal() {
            this.modalOpen = false;
            this.modalOpenRemoveUser = false;

            this.cleanFormValues();
        },

        cleanFormValues() {
            this.formValues = {
                name: '',
                email: '',
                password: ''
            }
        },

        openModalRemoveUser(user, i) {
            this.selectedUser = user;
            this.selectedUser.id = i;
            this.modalOpenRemoveUser = true;
        },

        confirmRemoveUser(id) {
            this.users.splice(id, 1);
            this.modalOpenRemoveUser = false;
        },

        openModalEditUser(user, i) {
            this.modal_title = "Editar";
            this.formValues = Object.assign({}, user);
            this.formValues.id = i;
            this.modalOpen = true;
        },

        save(e) {
            e.preventDefault();

            if ("id" in this.formValues) {
            
                this.users[this.formValues.id] = this.formValues;
                this.modalOpen = false;
            
            } else {
                
                const values = Object.assign({}, this.formValues);
                this.users.push(values);
                this.modalOpen = false;

            }

            this.cleanFormValues();
        }
    }
}
</script>

<style lang="postcss" scoped>
    .close-wrapper {
        @apply absolute top-0 right-0 p-2;
    }

    .close-wrapper button {

    }

    .modal {
        @apply fixed w-full h-full flex items-center justify-center top-0 left-0 transition;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal.modal-hidden {
        @apply invisible opacity-0;
    }

    .modal.modal-visible {
        @apply visible opacity-100;
    }

    .list {
        @apply flex flex-col w-full text-gray-800 font-bold rounded-md overflow-hidden;
    }

    .list li {
        @apply p-2 flex justify-between w-full items-center transition;
    }

    .list li:hover {
        @apply bg-gray-200 !important;
    }

    .list li:nth-child(odd) {
        @apply bg-gray-100;
    }

    .list li .actions {
        @apply flex flex-row p-2;
    }
</style>