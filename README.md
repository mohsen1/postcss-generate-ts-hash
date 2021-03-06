# PostCSS Generate TypeScript Hash

[PostCSS] plugin that generate a TypeScript hash of all classes with comments.


Given CSS code like this
```css
.foo {
    font-size: big;
}
.bar-baz {
    color: hotpink;
}
```

this plugin generate a TypeScript code like this:

```ts
export const classes = {
    /** .foo */
    foo: 'foo',
    /** .bar-baz */
    barBaz: 'bar-baz',
}
```

That can be used in you DOM related code:

```ts
import {classes} from './classes';
const div = document.createElement('div');
div.className = classes.foo;
```

## Usage

```js
postcss([ require('postcss-generate-ts-hash')({done: function(tsFileString) { /* save it to a file... */ })}])
```


### Options
Pass `done` to get the result in the callback


Pass `exportEach` to options to have output like this:

```ts
/** .foo */
export const foo = 'foo';
/** .bar-baz */
export const barBaz = 'bar-baz';
```
See [PostCSS] docs for examples for your environment.
