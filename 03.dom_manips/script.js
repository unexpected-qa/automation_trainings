const body = document.querySelector('body');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const newHeaderTag = document.createElement('h1');
    newHeaderTag.textContent = 'Hello World!';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', () => {
        body.removeChild(newHeaderTag);
        body.appendChild(btn);
        body.removeChild(resetBtn)
    })
    body.appendChild(newHeaderTag);
    body.removeChild(btn);
    body.appendChild(resetBtn);
})