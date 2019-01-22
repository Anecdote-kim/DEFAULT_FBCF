module.exports = {
  "extends": ["airbnb-base", "plugin:flowtype/recommended"],
  "settings": {
      "import/resolver": {
          "node": {
              "moduleDirectory": ["node_modules", "src/"]
          }
      }
  },
  "rules": {
      "import/prefer-default-export": 0,
      "class-methods-use-this": 0,
      "func-names": 0,
      "camelcase": 0,
      "object-curly-newline": 0,
      "no-useless-escape": 0,
      "no-underscore-dangle": 0,
      "object-property-newline": 0
  },
  "plugins": [
      "flowtype"
  ]
};