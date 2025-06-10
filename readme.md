# Semantic HTML Practice - Event Listener Demonstration

## Description
This project showcases how to use event listeners in JavaScript to dynamically update the DOM based on window size changes. It utilizes semantic HTML for better structure and accessibility.

## Features
- **Event Listener for Window Resize:** Displays updated width and height of the viewport in real-time.
- **Semantic HTML:** Improves readability and accessibility.
- **JavaScript DOM Manipulation:** Updates content dynamically.

## Live Preview
Check out the project here: [Semantic HTML Practice](https://rassinda.github.io/Semantic-HTML-Practice/)

## How It Works
The script listens for the `resize` event and updates the dimensions dynamically:

```js
function getSize() {
    let h = document.documentElement.clientHeight;
    let w = document.documentElement.clientWidth;
    document.getElementById('wh').innerHTML = `<h1> Width: ${w} </h1> <h1> Height: ${h} </h1>`;
}

window.addEventListener('load', getSize);
window.addEventListener('resize', getSize);
