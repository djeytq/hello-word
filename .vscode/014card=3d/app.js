const card=document.querySelector('.card');

card.addEventListener('click',()=>{
    if(card.style.transform==='rotateY(180deg)'){
        card.style.transform='rotateY(0deg)'
    }else{
        card.style.transform='rotateY(1800deg)'
    }
})