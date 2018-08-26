module.exports = {
  "plugins": [
    "eslint-plugin-react"
  ],
  "extends": ["eslint:recommended", "google"],
  "parser": "babel-eslint",
  "rules":{
  	"indent": [2, "tab"],
  	"no-tabs": 0,
    "react/jsx-uses-vars": [2],
    "require-jsdoc": 0,
    "no-invalid-this": 0,
    "no-console": 0
  },
  "env": {
    "browser": true,
    "node": true
  },
}