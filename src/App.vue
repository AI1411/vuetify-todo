<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :mobile-breakpoint="768"
        app
    >
      <v-img
          class="pa-4 pt-7"
          height="150"

      >
        <v-avatar size="70" class="mb-2">
          <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
        </v-avatar>
        <div class="text-subtitle-1 font-weight-bold">akira ishii</div>
        <div class="text-subtitle-2">AI1411</div>
      </v-img>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
        src="mountains.jpg"
        prominent
        height="150"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0 header-container">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search/>
        </v-row>
        <v-row>
          <v-toolbar-title class="ml-4 text-h4">{{ $store.state.appTitle }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time/>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Shared/Snackbar";
import Search from "@/components/Todo/Tools/Search";
import LiveDateTime from "@/components/Todo/Tools/LiveDateTime";

export default {
  components: {
    'snackbar': Snackbar,
    'search': Search,
    'live-date-time': LiveDateTime
  },
  data: () => ({
    drawer: null,
    items: [
      {title: 'Todo', icon: 'mdi-format-list-checks', to: '/'},
      {title: 'about', icon: 'mdi-format-list-checks', to: '/about'},
    ],
  }),
  mounted() {
    this.$store.dispatch('getTasks');
  }
}
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>