<template>
<div>
  <v-navigation-drawer
  mobile-break-point="1"
  fixed
  :clipped="true"
  app
  right
  v-model="sideNav">
    <v-list dense>
      <v-list-tile @click="" :to="{name: 'signup'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Регистрация</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="" :to="{name: 'signin'}">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Вход</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="" :to="{name: 'authors'}">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Авторы</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
      dark
      class="primary"
      app
      :clipped-right="true"
      fixed>
    <v-toolbar-title>
      <router-link :to="{name: 'landing'}" class="logo">
        Kidsbook
      </router-link> 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot></slot>
    <v-toolbar-side-icon @click.stop="sideNavToggle"></v-toolbar-side-icon>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: "Head",
  props: ["showSearch"],
  data() {
    return {
      sideNav: false
    };
  },
  methods: {
    sideNavToggle() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.logo {
  color: #fff;
  text-decoration: none;
}
</style>
