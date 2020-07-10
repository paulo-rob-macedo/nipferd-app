<template>
  <v-layout align-center justify-center row fill-height>
    <v-card width="600px">
      <v-card-title>
        <v-toolbar dark>
        <v-toolbar-title>Lembrar a Senha!</v-toolbar-title>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
          <v-alert
            :value="alert"
            type="success"
            transition="scale-transition">
           Enviado senha para {{email}}
          </v-alert>
        <v-form ref="rememberForm" v-model="valid">
            <v-text-field 
                v-model="email" 
                label="Email" 
                prepend-icon="mdi-email"
                :rules="emailRules"
                v-show="! alert">
            </v-text-field>
        </v-form>    
      </v-card-text>
      <v-card-actions>
        <v-btn to="/login">
           <v-icon>mdi-home</v-icon>
           Home
        </v-btn>  
      <v-spacer></v-spacer>
        <v-btn @click="submit" v-show="! alert">
           <v-icon>mdi-send</v-icon>
           Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "RememberLogin",
  data: () => ({
    valid:false,
    alert: false,
    email:"",
    emailRules: [
      v => !!v || "Informe o Email!",
      v => /.+@.+/.test(v) || "Email invalido!!"
    ],    
  }),
  methods: {
    submit() {
      if(! this.$refs.rememberForm.validate()) {
          this.valid=false;
          return;
      }
      this.alert=true;
    },
  }
};
</script>

<style>
</style>