<template>
  <v-select v-model="unid"
    :value="unid"
    :items="unids"
    :hint="`${unid==null ? ' Nenhum - 0': unid.descr +' - '+ unid.id}`"
    item-text="descr"
    item-value="id"
    return-object
    persistent-hint
    label="Unidade Compra"
    prepend-icon="mdi-ruler"
    :rules="unidRules">
    </v-select>
</template>

<script>
export default {
 name: "UnidCompra",
 props: {
    value:{
        type:Object,
        default:null
    }  
  },
  data: () => ({
    unids: [
      { id: "1", descr: "UNID" },
      { id: "2", descr: "KILO" },
      { id: "3", descr: "METRO" }
    ],
    unidRules:[
        v => v==0 || "Informe a Unidade de Compra!"
    ],
  }),
  computed:{
    unid:{
      get() {return this.value},
      set(unid) {this.$emit('input',unid)}
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>