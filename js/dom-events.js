const myH2 = document.getElementById('target-me');
const myP = document.querySelector('#target-me + p');

const hoverButton = document.querySelector('p > button');
const firstSpan = document.querySelector('p > span:nth=child(2)');

const clickButton =document.querySelector('p > button:nth-of-type(2)');
const secondSpan = document.querySelector('P > span:nth-of-type(4)');

myH2.textContent('Changed h2 content')
myH2.className('colo-text-salmon')

hoverButton.addEventListener( 'mouseenter', () => {} );
firstSpan.classList.add('salmon-text-color');
