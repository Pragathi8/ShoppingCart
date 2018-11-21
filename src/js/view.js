export function viewCart(entries){
    let collection=`
        <div class="card border-light">
            <div class="card-body">
                <div class="row flex1">
                    <div class="part1">
                        <a href="#" class="moreDetails" data-toggle="modal" data-target="#myCarousel">
                            <img src="${entries.poster}" alt="image"/>
                        </a>
                    </div>

                    <div class="details part2">
                        <P class="title">${entries.title}</p>
                        <p class="style">Style #:${entries.style}</p>
                        <p class="colour">Colour:${entries.colour}</p>
                        <div class="product-footer">
                            <div class="col-2 edit><button type="button" class="btn btn-link editpopup" data-toggle="modal" data-target="#myModal" name="${entries.id}">EDIT</button></div>
                            <div class="col-2 remove" name="${entries.id}"><a href="#">REMOVE</a></div>
                            <div class="col-3 save"><a href="#">SAVE FOR LATER</a></div>                     
                        </div>
                        

                        <div class="modal fade" id="myModal" role="dialog">
                            <div class="modal-dialog">
                            
                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header editheader">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div class="part3">
                        <div class="part31 size">${entries.size}</div>
                        <div class="part32 qty">
                            <input type = "text" aria-label="quantity" class="count" value="${entries.quantity}" readonly/>
                        </div>
                        <div class="part33 subprice">$${entries.price}</div>
                    </div>
                    <div class="part4"></div>
                </div>
            </div>
        </div>
        `;
    return collection;
}

export function createHTMLElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
} 

export function viewCarousel(data){
    console.log(data);
    document.getElementsByClassName("part4")[0].innerHTML='';
    let collection=`
    <div class="modal fade" id="myCarousel" tabindex="-1" role="dialog" aria-labelledby="itemView" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark text-light">
                    <h5 class="modal-title" id="itemModal">OUR SIMILAR PRODUCTS</h5>
                    <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="container">
                            <div class="row blog">
                                <div class="col-md-12">
                                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner carouselbody">
                                      <div class="carousel-item active">
                                        <img class="d-block w-100" src="${data.poster}" alt="First slide">
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src="${data.poster}" alt="Second slide">
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src="${data.poster}" alt="Third slide">
                                      </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;
    let cartElt = createHTMLElement(collection);
    document.getElementsByClassName("part4")[0].appendChild(cartElt);

}

export function viewEditCart(data){
    let collection=`
        <div class="editCart">
            <div class="card editcart">
                <div class="card-body editdetails">
                    <p class="card-title viewtit">${data.title}</p>
                    <h2 class="card-text viewdet">$${data.price}</h2>
                    <p class="card-text viewdet">${data.colour}</p>

                    <div class="editbtns">   
                        <div class="dropdown">
                            <label>SIZE:</label>
                            <select name="Size" class="updatedsize">
                                <option value="${data.size}">${data.size}</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </div>

                        <div class="dropdown">
                            <label>QTY:</label>
                            <select name="quantity" id="updatedqty">
                                <option value="${data.quantity}">${data.quantity}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary maineditbtn" data-dismiss="modal" ame="${data.id}">EDIT</button>
                    <button type="button" class="btn btn-link addonlink">See Product Details</button>
                </div>
                <img class="card-img-top" src="${data.poster}" alt="image poster">
            </div>


        </div>
    `;
    return collection;
}

export function viewTotal(subTotal, promotionTotal, grandAmmount){
    let collection=`
            <div class="total">
                <form>
                    <div class="form-group row">
                        <label for="subtotal" class="col-sm-6 col-form-label subtotal"><strong>SUBTOTAL</strong></label>
                        <p class="col-sm-6">
                        <input type="text" readonly class="form-control-plaintext" id="subtotal" value="$${subTotal}">
                        </p>

                        <label for="promotionTotal" class="col-sm-6 col-form-label promotionTotal"><strong>PROMOTON CODE JF10 APPLIED</strong></label>
                        <p class="col-sm-6">
                        <input type="text" readonly class="form-control-plaintext" id="promotionTotal" value="$${promotionTotal}">
                        </p>

                        <label for="delivary" class="col-sm-6 col-form-label delivary"><strong>Estimate Shipping*</strong> You qualify for free shipping because your order is over $50*</label>
                        <p class="col-sm-6">
                        <input type="text" readonly class="form-control-plaintext" id="delivary" value="FREE">
                        </p>

                        <label for="estimatedtotal" class="col-sm-6 col-form-label estimatedtotal"><strong>ESTIMATED TOTAL</strong> Tax will be applied during checkout</label>
                        <p class="col-sm-6">
                        <input type="text" readonly class="form-control-plaintext" id="estimatedtotal" value="$${grandAmmount}">
                        </p>
                    </div>

                </form>
            </div>
    `;
    document.getElementsByClassName("calculation")[0].innerHTML=collection;
}