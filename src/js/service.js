const url='http://localhost:3000/action';
import {viewCart} from './view';
import {createHTMLElement} from './view';
import {viewCarousel} from './view';
import {editProduct} from './controller';
import {deleteProduct} from './controller';
import {viewTotal} from './view';

export function noOfItems(){
    let length=0;
    fetch(url)
    .then(resp=>resp.json())
    .then((data)=>{
        length=Object.keys(data).length;
        document.getElementsByClassName("no-of-items")[0].innerHTML=length+" ITEMS";
    })
}

export function createCart(){
    fetch(url)
    .then(resp=>resp.json())
    .then((data)=>{
        data.map(cartData => {
            let collection = viewCart(cartData);
            let cartElt = createHTMLElement(collection);
            let editButton = cartElt.firstElementChild.firstElementChild.firstElementChild
            .nextElementSibling.lastElementChild.previousElementSibling.firstElementChild;

            let removeButton = editButton.nextElementSibling;
            let moreDetails=cartElt.firstElementChild.firstElementChild.firstElementChild.firstElementChild;

            moreDetails.onclick=()=>{
                viewCarousel(cartData); 
            }

            editButton.onclick = () => {
                document.getElementsByClassName("modal-body")[0].innerHTML='';
                editProduct(cartData.id);
            }

            removeButton.onclick=()=>{
                deleteProduct(cartData.id);
            }
            document.getElementsByClassName("secondsubcart")[0].appendChild(cartElt);
        })

    });
}

export function editMainPage(id,qty,size) {
    let url = `http://localhost:3000/action/${id}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let newObj = Object.assign({},data,{"quantity" : qty, "size" : size});
        let putData = {
              method: "PUT",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              redirect: "follow",
              referrer: "no-referrer",
              headers: {
                  'Content-Type' : 'application/json; charset=utf-8'
              },
              body: JSON.stringify(newObj)
            }
        fetch(url,putData)
        .then(() => {
            document.getElementsByClassName("secondsubcart")[0].innerHTML='';
            createCart();
            noOfItems();
            calculateTotal();
        })
    });
} 

export function calculateTotal(){
    var subTotal=0;
    let promotionTotal=7;
    let grandAmmount=0;
    fetch(url)
    .then(resp=> resp.json())
    .then((data)=>{
        let i=0;
        for(i=0;i< data.length;i++){
            subTotal+=(data[i].price * data[i].quantity);
        }
        grandAmmount=subTotal-promotionTotal;
        viewTotal(subTotal, promotionTotal, grandAmmount);
    });
}
