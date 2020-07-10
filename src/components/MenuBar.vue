<template>
  <div>
    <v-app>
      <v-toolbar prominent extended>
      <v-app-bar dense dark rounded fixed :clipped-left="true" app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Nilperd App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn>
          <v-icon>mdi-account</v-icon>
          {{usuarioLogin.Apelido}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
          <v-container>
             <router-view></router-view>
          </v-container>
      </v-main>   
      <v-navigation-drawer dark v-model="drawer" :clipped="true" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Menu</v-list-item-title>
            <v-list-item-subtitle>Catalogo</v-list-item-subtitle>
            <v-list-item-subtitle>Clientes</v-list-item-subtitle>
            <v-list-item-subtitle>Venda</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-navigation-drawer>
      </v-toolbar>
      <v-footer dark app>
        <v-spacer></v-spacer>
        <div>powered by DVK &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {UsuarioLogin} from '@/models/UsuarioLogin.js';

import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'MenuBar',
  data: () => ({
    drawer: false,
    usuarioLogin:new UsuarioLogin()
  }),
  methods: {
  },
  computed:{
    ...mapGetters([
      'getLogado'
    ])
  },
  mounted() {
    this.usuarioLogin=this.getLogado;
  }
};
</script>

<style>
</style>