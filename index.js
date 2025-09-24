import {menuArray} from './data.js'

const itemList = document.getElementById('item-list')

function buildItem(obj) {
    return `
        <container class="item item${obj.id}">
            <h3>${obj.emoji}</h6>
            <div class="description">
                <h4>${obj.name}</h3>
                <h5>${obj.ingredients.join(', ')}</h4>
                <h6>$ ${obj.price}</h5>                   
            </div>
            <button class="plus">+</button>
        </container>
    `
}

itemList.innerHTML = menuArray.map((obj)=>buildItem(obj)).join('')

