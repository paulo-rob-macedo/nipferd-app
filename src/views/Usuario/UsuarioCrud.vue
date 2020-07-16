<template>
  <div>
    <v-card class="light-color">
      <v-card-title>
        <v-toolbar dark rounded>
          <v-toolbar-title>{{modo}} - Usuário</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon large>mdi-card-search</v-icon>
          </v-btn>
          <User-perfil></User-perfil>
          <v-btn icon to="/">
            <v-icon large>mdi-menu</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-form ref="crudForm" v-model="valid">
          <v-row>
            <v-col cols="3">
              <v-text-field
                v-model.number="usuario.id"
                label="Codigo"
                prepend-icon="mdi-id-card"
                :disabled="true"
                v-show="usuario.id>0"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-text-field
                v-model=" 
                usuario.nome"
                label="Nome"
                prepend-icon="mdi-account"
                :rules="nomeRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-text-field
                v-model="usuario.apelido"
                label="Apelido"
                prepend-icon="mdi-pirate"
                :rules="apelidoRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="usuario.email"
                label="Email"
                prepend-icon="mdi-email"
                :rules="emailRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="usuario.Senha"
                label="Senha"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <fieldset>
              <legend>Status</legend>
              <v-radio-group v-model="usuario.statusid" row :rules="statusRules">
                <template v-for="item in status">
                  <v-radio :key="item.id" :label="item.descr" :value="item.id"></v-radio>
                </template>
              </v-radio-group>
            </fieldset>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="submit">
          <v-icon>mdi-send</v-icon>Enviar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="clear">
          <v-icon>mdi-trash-can</v-icon>Limpar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template> 


<script>
import { UsuarioModel } from "@/models/UsuarioModel.js";
import UserPerfil from "@/components/UserPerfil";

export default {
  name: "UsuarioCrud",
  components: {
    UserPerfil
  },
  data: () => ({
    valid: true,
    modo: "",
    usuario: new UsuarioModel(),
    showPassword: false,
    status: [
      { id: 1, descr: "Ativo" },
      { id: 2, descr: "Suspenso" },
      { id: 3, descr: "Cancelado" }
    ],
    nomeRules: [v => !!v || "Informe o Nome!"],
    apelidoRules: [v => !!v || "Informe o Apelido!"],
    emailRules: [
      v => !!v || "Informe o Email!",
      v => /.+@.+/.test(v) || "Email invalido!!"
    ],
    passwordRules: [
      v => !!v || "Informe a Senha!",
      v => (v && v.length >= 5) || "A senha dever conter mais 5 caracteres!",
      v => /(?=.*[A-Z])/.test(v) || "Senha deve conter uma letra Maiuscula!",
      v => /(?=.*\d)/.test(v) || "Senha deve conter um numero!"
    ],
    statusRules: [v => !!v || "Informe o status!"]
  }),
  methods: {
    submit() {
      if (!this.$refs.crudForm.validate()) {
        return;
      }
    },
    clear() {
      this.$refs.crudForm.reset();
    }
  },
  mounted() {
    this.usuario.id = this.$route.params.id;
    this.modo = "Novo";
    if (this.usuario.id > 0) {
      this.modo = "Edita";
    }
  }
};
</script>

<style scoped>
.light-color {
  background-color: antiquewhite !important;
}
fieldset {
  margin-left: 10px;
  padding-left: 5px;
}
fieldset legend {
  margin-left: 10px;
  padding: 5px;
  text-align: center;
}
</style>