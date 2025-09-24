import {menuArray} from './data.js'

let orderArr = [0,0,0,0,0,0]

const menu = document.getElementById('menu')
const order = document.getElementById('order')

function renderMenu(){
    menu.innerHTML = menuArray.map((obj)=>`
        <container class="item">
            <h3>${obj.emoji}</h6>
            <div class="description">
                <h4>${obj.name}</h3>
                <h5>${obj.ingredients.join(', ')}</h4>
                <h6>$ ${obj.price}</h5>                   
            </div>
            <button class="plus" data-add="${obj.id}">+</button>
        </container>
    `).join('')
}

renderMenu()

function renderOrder(arr){
    const listHtml = arr.map((amount, id) =>
        amount>0
        ?    `<div class="orderItem">
                        <h4>${menuArray[id].name}</h4>
                        <h5 data-rm="${id}">remove</h5>
                        <h5 class="rightAlign">${amount}x</h5>
                        <h6 >$ ${menuArray[id].price}</h6>
            </div>`
        :   ''
    ).join('')

    const totalHtml = ()=>{
        const total = arr.reduce((sum, amount, id) => {
            if (amount > 0) {
                return sum + amount * menuArray[id].price;
            }
            return sum;
        }, 0);
        return `<div class="orderTotal">
            <h4>Total price:</h4>
            <h5 data-rmall="0">remove</h5>
            <h6 class="rightAlign">$ ${total}</h6>
        </div>

        <button class="complete">
            Complete order
        </button>`
    }
    
    if (orderArr.some(v => v > 0)) {
        order.innerHTML = `<h4>Your order</h3>` + listHtml + totalHtml()
    } else {
        order.innerHTML = ''
    }
}



document.addEventListener('click',function(e){
    if (e.target.dataset.add) {
        orderArr[e.target.dataset.add]+=1
    } else if (e.target.dataset.rm) {
        orderArr[e.target.dataset.rm]-=1
    } else if (e.target.dataset.rmall) {
        orderArr = [0,0,0,0,0,0]
    }
    renderOrder(orderArr)
})