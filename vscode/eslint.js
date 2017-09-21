module.exports = {
    "extends": "eslint-config-airbnb-es5",
    rules: {
        "linebreak-style": 0,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "function-paren-newline": ["error", "never"],
        "indent": ["error", 4],
    }
};