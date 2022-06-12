
<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        image="https://i.redd.it/fsipwrv7fgkz.jpg"
        color="#406daa"
        density="prominent"
        class="header"
      >
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.2), rgba(128,208,199,.2)"
          ></v-img>
        </template>
        <v-toolbar-title>Vuetify todo</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" bottom temporary>
        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            :to="item.to"
            active-color="primary"
          >
            <v-list-item-avatar start>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Todo List",
        icon: "mdi-format-list-checks",
        to: "/",
      },
      {
        title: "About",
        icon: "mdi-information",
        to: "/about",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.header {
  color: #fff;
}
</style>