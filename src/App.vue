<template>
  <v-app>  
    <router-view></router-view>
  </v-app>  
</template>

<script>
import {mapGetters} from 'vuex';
import {UsuarioLogin} from '@/models/UsuarioLogin.js';

import Home from '@/views/Home';
import Login from '@/views/Login/Login';
import UnidCrud from '@/views/Unid/UnidCrud'
import ProdCrud from '@/views/Prod/ProdCrud'
import ClienteCrud from '@/views/Cliente/ClienteCrud'
import SenhaCrud from '@/views/Usuario/UsuarioCrud'

export default {
  name: 'App',
  components: {
    Home,Login,
    UnidCrud,ProdCrud,ClienteCrud,SenhaCrud
  },
  data: () => ({
    usuarioLogin:new UsuarioLogin()
  }),
  computed:{
    ...mapGetters([
      'getLogado'
    ])
  },
  mounted() {
    this.usuarioLogin=this.getLogado;
    if (this.usuarioLogin.id==0) {
      if (this.$router.name !=='Login'){
        this.$router.push('/login').catch(()=>{});
      }
    } else {
      if (this.$router.name !=='Home'){
        this.$router.push('/').catch(()=>{});
      }
    }
  }
};
</script>
