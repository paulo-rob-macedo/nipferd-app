<template>
  <div>
      <v-navigation-drawer dark v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Menu
          </v-list-item-title>
          <v-list-item-subtitle>
            Opções
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: true
        }
    }
}
</script>

<style>

</style>