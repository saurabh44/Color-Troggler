let troggler = document.getElementById('switch');

troggler.addEventListener('click', () => {
  // console.log(troggler.checked);

  // if(troggler.checked ===true){
  //     document.body.style.background = 'black';
  // }else{
  //     document.body.style.background = 'white';
  // }
  troggler.checked === true
    ? (document.body.style.backgroundColor = 'black')
    : (document.body.style.backgroundColor = 'white');
});
