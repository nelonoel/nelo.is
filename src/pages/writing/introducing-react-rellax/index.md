---
cover: ./cover.jpg
title: Introducing react-rellax
subtitle: A React Parallax component
date: "2018-05-03T22:12:03.284Z"
category: code
draft: false
model: post
type: open-source
---

### Installation
```bash
npm i --save react-rellax
```

### Import
```js
import Parallax from 'react-rellax'
```

### Usage
```jsx
<Parallax speed={-5}>I'm slow and smooth</Parallax>
```

### Notes
 - All props are _optional_.
 - It's common to tweak `speed` and `percentage` to suit your design requirements.
 - All other props not mentioned below (_e.g._ `className`, `style`, etc.) are passed down as usual.

### Props
 - `as` _(str)_ : Tag to use as a wrapper. Default: `div`
 - `centered` _(bool)_ : Centers the component on the viewport
 - `horizontal` _(bool)_ : Horizontal scrolling
 - `onMove` _(func)_ : Callback function which accepts an object `{x: int, y: int}`
 - `percentage` _(num)_ : Initial scroll percentage
 - `speed` _(int)_ : Integer >= -10 && <=10 determines scroll speed. Default: `-2`
 - `zIndex` _(int)_ : Orders component on the z-axis

### Links
 - [Live Demo](https://open.nelo.is/react-rellax)
 - [Github](https://github.com/nelonoel/react-rellax)
 - [NPM](https://npmjs.com/package/react-rellax)
