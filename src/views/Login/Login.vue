<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Login - Nipferd</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="loginForm" v-model=valid>
                  <v-text-field label="Email" 
                    v-model="email"
                    prepend-icon="mdi-account" 
                    type="text"
                    :rules="emailRules">
                  </v-text-field>
                  <v-text-field
                    id="password"
                    label="Senha"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    :rules="passwordRules"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'" 
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
               <v-card-actions>
                   <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit">Entrar</v-btn>
                </v-card-actions>
              <v-card-actions>
                <router-link :to="{name:'RememberLogin'}">Esqueci a senha ?</router-link>
                <v-spacer></v-spacer>
                <router-link :to="{name:'UsuarioCrud',params:{id:0}}">Novo Registro</router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import {mapGetters,mapActions} from 'vuex';

import {UsuarioLogin} from '@/models/UsuarioLogin.js';

export default {
  name: "Login",
  data: () => ({
    valid: false,
    email:'',
    password:'',
    showPassword: false,
    remeberPassword: false,
    usuarioLogin:new UsuarioLogin(),
        emailRules: [
      v => !!v || "Informe o Email!",
      v => /.+@.+/.test(v) || "Email invalido!!"
    ],
    passwordRules: [
      v => !!v || "Informe a Senha!",
      v => (v && v.length >= 5) || "A senha dever conter mais 5 caracteres!",
      v => /(?=.*[A-Z])/.test(v) || "Senha deve conter uma letra Maiuscula!",
      v => /(?=.*\d)/.test(v) || "Senha deve conter um numero!"
    ]
  }),
  methods: {
    ...mapActions([
      'setUsuarioLogin'
    ]),
    submit() {
      if(! this.$refs.loginForm.validate()) {
          return;
      }
      this.usuarioLogin.id=1;
      this.usuarioLogin.Nome="Paulo";
      this.usuarioLogin.Apelido="Pai";
      this.usuarioLogin.Email=this.email;
      this.setUsuarioLogin(this.usuarioLogin);
      if (this.$router.name !=='Home') {
        this.$router.push('/').catch(()=>{});
      }
    }
  },
  computed:{
    ...mapGetters([
      'getLogado'
    ])
  }
};
</script>

<style scoped>
</style>>
