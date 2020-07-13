<template>
  <v-card>
    <v-card-title>
      <v-toolbar dark rounded>
        <v-toolbar-title>{{modo}} - Produto</v-toolbar-title>
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
              v-model.number="prod.id" 
              label="Codigo"
              prepend-icon="mdi-id-card"
              :disabled="true"
              v-show="prod.id>0">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field 
              v-model="prod.descr" 
              label="Descrição"
              prepend-icon="mdi-label"
              :rules="descricaoRules">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field 
              v-model.number="prod.precovenda" 
              label="Preço Venda"
              prepend-icon="mdi-label-variant"
              :rules="precoVendaRules">
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field 
              v-model.number="prod.precocompra" 
              label="Preço Compra"
              prepend-icon="mdi-label-variant"
              :rules="precoCompraRules">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <unid-venda 
              v-model="unidvenda">
            </unid-venda>
          </v-col>
          <v-col cols="4">
            <UnidCompra 
              v-model="unidcompra">
            </UnidCompra>
          </v-col>
        </v-row>
        <v-row>
          <fieldset>
            <legend>Status</legend>
            <v-radio-group 
              v-model="prod.statusid" 
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
import { ProdModel } from "@/models/ProdModel.js";
import { UnidModel } from "@/models/UnidModel.js";
import UnidVenda from "@/components/UnidVenda.vue";
import UnidCompra from "@/components/UnidCompra.vue";

export default {
  name: "ProdCrud",
  components: {
    UnidVenda,
    UnidCompra
  },
  data: () => ({
    valid: true,
    prod: new ProdModel(),
    modo:'',
    unidvenda: { id: "0", descr: "Nenhum" },
    unidcompra: { id: "0", descr: "Nenhum" },
    status:[
      {id:1, descr:'Ativo'},
      {id:2, descr:'Suspenso'},
      {id:3, descr:'Cancelado'}
    ],
    descricaoRules:[
        v => !!v || "Informe a Descrição!",
    ],
    precoVendaRules:[
        v => !!v || "Informe o Preço de Venda!"
    ],
    precoCompraRules:[
        v => !!v || "Informe o Preço de Compra!"
    ],
    statusRules:[
      v => !!v || "Informe o status!"  
    ]
  }),
  mounted() {
    //console.log(this.unids);
  },
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
    this.prod.id=this.$route.params.id;
    this.modo='Novo';
    if (this.prod.id>0){
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