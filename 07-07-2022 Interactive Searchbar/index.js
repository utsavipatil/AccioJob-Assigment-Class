const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Click
btn.addEventListener('click', () => {
    if(input.classList.length === 2){
        input.classList.remove('active');
        
    }else{
        input.classList.add('active');
        input.focus();
    }
});

// //MouseOver / MouseOut (Reduce size of Search)
// search.addEventListener('mouseover', () => {
//     input.classList.add('active');
//     input.focus();
// });
// search.addEventListener('mouseout', () => {
//     input.classList.remove('active');
// });