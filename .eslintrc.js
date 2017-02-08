module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-native/all"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        // overrides
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 0,
    }
};