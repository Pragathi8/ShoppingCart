import {viewEditCart} from './view';
import {createHTMLElement} from './view';
import {editMainPage} from './service';
import {createCart} from './service';
import {noOfItems} from './service';

export function editProduct(id){
    fetch(`http://localhost:3000/action/${id}`)
    .then(resp=>resp.json())
    .then((data)=>{
            let collection =viewEditCart(data);
            let cartElt = createHTMLElement(collection);
            let editButton= cartElt.firstElementChild.firstElementChild.lastElementChild.previousElementSibling;
            editButton.onclick = () => {
                editMainProduct(data.id);
            }
            document.getElementsByClassName("modal-body")[0].appendChild(cartElt);
    });
}

export function deleteProduct(id){
    fetch(`http://localhost:3000/action/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    document.getElementsByClassName("secondsubcart")[0].innerHTML='';
    createCart();
    noOfItems();
}

export function editMainProduct(id){
    let qtyid=document.getElementById("updatedqty");
    let qty=qtyid.options[qtyid.selectedIndex].value;
    let sizeid=document.getElementsByClassName("updatedsize")[0];
    let size=sizeid.options[sizeid.selectedIndex].value;
    editMainPage(id,qty,size);
}

