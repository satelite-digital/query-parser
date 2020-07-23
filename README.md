# query-parser

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

[![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/satelite-digital/query-parser/stargazers/)

[![GitHub watchers](https://img.shields.io/github/watchers/Naereen/StrapDown.js.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/satelite-digital/query-parser/watchers/)


This repo contains an implementation of the e [qs](https://www.npmjs.com/package/qs) package as a query parsing middleware for express and web clients.


```js
console.log(query.parse("where[email][endsWith]=`@gmail.com`"));

// Results
{
    where : {
        email : {
            endsWith : "@gmail.com"
        }
    }
}
```

```js
console.log(query.build({
    where : {
        email : {
            endsWith : "@gmail.com"
        }
    }
}));

// Results
?where[email][endsWith]=`@gmail.com`

```

## Getting started

Install this package as a node module

```bash
npm install --save @satelite/query-parser
```


## Building and maintaining

`npm run build` builds the library to `dist`, generating three files:

* `dist/query-parser.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/query-parser.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/query-parser.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

## License

[MIT](LICENSE).


## To do

- Agregar soporte para opcion de palabras a excluir para evitar conflictos de implementacion (ej. GraphQL podria entrar en conflicto con select e include)
