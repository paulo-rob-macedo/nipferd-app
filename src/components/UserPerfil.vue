<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on">
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list dark>
        <template v-for="(item, index) in items">
          <v-list-item v-if="item.title" :key="item.title">
            <v-list-item-icon>
                <v-icon>
                {{item.icon}}
                </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-divider v-else-if="item.divider" :key="index"></v-divider>
        </template>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UsuarioLogin } from "@/models/UsuarioLogin.js";

export default {
  name: "UserPerfil",
  data: () => ({
    usuarioLogin: new UsuarioLogin(),
    items: []
  }),
  methods: {},
  computed: {
    ...mapGetters(["getLogado"])
  },
  mounted() {
    this.usuarioLogin = this.getLogado;
    this.items = [
      { title: this.usuarioLogin.Apelido ,icon:'mdi-account'},
      { divider: true },
      { title: "Preferencias",icon:'mdi-screwdriver' },
      { title: "Logout", icon:'mdi-logout' }
    ];
  }
};
</script>

<style>
</style>