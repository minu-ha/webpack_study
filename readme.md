Project Setup
=============

React + TypeScript + Webpack + Babel
------------------------------------

기본적인 개념은 참조링크를 참고하시고, 이 문서는 프로젝트 초기 세팅에 관하여 다룹니다.

* Basic concept of Setting
  * Documents
    * [NPM](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
    * [웹팩](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
    * [바벨](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)
    * [린트](https://jeonghwan-kim.github.io/series/2019/12/30/frontend-dev-env-lint.html)
    *
  * Videos
    * [생활코딩](https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA)
    *

##### dev environment & prod environment config structure

1. Set up a Basic React app with TypeScript and Webpack 5
1. Design the directory structure and use npm to install dependencies and add
   configuration files.
2. Configure webpack and TypeScript to allow rendering of images and SVGs
3. Set up Webpack config for multiple environments like dev and prod
4. Add react refresh
5. Linting with ESLint
6. Code formatting with Prettier
7. Husky

##### basic set up

1. creat new project
2. creat directory src & build
3. add .gitignore -> build , node_modules
4. npm init --y => default value package.json generate
5. add index.html in root
6. npm install react react-dom
7. npm install typescript @types/react @types/react-dom -D
8. add tsconfig.json in root
9. add App.tsx, index.ts in root
10. npm install @babel/core @babel/preset-env @babel/preset-react
    @babel/preset-typescript -D
11. add .babelrc in root
12. npm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
13. npm install babel-loader
14. add dir webpack, webpack.config.js
1. start : webpack serve --config webpack/webpack.config.js --open

##### configurations to handle additional scenarios

1. add styles.css
2. npm install css-loader (option) style-loader -D

##### adjust webpack environment

1. add webpack.common.js, webpack.dev.js, webpack.prod.js, webpack.config.js
2. in dev.js setting mode : development, devtool : cheap-module-source-map
3. in prod.js setting mode : production, devtool : source-map
4. npm install webpack-merge -D
1. `const { merge } = require('webpack-merge')`
2. `const commonConfig = require('./webpack.common.js')`

##### react refresh

1. npm install @pmmmwh/react-refresh-webpack-plugin react-refresh -D
2. edit dev.js devServer : hot, add refresh plugin
3. State is no longer initialized when files change

##### eslint setup

1. npm install eslint -D
2. npm install eslint-plugin-react eslint-plugin-react-hooks -D
3. npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
4. add .eslintrc.json in root
5. npm install eslint-plugin-import eslint-plugin-jsx-a11y -D
6. modify package.json -> add script : lint : eslint --fix

##### formatting code

1. npm install prettier eslint-config-prettier eslint-plugin-prettier -D
2. add .prettierrc in root

##### how to prevent linting and formatting errors with husky

1. npm install husky@4 lint-staged -D
2. modify package.json lint-staged, husky : pre-commit : lint-staged

##### recommend project setup

1. npm install @babel/runtime @babel/plugin-transform-runtime -D
2. update .babelrc
3. npm install copy-webpack-plugin -D
4. modify webpack.common.js
5. npm install webpack-bundle-analyzer -D


























