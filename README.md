# Validation form using JavaScript

This is a solution to the challenge from the DevQuest webcourse.

## Overview

### The challenge

User should be able to:

- View the optimal layout for the page depending on their device's screen size;
- See hover states on the send ("Enviar") button;
- Filled in fields should have their borders changed to green;
- After pressing the button, fields left blank should change their borders to red and a message "required field" should read below each.

<img src="./design/validation-green.gif">
<img src="./design/mobile.JPG" width="250">

### Link

[Site on GitHub Pages](https://felipeddp.github.io/validation-form-with-js/)

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- JavasScript for the field validation

### What I learned

This project was a good practice for the addEventListener() and forEach() methods. The most challenging part was making both the validation happen and the message show at the same time in the appropiate fields, but in the end I'm proud I could manage to write it in a concise fashion.

While trying to come up with potential solutions, I ended up discovering useful methods and properties that were new to me, such as trim() and nextElementSibling, which found their way into the project as well.