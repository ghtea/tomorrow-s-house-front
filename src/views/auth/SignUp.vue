<template>
  <v-app id="inspire">
    <v-container
      fluid
      fill-height
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <v-card flat>
            <h2>회원가입</h2>
            <social-sign-up />
            <v-divider class="mb-5" />

            <p class="mt-5">
              <strong>이메일</strong>
            </p>
            <v-row>
              <v-col cols="6">
                <v-form>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    class="mx-auto"
                    outlined
                    placeholder="이메일"
                    required
                  />
                </v-form>
              </v-col>
              <v-col
                cols="1"
                class="mt-3"
              >
                <p class="mx-auto">
                  @
                </p>
              </v-col>

              <v-col cols="5">
                <v-combobox
                  v-model="selectedCboItem"
                  :items="emailCboItems"
                  label="선택해주세요"
                  outlined
                  flat
                  solo
                  clearable
                />
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>비밀번호</strong>
            </p>
            <p>8자 이상 입력해주세요.</p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pwd"
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="비밀번호"
                  required
                />
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>비밀번호 확인</strong>
            </p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="pwdChk"
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="비밀번호 확인"
                  required
                />
              </v-col>
            </v-row>

            <p class="mt-5">
              <strong>별명</strong>
            </p>
            <p>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</p>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  type="password"
                  class="mx-auto"
                  outlined
                  placeholder="별명 ( 2~15자 )"
                  required
                />
              </v-col>
            </v-row>

            <v-btn
              width="100%"
              height="70px"
              color="primary"
            >
              회원가입 완료
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SocialSignUp from '@/components/auth/SocialSignUp'

export default {
  components: { SocialSignUp },
  data : () => ({
    email : '',
    allowSpace : false,
    pwd : '',
    pwdChk : '',
    selectedCboItem : '',
    emailCboItems : [
            'naver.com',
            'daum.net',
            'gmail.com' ,
            'nate.com',
            '직접 입력'
          ]
  }),
  computed : {
    // rules () {

      //  const rules = []
      //    if (!this.allowSpaces) {
      //      const rule =

      //    }
    // }
  }

  }

</script>

<style lang="scss" scoped>

</style>
