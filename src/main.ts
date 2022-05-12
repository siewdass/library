const alertBtn = document.querySelector('#alertBtn') as HTMLButtonElement;
const header = document.querySelector('#header') as HTMLHeadingElement

alertBtn.addEventListener( 'click', ( ) => {
  header.innerHTML = `Hello World`;
} )