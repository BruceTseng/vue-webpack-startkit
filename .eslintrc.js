module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    "ecmaVersion": 6,
    sourceMap: "module",
    "ecmaFeatures": {
      "jax": true,
      "modules": true
    }
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  rules: {}
}
