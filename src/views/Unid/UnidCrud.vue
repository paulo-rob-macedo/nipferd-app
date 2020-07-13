<template>
  <v-card>
    <v-card-title>
      <v-toolbar dark rounded>
        <v-toolbar-title>{{modo}} - Unidades</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon large>mdi-card-search</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-form ref="crudForm" v-model="valid">
        <v-flex xs2>
          <v-text-field 
            v-model.number="unid.id" 
            label="Codigo"
            prepend-icon="mdi-id-card"
            :disabled="true"
            v-show="unid.id>0">
          </v-text-field>
        </v-flex>
        <v-text-field 
          v-model="unid.descr" 
          label="Descrição"
           prepend-icon="mdi-label"
           :rules="descricaoRules">
        </v-text-field>
        <v-flex xs4>
          <v-text-field 
            v-model="unid.sigla" 
            label="Sigla"
            prepend-icon="mdi-label"
            :rules="siglaRules">
          </v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-text-field 
            v-model.number="unid.qtddec" 
            label="Quantidade Decimais" 
            type="number"
            prepend-icon="mdi-decimal-comma">
          </v-text-field>
        </v-flex>
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
import { UnidModel } from "@/models/UnidModel.js";

export default {
  name: "UnidCrud",
  data: () => ({
    valid: true,
    unid: new UnidModel(),
    modo:'',
    descricaoRules:[
        v => !!v || "Informe a Descrição!",
    ],
    siglaRules:[
        v => !!v || "Informe a Sigla!",
    ],
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
    this.unid.id=this.$route.params.id;
    this.modo='Novo';
    if (this.unid.id>0){
      this.modo='Edita';
    }
  }
};
</script>

<style scoped>
  fieldset {
    margin-left: 15px;
    padding-left: 5px;
  }
  fieldset legend {
          margin-left: 10px;
          padding: 5px;
          text-align: center;
  }
</style>