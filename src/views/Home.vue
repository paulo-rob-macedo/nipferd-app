<template>
  <v-container>
    <v-app-bar dark dense>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Nilperd</v-toolbar-title>
    </v-app-bar>
    <!-- <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main> -->
    <v-navigation-drawer dark v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item to="/usuario/0">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import { UsuarioLogin } from "@/models/UsuarioLogin.js";

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import MenuBar from "@/components/MenuBar.vue";

export default {
  name: "Home",
  components: {
    MenuBar
  },
  data: () => ({
    usuarioLogin: new UsuarioLogin(),
    drawer: false,
    group: ""
  }),
  watch: {},
  computed: {
    ...mapGetters(["getLogado"])
  },
  mounted() {
    this.usuarioLogin = this.getLogado;
    if (this.usuarioLogin.id == 0) {
      this.$router.push("/login").catch(() => {});
    }
  }
};
</script>
