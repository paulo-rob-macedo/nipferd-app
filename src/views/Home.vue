<template>
  <div>
    <Menu-bar></Menu-bar>
  </div>
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
    usuarioLogin: new UsuarioLogin()
  }),
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
