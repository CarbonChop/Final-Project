const elems = document.querySelectorAll('.fadeIn');
const elems2 = document.querySelectorAll('.fadeFromLeft');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview'); 
        }
    });
}
const io = new IntersectionObserver(active);
 for(let counter=0; counter < elems.length; counter++){
    io.observe(elems[counter]);
}

const active2 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let counter=0; counter < elems.length; counter++){
    io.observe(elems2[counter]);
}