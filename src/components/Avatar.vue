<template>
    <div class="avatar">
        <div class="figure"><label>{{initials}}</label></div>
        <div class="user-group-info">
            <span class="username">{{user.name}}</span>
            <label class="useraccess">{{ user.accessLevel == 1 ? 'Administrador' : 'Usuário'}}</label>
        </div>
    </div>
</template>
<script>
export default {
   props: ['user'],

   computed: {
       initials() {
           return this.user.name.charAt(0);
       }
   }
}
</script>
<style lang="postcss" scoped>
    .avatar {
        @apply flex text-sm items-center space-x-2 px-2 py-4;
    }

    .user-group-info {
        max-width: 224px;
        @apply flex flex-col overflow-clip overflow-hidden whitespace-nowrap;
    }

    .useraccess {
        @apply text-sm text-gray-500;
    }

    .figure {
        width: 50px;
        height: 50px;
        @apply border-2 justify-center items-center border-blue-500 inline-block rounded-full bg-blue-100 flex;
    }

    .figure label {
        @apply flex  text-xl font-black text-blue-800;
    }
</style>