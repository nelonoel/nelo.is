---
cover: ./cover.jpg
title: Kitchensink
subtitle: Testing everything
date: "2011-01-03T22:12:03.284Z"
category: engineering
draft: true
model: post
type: guide
---

# Heading 1 🐙

## Heading 2 🐦

### Heading 3 🐱

#### Heading 4 🐷

##### Heading 5 🐮

###### Heading 6 🤖

## Spans

* **Bold**
* _Italic_
* [Link](#)

## Blocks

#### Lead

<p class="p--lead">
  This is a sample lead paragraph.
</p>

#### Body

This is a sample paragraph. [Lorem](#) ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tempora quis, quisquam sequi. Doloremque minima, labore maxime placeat tempora provident numquam reprehenderit nisi pariatur dignissimos. Iusto quaerat, vitae unde natus! 🙈

#### Blockquote

> Party or die. This is a sample quote.

## Code

#### Inline Code

`alert`

#### Generic Code Block

```
$ vagrant up
```

#### Syntax-highlighted code block

```js
{
    "number":"8476661235",
    "city":"Northbrook",
    "state":"Illinois",
    "cost":500,
    "last_billed_at":"2013-11-11 12:55:06",
    "provisioned_at":"2013-11-11 12:55:06"
}
```

## Lists

Indent by **four** spaces to create a sublist.

#### Ordered List

1.  One
2.  Two
3.  Three
    1.  Three dot one
        1.  Three dot one dot one
4.  Four

#### Unordered List

* One
* Two
* Three
  * Three dot one
    * Three dot one dot one
* Four

## Separator

Insert `---` wrapped in new lines.

---

## Images, Videos and other Embeddable Object

#### Blog Hero Image

To add a cover image, add the following on the entry's YAML Frontmatter.

```
image:
  feature: '/blog/images/2012/02/06/technori-pitch/37610099-pitch.jpg'
```

#### Content Block Image

This is the default styling for embedded images. It stretches to the width of the content area. Simply add the HTML tag.

<img src="./cover.jpg" alt="Pitch" />

_Add `em` right after the embedded object to add caption._

#### Inline Image

##### Content-flow

Add `embed--inline` class to make image inline and flow with the content <img class="embed--inline" src="http://cultofthepartyparrot.com/parrots/middleparrot.gif" alt="Party!" /> just like this.

##### Floated Left

<img class="embed--left" src="http://cultofthepartyparrot.com/parrots/parrot.gif" alt="Party!" /> Add `embed--left` class to float image to the left. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ea. Voluptate odio deleniti facilis cumque.

##### Floated Right

<img class="embed--right" src="http://cultofthepartyparrot.com/parrots/rightparrot.gif" alt="Party!" /> Add `embed--right` class to float image to the right. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis similique quisquam, quibusdam veritatis, voluptatum provident atque qui rem cupiditate illum eveniet, tempora at temporibus quis.

#### Full Width Image

Add `embed--full-width` class to make image stretch the browser edges.
<img class="embed--full-width" src="/blog/images/2014/zapier.png" alt="Zapier" />
_Looking good._

#### Video, Object, Iframe, etc

Styles apply to `video`, `embed`, `object`, and `iframe`s too!

<iframe width="560" height="315" src="https://www.youtube.com/embed/_xzGCRYksnU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
*Here's a sample from one of the entries.*

**That's it!** Happy blogging. <img class="embed--inline" src="http://cultofthepartyparrot.com/parrots/partyparrot.gif" alt="Party!" />
