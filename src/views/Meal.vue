<template>
  <v-container class="d-flex flex-column align-center justify-space-between fill-height">
    <h1 class="text-h4 mt-5">Informe sua refeição</h1>

    <div>
        <v-col cols="12">
        <v-select :items="items" outlined label="Selecione a refeição"></v-select>
        </v-col>
    </div>
    <router-link class="next" to="/food">  
        <v-btn class="next ma-2" outlined color="indigo">Próximo</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Meal",
  data() {
    return {
      items: ["Almoço", "Café da manhã", "Ceia",  "Desjejum", "Janta"],
    };
  },
};
</script>

<style scoped>
    .next {
        text-decoration: none;
    }
</style>
