

const submitBtn = document.querySelector('.submit-btn');
const card = document.querySelector('.card');
const message = document.querySelector('.message');
const btns = document.querySelectorAll('.btn');
const rate = document.querySelector('.rate');


submitBtn.addEventListener('click', function(){
    card.classList.add('remove-card');
    message.classList.add('show-message');
})

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const rating = e.currentTarget.textContent
       if (rating == 1){
        rate.textContent = 1
       }else if(rating == 2){
        rate.textContent = 2
       }else if(rating == 3){
        rate.textContent = 3
       }else if(rating == 4){
        rate.textContent = 4
       }else {
        rate.textContent = 5
       }
    })
})
