const body = document.querySelector('body');

// Add a h1 header
const newH1 = document.createElement('h1');
newH1.textContent = 'Hello World!';
body.appendChild(newH1);

// Add a paragraph
const newP = document.createElement('p');
newP.textContent = 'This is a paragraph';
body.appendChild(newP);

// Add a h2 header
const newH2 = document.createElement('h2');
newH2.textContent = 'This is a second header';
body.appendChild(newH2);

// Add a paragraph
const newP2 = document.createElement('p');
newP2.textContent = 'This is a second paragraph';
body.appendChild(newP2);

// Change the second paragraph style
newP2.style.color = 'red';
newP2.style.fontSize = '20px';
