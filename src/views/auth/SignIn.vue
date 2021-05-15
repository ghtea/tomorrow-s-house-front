<template>
  <v-app id="inspire">
    <v-container
      fluid
      fill-height
    >
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <v-card flat>
            <Logo />

            <v-form>
              <v-text-field
                v-model="e_Mail"
                class="mt-5"
                name="email"
                label="이메일"
                type="text"
                :rules="emailRules"
                outlined
                required
              />
              <v-text-field
                name="password"
                label="비밀번호"
                type="password"
                outlined
                required
              />
            </v-form>

            <v-btn
              width="100%"
              height="70px"
              color="primary"
            >
              로그인
            </v-btn>

            <v-btn
              text
              width="50%"
              to="/auth/pwd-reset"
            >
              비밀번호 재설정
            </v-btn>
            <v-btn
              text
              width="50%"
              to="/auth/sign-up"
            >
              회원가입
            </v-btn>
          </v-card>
          <social-sign-up />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Logo from '@/components/common/Logo'
import SocialSignUp from '@/components/auth/SocialSignUp'

export default {

  components: { SocialSignUp,Logo },

  data: () => ({
    e_Mail: "",
    emailRules: [],
  }),
  watch: {
    e_Mail: function (mail) {
      // e_Mail is the exact name used in v-model
      if (mail !== "") {
        this.emailRules = [
          (v) =>
            v.match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) || "이메일을 확인해주세요",
        ];
      } else if (mail === "") {
        this.emailRules = [];
      }
    },

  },

};
</script>

