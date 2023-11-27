const itemCartTemplate = document.createElement('template');
itemCartTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 200px;
            align-items: center;
            display: flex;
            border-radius: var( --radius-default );
            background-color: var( --gray-weak-color );
            min-width: 425px;
            padding: 5px;
        }

        .content-price, .content-quantity {
            flex: 1;
            height: 150px;
        }

        .content-price, .content-quantity {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .content-product-description {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .image {
            width: 150px;
            height: 150px;
            float: left;
        }
        
        #image-cart {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .text-values {
            font-size: 18px;
            font-weight: 700;
            max-width: 100px;
        }

        .product-remove {
            color: var( --red-color );
            font-size: 14px;
            cursor: pointer;
            font-weight: 700;
        }

        .price, .button-quantity {
            display: flex;
            height: 150px;
        }

        .price {
            line-height: 80px;
            font-size: 25px;
            font-weight: 700;
        }

        @media ( max-width: 858px ) {
            .content {
                max-width: 425px;
            }
            .content-product-description {
                flex-direction: column;
            }
            .text-values {
                font-size: 16px;
                max-width: 100px;
            }
        }

    </style>
    <div class="content">
        <div class="content-product-description">
            <div class="image">
                <img id="image-cart" src="../resources/image/attack-on-titan.png"></img>
            </div>
            <div class="text-values" id="title">
                Ataque dos Titãs Vol. 34
            </div>
        </div>
        <div class="content-quantity">
            <div class="text-values">
                Quantidade
            </div>
            <button-quantity class="button-quantity" id="quantity" quantity="3"></button-quantity>
            <div class="product-remove">
                REMOVER
            </div>
        </div>
        <div class="content-price">
            <div class="text-values">
                Valor Total
            </div>
            <div class="price" id="price">
                $20.00
            </div>
        </div>
    </div>
`;

class ItemCartTemplate extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( itemCartTemplate.content.cloneNode( true ) );
    }

    connectedCallback() {
        this.setTitle( this.getAttribute('title') )
        this.setImage( this.getAttribute('image-url') )
        this.setPrice( this.getAttribute('price') )
        this.setQuantity( this.getAttribute('quantity') );
    }

    setTitle( title ) {
        this.shadowRoot.getElementById("title").textContent = title;
    }

    setImage( url ) {
        this.shadowRoot.getElementById("image-cart").src = url;
    }

    setQuantity( quantity ) {
       let element = this.shadowRoot.querySelector("#quantity");
       element.setAttribute('quantity', quantity );
    }

    setPrice( price) {
        this.shadowRoot.getElementById("price").textContent = `$${price}`;
    }

}

window.customElements.define( 'item-cart', ItemCartTemplate )