import {menuArray} from './data.js'

const itemList = document.getElementById('item-list')

function buildItem(obj) {
    return `
        <container class="item item${obj.id}">
            <h6>${obj.emoji}</h6>
            <div class="description">
                <h3>${obj.name}</h3>
                <h4>${obj.ingredients.join(', ')}</h4>
                <h5>${obj.price}</h5>                   
            </div>
            <button class="plus">+</button>
        </container>
    `
}

itemList.innerHTML = menuArray.map((obj)=>buildItem(obj)).join('')

