<template>
  <div id="app">
    <div class="wrapper flex flex-col flex-grow">
      <section class="flex flex-row h-full overflow-hidden rounded-md">
        <aside class="w-1/6">
          <nav class="menu overflow-hidden">
            <ul>
              <li v-for="(link, i) in links" :key="i" :class='`${routerName == link.href ? "active" : ""}`'>
                <router-link :to="link.href" v-if="allowAccess(link)">
                  <Button 
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

        <main class="main-section bg-white">
          <router-view></router-view>
        </main>
      </section>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
    aside {
      box-shadow: inset -3px 0px 15px #0000000d;
      @apply bg-white flex-grow;
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
            admin: 1,
            routerName: false,
            links: [
                {
                    text: 'Usuários',
                    href: '/usuarios',
                    icon: 'user',
                    level: 1
                },{
                    text: 'Principal',
                    href: '/dash',
                    icon: 'home',
                    level: 0
                },{
                    text: 'Login',
                    href: '/login',
                    icon: 'user-lock',
                    level: 0
                }
            ]
        }
    },

    created() {
      this.setActiveMenu();    
    },

    watch: {
      $route() {
        this.setActiveMenu();
      }
    },

    methods: {
      setActiveMenu() {
        this.routerName = this.$route.path;
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
