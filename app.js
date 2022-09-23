const colors = ['green', 'red', 'rgba(133,122,200)', '#f150025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    const randomNumber = getRandomNumbet();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

const getRandomNumbet = () => {
    return Math.random();
};