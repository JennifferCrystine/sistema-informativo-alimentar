<template>
  <div class="d-flex flex-column justify-space-between fill-height">
    <h1 class="text-h3 text-center mt-5">Cadastra-se</h1>
    <v-container>
      <v-form v-model="valid" class="d-flex flex-column">
        <v-col cols="12">
          <v-text-field
            v-model="firstname"
            :rules="firstNameRules"
            :counter="20"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            :counter="20"
            label="Sobrenome"
            required
          ></v-text-field>
        </v-col>

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
            label="Senha"
            required
            name="input-10-1"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-btn rounded color="indigo lighten-3" class="mr-4" @click="validate"
          >Cadastrar</v-btn
        >
      </v-form>
    </v-container>
    <footer class="d-flex flex-row justify-center">
      <router-link
        class="sigin text-center grey--text align-center mb-4"
        to="/login"
        >Já possui conta? Faça login!</router-link
      >
      <router-link class="back ml-2 grey--text" to="/">Voltar</router-link>
   </footer>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    firstNameRules: [
      (v) => !!v || "Nome é obrigatório!",
      (v) => v.length >= 3 || "Nome tem que ter no mínimo 3 caracteres!",
    ],
    lastNameRules: [
      (v) => !!v || "Sobrenome é obrigatório!",
      (v) => v.length >= 5 || "Sobrenome tem que ter no mínimo 5 caracteres!",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório!",
      (v) => /.+@.+/.test(v) || "Insira um email válido!",
    ],
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.sigin {
  text-decoration: none;
}

.back {
  text-decoration: none;
}
</style>
