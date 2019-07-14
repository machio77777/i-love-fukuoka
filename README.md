# i-love-fukuoka

## Initialize.
- プロジェクト初期化.
```bash
yarn create nuxt-app
```
- FirebaseへのAPI疎通で利用するモジュール導入.
```bash
yarn add @nuxtjs/axios
yarn add @nuxtjs/proxy
```
- nuxt.config.jsにモジュール呼び出しの設定追記.
```js
export default {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ]
}
```

## TypeScript.
- TypeScript開発に必要なモジュールを導入し、nuxt.config.jsの拡張子を.tsに変更.
```bash
// バージョン確認
./node_modules/nuxt/bin/nuxt.js -v
// TypeScript導入
yarn add -D @nuxt/typescript
// ts-node導入
yarn add ts-node
// vue-property-decorator導入
yarn add vue-property-decorator
```
