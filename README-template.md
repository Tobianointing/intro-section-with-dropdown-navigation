# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://github.com/Tobianointing/intro-section-with-dropdown-navigation)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learnt more about css animation and to apply animation using css and javascript.


```css
.menus {
  width: 60%;
  height: 100%;
  background-color: var(--almost-white);
  margin: 0;
  padding-left: 2em;
  transform: translateX(100%);
  transition: all .3s;
}

.open-menu {
  transform: translateX(0);
}
```

### Useful resources

- [Learn UI Design](https://scrimba.com/learn/designbootcamp) - This helped me for ui design tips and css animation guidelines. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [@tobianointing](https://www.frontendmentor.io/profile/tobianointing)
- Twitter - [@elementkayode](https://www.twitter.com/elementkayode)



