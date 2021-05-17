<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-form v-model="isValid">
          <v-card
            width="460"
            elevation="0"
            outlined
          >
            <v-card-text class="text-center px-12 py-12">
              <v-btn
                text
                class="text-h4 font-weight-black mb-10"
                to="/"
              >
                <v-icon
                  x-large
                  color="primary"
                  class="mr-2"
                >
                  mdi-home-variant
                </v-icon>
                내일의 집
              </v-btn>

              <v-text-field
                v-model="email"
                type="email"
                :rules="authRulesDict.email"
                label="이메일"
                clearable
                outlined
              />
              <v-text-field
                v-model="password1"
                type="password"
                :rules="authRulesDict.password1"
                label="비밀번호"
                clearable
                outlined
              />
              <v-text-field
                v-model="password2"
                type="password"
                :rules="authRulesDict.password2"
                label="비밀번호"
                clearable
                outlined
              />
              <v-text-field
                v-model="username"
                type="text"
                label="별명"
                clearable
                outlined
              />
              <v-btn
                block
                x-large
                color="primary"
                depressed
                class="font-weight-bold mt-6"
                @click="signUp"
              >
                회원가입
              </v-btn>

              <v-row
                align="center"
                justify="space-around"
                class="mt-2"
              >
                <v-btn
                  text
                  to="/auth/sign-in"
                >
                  로그인
                </v-btn>
              </v-row>
              <v-btn
                block
                x-large
                depressed
                dark
                color="#DD4B39"
                class="font-weight-bold mt-12"
                @click="continueWithGoogle"
              >
                Google로 계속하기
              </v-btn>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "AuthSignUp",
  data: () => ({
    isValid: false,
    email: "",
    password1: "",
    password2: "",
    username: "",
    clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
  }),
  computed: {
    authRulesDict() {
      return ({
        email: [
          value => !!value || '이메일을 입력해주세요',
          value => /.+@.+\..+/.test(value) || '이메일이 유효하지 않습니다',
        ],
        password1: [
          value => !!value || '비밀번호를 입력해주세요',
          value => (value && value.length >= 6) || '비밀번호는 6글자 이상이어야 합니다',
        ],
        password2: [
          value => !!value || '비밀번호를 입력해주세요',
          value => (value && value.length >= 6) || '비밀번호는 6글자 이상이어야 합니다',
          value => value === this.password1 || '두 비밀번호가 서로 같아야 합니다',
        ],
      })
    }
  },
  methods: {
    signUp: function() {
      if (this.isValid){
        const data = {
          email: this.email,
          password: this.password1,
          username: this.username,
        };
        this.$store.dispatch('signUp', data);
      }
    },
    continueWithGoogle: function() {
      this.$store.dispatch("continueWithGoogle");
    }
  }
};
</script>
<style></style>
