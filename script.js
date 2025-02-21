const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');
const countBtn = document.querySelector('.count');


const showBill = () =>{

    if(price.value == '' || people.value == "" || tip.value == 0){
        error.textContent='Uzupełnij wszystkie pola'
          costInfo.style.display= "none"
       
    } else {
         error.textContent=''
        countBill();
    }
}
const countBill = () => {
    const newPrice = parsefloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    costInfo.style.display= "block"
    cost.textContent = sum.toFixed(2);
}

countBtn.addEventListener('click', showBill)