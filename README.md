# scss-helpers

This repo aims to:
- avoid rewriting same functions in each project
- have handy functions to work easier with SCSS

Works with:
 - prettier
 - stylelint
 - css validator
 - node & npm scripts

 Usage
 Import from your scss the `index.scss` file in the root of the project.
 It is recommended to use `@use` instead of `@import`, due its modularity.
 If you resolve the path to `node_modules` in your webpack config, you will be able to:
 `@use 'scss-helpers' as *`

 Then you can just use any function like:
 ```scss
 $splicedList: splice-list($list, 2, 3);
 ```