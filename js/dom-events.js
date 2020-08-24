const myH2 = document.getElementById('target-me');
console.log();
const myP = document.querySelector('#target-me + p');
console.log();

const hoverButton = document.querySelector('p > button');
console.log();
const firstSpan = document.querySelector('p > span:nth=child(2)');
console.log();

const clickButton =document.querySelector('p > button:nth-of-type(2)');
console.log();
const secondSpan = document.querySelector('P > span:nth-of-type(4)');
console.log();

myH2.textContent('Changed h2 content')
console.log();
myH2.className('colo-text-salmon')
console.log();

hoverButton.addEventListener( 'mouseenter', () => {} );
console.log();
firstSpan.classList.add('salmon-text-color');
console.log();

clickButton.addEventListener( 'click', () => {
    console.log('the "click" button was clicked');
   if  (secondSpan.classList.contains('salmon-text-color'))
   {
       secondSpan.classList.remove('salmon-tet-color'):
   }
   else {
       secondSpan.classList.add('salmon-text-color');
   }
})