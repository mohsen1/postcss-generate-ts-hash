# PostCSS Generate Ts Hash [![Build Status][ci-img]][ci]

[PostCSS] plugin that generate a TypeScript hash of all classes with comments.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/mohsen1/postcss-generate-ts-hash.svg
[ci]:      https://travis-ci.org/mohsen1/postcss-generate-ts-hash

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-generate-ts-hash') ])
```

See [PostCSS] docs for examples for your environment.
