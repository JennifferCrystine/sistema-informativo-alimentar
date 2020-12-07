<template>
  <div class="login">
    <h1 class="text-h4 text-center mt-5">Login</h1>
    <v-form class="justify-center">
        <v-text-field class="ml-20 mr-20" label="E-mail" :rules="rules" hide-details="auto"></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
    name: 'Login',
};
</script>

<style scoped></style>
