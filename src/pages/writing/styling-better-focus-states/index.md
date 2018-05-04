---
cover: ./cover.png
title: Styling better focus states
subtitle: Keyboard-only focus using :focus-visible
date: "2018-05-03T22:12:03.284Z"
category: code
draft: false
model: post
---

## Problem
**Default `:focus` behaviour is bad.**

Focus rings can be confusing for users with pointing devices (e.g. mouse, touch screen) because it implies a sense of persistence when showing up **right after a click or a touch event**.

Designers know this _intuitively_.

They then need to make the `:focus` state obvious enough for keyboard users but at the same time, keeping it unobtrusive for mouse users.

This usually involves a compromise. Some even remove the default focusing behaviour entirely, which is **terrible for accessibility**.

> Removing the `:focus` outline is like removing the wheelchair ramp from a school because it doesn’t fit in with the aesthetic.

<cite>David Gilbertson</cite>

## Solution
Ideally, we need a focus ring that shows up **only when the user intends to use the keyboard**.

The most popular solution at this point involves nested elements and altering tab indices; not the most straightforward one.

We need a better default browser behaviour and for that, it's always a good idea to check if there are existing or upcoming browser specifications.

In this case, there's one: **Introducing** `:focus-visible` 🎉.

### Spec
`:focus-visible` is keyboard-only `:focus`. I honestly think it should be the new default and W3C quite agrees.

The [W3C proposal](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo) mentions that `:focus-visible` should be preffered over `:focus` except on elements that expect a keyboard input (e.g. text field, contenteditable).

### Usage
At the time of this writing, only Firefox [supports](https://caniuse.com/#search=focus-visible) `:focus-visible` natively. But the good news is that there's an excellent [polyfill](https://github.com/WICG/focus-visible) available for us. Here's a [demo](https://wicg.github.io/focus-visible/demo/) if you'd like to see it for yourself before we dive into actual implementation details.

### Implementation

#### Installation
###### via NPM
```bash
npm install --save focus-visible
```
```js
require('focus-visible')
```

###### via CDN
```html
<script src="https://unpkg.com/focus-visible@latest/dist/focus-visible.min.js"></script>
```

#### Styling
The [polyfill]((https://github.com/WICG/focus-visible)), adds a `.focus-visible` class on elements that match the `:focus-visible` state so styling is pretty straightforward.
```css
/* Remove outline for non-keyboard focus */
*:focus:not(.focus-visible) {
  outline: none;
}
```

#### ⭐️ Bonus tip: a better alternative to `outline`
`outline` doesn't support rounded corners. You know what does? `box-shadow`!
```css
*:focus {
  outline: none;
}

.focus-visible {
  box-shadow: 0 0 0 2px skyblue;
}
```

##### Have great time styling! 🎨
Noticed how I customized focus states on this site's [landing page](/)? 😉

Hit me up on [Twitter](https://twitter.com/nelonoel) if you find this useful.
