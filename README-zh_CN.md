# eslint-config-yuer

ESLint 配置规则扩展。

## 安装

```
$ npm install --save-dev eslint eslint-plugin-vue eslint-config-yuer
```

## 文档

- [介绍](docs/eslint-standard.md)
- [规则解释](docs/RULE.md)

## 使用

一旦`eslint-config-yuer`安装成功，你可以通过[ESLint 配置文件](http://eslint.org/docs/user-guide/configuring) 中的字段 `extends` 中使用它:

```js
{
  "extends": "yuer",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### 配合 `eslint:recommended` 使用 `yuer`

有部分[eslint:recommended](http://eslint.org/docs/rules/)提到的规则在规范中没有提到，因此最好配合 `eslint:recommend` 一起使用。

只需要同时继承 `eslint:recommend` 和 `yuer` 即可，确保 `yuer` 放置在最后。部分 `eslint:recommend` 定义的规则有点严格，对其做了定制化的修改。

```js
{
  "extends": ["eslint:recommended", "plugin:vue/recommended", "yuer"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## 版本日志

[版本日志](CHANGELOG.md)

## 许可证

Apache-2 © yuer
