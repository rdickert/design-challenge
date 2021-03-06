module.exports = {
  "parser": "babel-eslint",
  "extends": "react-app",
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 80
      }
    ]
  }
};
