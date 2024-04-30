//отслеживаем клик на странице
window.addEventListener('click', function(event){
    //объявляем переменную для счетчика
    let counter;
    //проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        //находим обертку счетчика
         const counterWrapper = event.target.closest('.counter-wrapper');
        // находим див с числом счетлика
         counter = counterWrapper.querySelector('[data-counter]');
    } 
  
    //проверяем является ли элемент по которому был совершен клик кнопкой плюс
 if (event.target.dataset.action === 'plus') {    
    counter.innerText=++counter.innerText;
 }
    //проверяем является ли элемент по которому был совершен клик кнопкой минус
 if (event.target.dataset.action === 'minus') {
         
    //проверяем чтобы счетчик был больше 1
       if (parseInt(counter.innerText) > 1){
        // изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
              //проверка на товар который находится в корзине
        } else if (event.target.closest('.cart-wrapper')&& parseInt(counter.innerText) === 1 ){
         //удаляем товар из корзины
         event.target.closest('.cart-item').remove();
         //отображение статуса корзины Пустая/Полная    
         toggleCartStatus();    
         //пересчет общей стоимости товаров в корзине
         calcCartPriceAndDelivery();
       }
     
 }
 //проверяем клик на + или - внутри корзины 
 if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
   //пересчет общей стоимости товаров в корзине
   calcCartPriceAndDelivery();

 }
});