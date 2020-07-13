<template>
  <v-navigation-drawer dark v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{this.usuarioLogin.Nome}}</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
    drawer: true,
    items: [
          { title: 'Home', icon: 'mdi-home' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Logout', icon: 'mdi-logout' },
        ],
    mini: true,
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
