<template>
  <v-container>
    <v-layout>
      <v-flex xs sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email_field"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                      :error-messages="errors.collect('email')"
                      v-validate="'email|required'"
                      data-vv-name="email"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password_field"
                      ref="password_field"
                      label="Пароль"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                      data-vv-as="пароль"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirm_field"
                      label="Подтвердите пароль"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      required
                      :error-messages="errors.collect('confirm_field')"
                      v-validate="'confirmed:password_field|required'"
                      data-vv-name="confirm_field"
                      data-vv-as="подтверждения"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn @click="isFormValid" type="submit" >Регистрация</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSignup() {
      // Vuex
    },
    isFormValid() {
      let res = Object.keys(this.fields).every(key => this.fields[key].valid);
      console.log(res);
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    }
  }
};
</script>
