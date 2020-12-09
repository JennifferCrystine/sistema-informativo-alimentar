<template>
  <v-container class="home d-flex flex-column fill-height">
    <div class="interaction d-flex flex-column justify-space-between fill-height">
        <h1 class="text-h4 text-center">Sistema Informativo Alimentar</h1>
        <div class="d-flex flex-column">
          <router-link to="/login">
            <v-btn class="login mt-2" rounded color="red lighten-1">Login</v-btn>
          </router-link>
              
         <router-link to="/signin">
           <v-btn class="signin mt-2" rounded color="purple accent-1">Cadastrar-se</v-btn>  
         </router-link>
        </div>
        <router-link class="text-center grey--text align-center mt-2" to="/meal">Iniciar sem cadastro</router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
a {
  text-decoration: none;
}


</style>
