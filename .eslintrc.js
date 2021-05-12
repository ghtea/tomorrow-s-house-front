module.exports = {
  extends: [
    'plugin:vue/recommended' // base 에서 recommended 로 변경
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
		'vuetify/no-legacy-grid': 'error',
  }
}
