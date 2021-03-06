<template>
  <div id="app" :class="openMenu ? 'open-menu' : ''">
    <div v-if="isLogged" class="wrapper flex flex-col flex-grow">
      <section class="flex flex-row h-full overflow-hidden rounded-md">

        <aside class="w-1/6">
          <nav class="menu overflow-hidden">
            <Avatar :user="user"/>
            <ul>
              <li v-for="(link, i) in links" :key="i" :class='`${routerName == link.href ? "active" : ""}`'>
                <router-link :to="link.href" v-if="allowAccess(link)">
                  <Button
                    v-on:click="clickEffect(link)"
                    variation="white"  
                    :className='`w-full rounded-md text-left px-3`'>
                      <span class="flex space-x-2 items-center px-2">  
                        <span><font-awesome-icon :icon="link.icon" /></span>
                        <span>{{ link.text}}</span>
                      </span>
                  </Button>
                </router-link>
              </li>
            </ul>
          </nav>
        </aside>

        <div class="bg-mobile-aside" @click="openMenu = false"></div>

        <main class="main-section bg-white">
          <header class="header">
            <button @click="openMenu = true" class="lg:hidden">
              <font-awesome-icon icon="bars" />
            </button>
            
            <h1 class="page-title">{{ page }}</h1>
          </header>
          <router-view></router-view>
        </main>
      </section>
    </div>
    <Login v-else/>
  </div>
</template>

<style lang="postcss" scoped>
    .header {
      @apply mb-3 border-gray-100 border-b-2 pb-4 flex space-x-4; 
    }

    .page-title {
     @apply text-xl font-black text-blue-500; 
    }

    aside {
      box-shadow: inset -3px 0px 15px #0000000d;
      @apply fixed top-0 h-full left-0 w-0 z-50 bg-white transition duration-700;
    }
    
    .open-menu aside {
      @apply w-1/2;
    }

    @screen lg {
      aside {
        @apply relative top-0 left-0 w-1/4;
      }
    }

    .bg-mobile-aside {
      @apply w-full h-full bg-gray-800 z-40 bg-opacity-70 fixed top-0 left-0 opacity-0 transition invisible duration-500;
    }

    .open-menu .bg-mobile-aside {
      @apply opacity-100 visible;
    }

    .main-section {
        @apply w-full p-6 overflow-auto;
        max-height: 100vh;
    }

    .wrapper {
        height: 100vh;
        @apply bg-blue-500 p-0;
    }

    @screen lg {
      .wrapper { 
        @apply p-8;
      }
    }

    .menu ul,
    .menu ul li,
    .menu ul li button {
        @apply w-full text-left;
    }

    .menu ul li.active {
        @apply bg-blue-800 text-white;
    }

    .menu ul li button {
        @apply p-2 w-full;
    }

    .menu ul li button:hover {
        @apply bg-gray-800 text-white;
    }
</style>

<script>
import './assets/css/main.css';

export default {
    data() {
        return {
            active: 'dash',
            isLogged: false,
            admin: 1,
            user: '',
            openMenu: false,
            page: 'Principal',
            routerName: false,
            links: [
                {
                  text: 'Principal',
                  href: '/dash',
                  icon: 'home',
                  level: 0
                },
                {
                  text: 'Usuários',
                  href: '/usuarios',
                  icon: 'user',
                  level: 1
                },
                {
                  text: 'Login',
                  href: '/',
                  icon: 'user-lock',
                  level: 0
                }
            ]
        }
    },

    created() {
      this.setActiveMenu();   
      this.setIsLogged(); 
    },

    components: {
      Login: () => import('@/components/Login'),
      Avatar: () => import('@/components/Avatar'),
    },

    watch: {
      $route() {
        this.setActiveMenu();
      }
    },

    methods: {
      clickEffect(data) {
        if (data.href === '/') {
          this.isLogged = false;
          localStorage.removeItem('isLogged');
        }
      },

      setIsLogged() {
        const isLogged = localStorage.getItem('isLogged');
        this.isLogged = isLogged;
      },

      setActiveMenu() {
        const user = JSON.parse(localStorage.getItem('user'));

        this.user = user[0];
        this.admin = user[0].accessLevel;

        this.routerName = this.$route.path;
        document.title = this.$route.name;
        this.page = this.$route.name;

        this.openMenu = false;
      },

      allowAccess({ level }) {
        const admin = this.admin;

        if (level <= admin) {
          return true;
        }
        return false;
      }
    }
}
</script>
