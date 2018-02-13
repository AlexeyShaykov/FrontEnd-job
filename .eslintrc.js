module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": false,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true
    },
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true,
        "node": true,
        "worker": true
    },
    "extends": "eslint:recommended",
    "complexity": [2, 10],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
      "module": true
    },
    "plugins": [
        "html"
    ],
    "rules": {
      "no-bitwise": 2,
      "camelcase": [2, { "properties": "never" }],
      "curly": 0,
      "eqeqeq": [2, "smart"],
      "guard-for-in": 2,
      "no-extend-native": 2,
      "wrap-iife": 0,
      "indent": [
        2,
        2,
        {
          "SwitchCase": 1,
          "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
        }
      ],
      "no-use-before-define": 0,
      "no-lonely-if": 2,
      "new-cap": 0,
      "no-caller": 2,
      "no-case-declarations": 2,
      "no-else-return": 2,
      "no-empty": 2,
      "no-irregular-whitespace": 2,
      "no-new": 0,
      "no-alert": 2,
      "no-plusplus": 0,
      "newline-after-var": [0, "always"],
      "quotes": [2, "single"],
      "no-undef": 2,
      "no-empty-pattern": 2,
      "no-extra-bind": 2,
      "no-unused-vars": [2, { "args": "none" }],
      "strict": 0,
      "max-depth": [1, 4],
      "max-statements": [1, 15],
      "max-len": [2, 80, 2],
      "dot-location": [2, "property"],
      "max-params": [2, 5],
      "no-console": 0,
      "max-nested-callbacks": [2, 3],
      "no-var": 0,
      "semi": 2,
      "block-spacing": 2,
      "space-infix-ops": [2, {"int32Hint": false}],
      "space-unary-ops": 2,
      "space-in-parens": [2, "never"],
      "spaced-comment": [2, "always"],
      "space-before-function-paren": [2, "never"],
      "space-before-blocks": 2,
      "array-bracket-spacing": [2, "never"],
      "object-curly-spacing": [2, "always"],
      "keyword-spacing": 2,
      "computed-property-spacing": [2, "never"],
      "comma-spacing": [2, {"before": false, "after": true}],
      "operator-linebreak": [2, "after", { "overrides": { "?": "after", ":": "after" } }],
      "one-var": [2, { "uninitialized": "always", "initialized": "never" }],
      "semi-spacing": 2,
      "no-multi-spaces": 2,
      "brace-style": 2,
      "new-parens": 2,
      "no-spaced-func": 2,
      "no-invalid-this": 1,
      "comma-dangle": [2, "never"],
      "no-cond-assign": 0,
      "no-unneeded-ternary": 1,
      "no-multiple-empty-lines": [2, {"max": 2}],
      "no-mixed-spaces-and-tabs": 2,
      "no-trailing-spaces": 2,
      "no-nested-ternary": 2,
      "no-debugger": 2,
      "no-eq-null": 0,
      "arrow-spacing": 2,
      "prefer-reflect": 0,
      "prefer-const": 1,
      "prefer-template": 1,
      "constructor-super": 2,
      "no-class-assign": 2,
      "no-const-assign": 2,
      "object-shorthand": 2,
      "require-jsdoc": [0, {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
        }
      }],
      "no-dupe-class-members": 2,
      "no-native-reassign": 2,
      "callback-return": [2, ["callback", "cb", "next"]],
      "no-new-wrappers": 2,
      "no-return-assign": 2,
      "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
      "no-self-compare": 2,
      "no-eval": 0,
      "no-param-reassign": [2, { "props": false }],
      "no-unused-expressions": [2, { "allowTernary": true, "allowShortCircuit": true }],
      "block-scoped-var": 2,
      "id-length": [1, {"min": 1, "max": 24, "properties": "never"}],
      "consistent-this": [1, "self"],
      "no-iterator": 0,
      "eol-last": 2,
      "linebreak-style": [2, "unix"],
      "func-names": 2,
      "comma-style": [2, "last" ],
      "no-loop-func": 2,
      "no-multi-str": 0,
      "require-yield": 0,
      "valid-typeof": 0,
      "no-proto": 0,
      "no-script-url": 0,
      "no-shadow": 2,
      "dot-notation": 2,
      "no-new-func": 0
    }
};
