<template>
  <v-app :dark="dark">
    <v-navigation-drawer v-model="drawer" fixed app>
      <div class="logoContainer">
        <Logo />
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
          :aria-label="item.title"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark color="teal" flat fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer dark :absolute="!fixed" app>
      <span
        >&copy; {{ new Date().getFullYear() }} Testimonies | All Rights
        Reserved</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "../components/logo";
export default {
  components: { Logo },
  data() {
    return {
      drawer: false,
      fixed: false,
      dark: false,
      navItems: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-phone-plus",
          title: "Sign Up",
          to: "/signup",
        },
        {
          icon: "mdi-christianity-outline",
          title: "Beliefs",
          to: "/beliefs",
        },
        // {
        //   icon: "mdi-newspaper-variant-multiple",
        //   title: "Articles",
        //   to: "/articles",
        // },
        {
          icon: "mdi-head-question-outline",
          title: "FAQ",
          to: "/faq",
        },
      ],
      title: "Testimonies",
    };
  },
};
</script>

<style scoped>
.logoContainer {
  width: 8rem;
  margin: auto;
  padding: 2rem;
}
</style>
