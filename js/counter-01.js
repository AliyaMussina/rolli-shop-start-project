//находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function(){
    //проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1){
    // изменяем текст в счетчике уменьшая его на 1
        counter.innerText = -- counter.innerText;
    }
   
});

//отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function(){
//изменяем текст в счетчике увеличивая его на 1    
    counter.innerText = ++ counter.innerText;
});