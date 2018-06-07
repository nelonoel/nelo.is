---
cover: ./cover.jpg
title: Styling better focus states
subtitle: Keyboard-only focus using :focus-visible
date: "2018-05-04"
category: code
draft: false
model: post
---

## Problem

**Default `:focus` behavior is bad.**

Focus rings can be confusing for users with pointing devices (e.g. mouse, touch screen) because it implies a sense of persistence when showing up **right after a click or a touch event**.

<div class="demo">
	<button class="btn">Click me!</button>
</div>
<figcaption>Try clicking and realize how bad it is.</figcaption>

Designers then need to make the `:focus` state obvious enough for keyboard users but at the same time, keeping it unobtrusive for mouse users.

This usually involves a compromise. Some, even remove the default focusing behavior entirely which is **terrible for accessibility**.

> Removing the `:focus` outline is like removing the wheelchair ramp from a school because it doesn’t fit in with the aesthetic.

<cite>David Gilbertson</cite>

## Solution

Ideally, the focus ring should only show up **when the user intends to use the keyboard**.

We need a better default browser behavior. In cases like this, it's always a good idea to check if there are existing or upcoming browser specifications that solve our problem.

Luckily for us, there's one: **Introducing** `:focus-visible` 🎉.

### Specification

**TLDR;** `:focus-visible` is the keyboard-only version of `:focus`.

Also, the [W3C proposal](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo) mentions that `:focus-visible` should be preferred over `:focus` except on elements that expect a keyboard input (e.g. text field, contenteditable).

### Browser Support

At the time of writing, only Firefox [supports](https://caniuse.com/#search=focus-visible) `:focus-visible` natively. But the good news is that there's an excellent [polyfill](https://github.com/WICG/focus-visible) available for us. Here's a [demo](https://wicg.github.io/focus-visible/demo/) if you'd like to see it for yourself before we dive into the actual implementation details.

### Implementation

#### Installation

###### via NPM

```bash
npm install --save focus-visible
```

```js
require('focus-visible')
```

###### via UNPKG

```html
<script src="https://unpkg.com/focus-visible@latest/dist/focus-visible.min.js"></script>
```

#### Styling

The [polyfill](https://github.com/WICG/focus-visible) adds a `.focus-visible` class on elements that match the `:focus-visible` state, so styling is pretty straightforward.

```css
/* Remove outline for non-keyboard :focus */
*:focus:not(.focus-visible) {
  outline: none;
}

/* Optional: Customize .focus-visible */
.focus-visible {
  outline: lightgreen solid 2px;
}
```

<div class="demo">
	<button class="btn btn--focus-visible">Click and focus me!</button>
</div>
<figcaption>Try clicking, then tabbing (or hitting the Shift key) to see improved behavior.</figcaption>

#### ⭐️ Bonus tip: a better alternative to `outline`

```css
*:focus {
  outline: none;
}

/* box-shadow outlines rounded corners! */
.focus-visible {
  box-shadow: 0 0 0 2px lightgreen;
}
```

<div class="demo">
	<button class="btn btn--shadow">Better looking!</button>
</div>
<figcaption>Ahh, rounded corners.</figcaption>

---

Noticed how I used `:focus-visible` on this [site](/)? Hit me up on [Twitter](https://twitter.com/nelonoel) if you find this useful! 😁

<style>
.demo {
	background: rgba(0, 0, 0, 0.05);
	margin: 1.75rem auto;
	padding: 1.5rem;
	text-align: center;
}

.btn {
	background: white;
	border: none;
	border-radius: 10px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01),
							0 1px 3px rgba(0, 0, 0, 0.09);
	color: #43bf4d;
	font-family: "Gravity", sans-serif;
	padding: 0.75rem 1.5rem;
	transition: all .2s ease;
}

.btn:hover {
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01),
							0 2px 6px rgba(0, 0, 0, 0.09);
	transform: translateY(-2px);
}

.btn:active {
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01);
	transform: none;
}

.btn:focus {
	outline: lightgreen solid 2px;
}

.btn--focus-visible:focus:not(.focus-visible) {
	outline: none;
}

.btn--shadow:focus {
	outline: none;
}

.btn--shadow.focus-visible {
	box-shadow: 0 0 0 2px lightgreen;
}
</style>
