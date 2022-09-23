const colors = ['green', 'red', 'yellow', 'Blue', 'Pink', 'Purple', 'Brown', 'Orange', 'white', 'silver', 'gray', 'black', 'aqua', 'teal' ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    const randomNumber = getRandomNumbet();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumbet = () => {
    return Math.floor(Math.random() * colors.length);
};