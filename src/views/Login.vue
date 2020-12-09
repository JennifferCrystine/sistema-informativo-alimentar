<template>
  <div class="d-flex flex-column justify-space-between fill-height">
      <h1 class="text-h3 text-center mt-5">Login</h1>
      <v-container>
        <v-form v-model="valid" class="d-flex flex-column">
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              hint="No mínimo 8 caracteres"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-btn rounded color="indigo lighten-3" class="mr-4" @click="validate"
          >Login</v-btn>
        </v-form>
      </v-container>
      <footer class="d-flex flex-row justify-center">
        <router-link class="sigin text-center grey--text align-center mb-4" to="/signin">Não possui conta? Cadastre-se!</router-link>
        <router-link class="back ml-2 grey--text" to="/">Voltar</router-link>
    </footer>
         
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "E-mail e senha não conferem",
      },
      email: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+/.test(v) || "Insira um E-mail válido",
      ],
    };
  },
};
</script>

<style scoped>
.sigin{
  text-decoration: none;
}

.back{
  text-decoration: none;
}
</style>
