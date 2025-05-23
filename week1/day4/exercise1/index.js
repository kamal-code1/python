const h1 = document.querySelector('h1');
console.log(h1);


const article = document.querySelector('article');
article.lastElementChild.remove();


const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});


const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});


const btn = document.getElementById('boldBtn');
btn.addEventListener('click', () => {
  const paragraphs = document.querySelectorAll('article p');
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});

h1.addEventListener('mouseover', () => {
  const randomSize = Math.floor(Math.random() * 100) + 1;
  h1.style.fontSize = `${randomSize}px`;
});


const secondPara = document.querySelectorAll('article p')[1];
secondPara.addEventListener('mouseover', () => {
  secondPara.classList.add('fade');
});
secondPara.addEventListener('mouseout', () => {
  secondPara.classList.remove('fade');
});
