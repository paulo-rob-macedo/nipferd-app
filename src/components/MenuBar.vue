<template>
  <div>
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
      <v-navigation-drawer permanent dark v-model="drawer" :clipped="clipped" app>
        <v-list dense>
          <template>
            <div v-for="(link, i) in links" :key="i">
              <v-list-group
                v-if="link.subLinks"
                v-model="lista"
                :prepend-icon="link.icon"
                no-action
                link
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="subItem in link.subLinks" :key="subItem.title" :to="subItem.to">
                  <v-list-item-icon>
                    <v-icon v-text="subItem.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="subItem.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else :to="link.to" link>
                <v-list-item-icon>
                  <v-icon v-text="link.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
    <v-footer dark app>
      <v-spacer></v-spacer>
      <div>powered by DVK &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UsuarioLogin } from "@/models/UsuarioLogin.js";

import MenuBar from "@/components/MenuBar.vue";

export default {
  name: "MenuBar",
  data: () => ({
    drawer: false,
    clipped: true,
    usuarioLogin: new UsuarioLogin(),
    lista: 1,
    links: [
      {
        to: "/",
        icon: "mdi-view-dashboard",
        title: "Painel"
      },
      {
        icon: "mdi-archive",
        title: "Cadastro",
        subLinks: [
          {
            title: "Produto",
            icon: "mdi-account",
            to: "/prod/0"
          },
          {
            title: "Unidade",
            icon: "mdi-account",
            to: "/unid/0"
          },
          {
            title: "Cliente",
            icon: "mdi-account",
            to: "/cliente/0"
          },
          {
            title: "Usuário",
            icon: "mdi-account",
            to: "/usuario/0"
          }
        ]
      }
    ]
  }),
  methods: {},
  computed: {
    ...mapGetters(["getLogado"])
  },
  mounted() {
    this.usuarioLogin = this.getLogado;
  }
};
</script>

<style>
</style>