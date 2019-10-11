# eslint-config-yuer

ESLint shareable config for the yuer JavaScript style guide.

[中文 README](README-zh_CN.md)

## Installation

```
$ npm install --save-dev eslint eslint-plugin-vue eslint-config-yuer
```

## Documents

* Introduction: [eslint-standard.md](docs/eslint-standard.md)
* Rules explanation: [RULES.md](docs/RULE.md)

## Usage

Once the `eslint-config-yuer` package is installed, you can use it by specifying `yuer` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "yuer",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `yuer` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that yuer style is not opinionated about that you might want to enforce in your project.

To use yuer style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `yuer` last:

```js
{
  "extends": ["eslint:recommended", "plugin:vue/recommended", "yuer"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `yuer` config compares with `eslint:recommended`, refer to the [source code of `index.js`](https://github.com/yuerbaby/eslint-config-yuer/blob/master/index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `yuer` config.

## License

Apache-2 © yuer
