// https://eslint.vuejs.org/user-guide/
module.exports = {
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "vue/multi-word-component-names": ["error", {
        "ignores": ["Tutorial"]
    }]
  }
}
