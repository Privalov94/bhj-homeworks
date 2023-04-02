const items = document.getElementById('items');
const loader = document.querySelector('.loader_active');
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';




xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const ppp = Object.entries(xhr.response.response.Valute);
        ppp.forEach(item => {
            create(item[1].CharCode, item[1].Value)
        })
        loader.classList.remove('loader_active')
    }
})



function create(CharCode, Value) {

    let item = document.createElement('div');
    item.className = 'item'
  
    let itemCode = document.createElement('div');
    itemCode.className = 'item__code';
    itemCode.innerHTML = CharCode
  
    let itemValue = document.createElement('div');
    itemValue.className = 'item__value';
    itemValue.innerHTML = Value;
  
    let itemCurrency = document.createElement('div');
    itemCurrency.className = 'item__currency';
    itemCurrency.textContent = 'руб'
  
    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);
  
    items.appendChild(item);  
  
  }
  
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();




