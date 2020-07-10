<template>
  <v-card>
    <v-card-title>
      <v-toolbar dark rounded>
        <v-toolbar-title>{{modo}} - Cliente</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon large>mdi-card-search</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-form ref="crudForm" v-model="valid">
        <v-row>
          <v-col cols="3">
            <v-text-field 
              v-model.number="cliente.id" 
              label="Codigo"
              prepend-icon="mdi-id-card"
              :disabled="true"
              v-show="cliente.id>0">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field 
              v-model="cliente.nome" 
              label="Nome"
               prepend-icon="mdi-account"
               :rules="nomeRules">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field 
              v-model="cliente.email" 
              label="Email" 
              prepend-icon="mdi-email"
              :rules="emailRules">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field 
              v-model="cliente.numdoc" 
              label="Documento"
              prepend-icon="mdi-file-document"
              :rules="numDocRules">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <fieldset>
            <legend>Status</legend>
            <v-radio-group 
              v-model="cliente.statusid" 
              row
              :rules="statusRules">
                <template v-for="item in status">
                    <v-radio :label="item.descr" :value="item.id" :key="item.id"></v-radio>
                </template>
            </v-radio-group>
          </fieldset>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="submit">
           <v-icon>mdi-send</v-icon>
           Enviar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="clear">
          <v-icon>mdi-trash-can</v-icon>
          Limpar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { ClienteModel } from "@/models/ClienteModel.js";

export default {
  name: "ClienteCrud",
  data: () => ({
    valid: false,
    modo:'',
    cliente: new ClienteModel(),
    status:[
      {id:1, descr:'Ativo'},
      {id:2, descr:'Suspenso'},
      {id:3, descr:'Cancelado'}
    ],
    nomeRules:[
        v => !!v || "Informe o Nome!",
    ],
    numDocRules:[
        v => !!v || "Informe o Documento!",
    ],
    emailRules: [
    v => !!v || 'Informe o Email!',
    v => /.+@.+/.test(v) || 'Email invalido!!'
    ],
    statusRules:[
      v => !!v || "Informe o status!"  
    ]
  }),
  methods: {
    submit() {
      if(! this.$refs.crudForm.validate()) {
          return;
      }
    },
    clear() {
      this.$refs.crudForm.reset();
    }

  },
  mounted() {
    this.usuario.id=this.$route.params.id;
    this.modo='Novo';
    if (this.usuario.id>0){
      this.modo='Edita';
    }
  }
};
</script>

<style scoped>
    fieldset {
        display: block;
        margin-left: 10px;
        padding-left: 5px;
    }
    fieldset legend {
        margin-left: 10px;
        padding: 5px;
        text-align: center;
    }
</style>