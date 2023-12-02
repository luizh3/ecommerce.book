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

        @media ( max-width: 900px ) {
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
                <img id="image-cart"></img>
            </div>
            <div class="text-values" id="title">
                Ataque dos Titãs Vol. 34
            </div>
        </div>
        <div class="content-quantity">
            <div class="text-values">
                Quantidade
            </div>
            <button-quantity class="button-quantity" id="quantity"></button-quantity>
            <div class="product-remove" id="remove-button">
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

        this.quantityElement = this.shadowRoot.querySelector("#quantity");

    }

    static get observedAttributes() { 
        return [ 'title', 'image-url', 'price', 'quantity' ]; 
    }

    get item() {
        this.getAttribute( 'item' );
    }

    set item( value ) {
        this.setAttribute( 'item', value );
    }

    get quantity() {
        this.getAttribute( 'quantity' );
    }

    set quantity( value ) {
        this.setAttribute( 'quantity', value );
    }
    
    get price() {
        this.getAttribute( 'price' );
    }

    set price( value ) {
        this.setAttribute( 'price', value );
    }

    get imageUrl() {
        this.getAttribute( 'image-url' );
    }

    set imageUrl( value ) {
        this.setAttribute( 'image-url', value );
    }

    get title() {
        this.getAttribute( 'title' );
    }

    set title( value ) {
        this.setAttribute( 'title', value );
    }

    remove() {
        this.parentNode.removeChild( this );
        this.dispatchEvent( EventItem.removeItem( this.sequence ) );
    }

    connectedCallback() {

        this.shadowRoot.getElementById( "remove-button" ).addEventListener( 'click', this.remove.bind( this ) );

        this.quantityElement.addEventListener( EventItem.nameQuantityChanged(), ( event ) => {

            const item = event.detail.item;

            if( item.quantity == 0 ) {
                this.remove();
            }
        
            this.updatePriceAndQuantity( event.detail.item )

            this.dispatchEvent( EventItem.quantityChanged( event.detail.item ) );
        } )
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        
        switch( name.toLowerCase() ){
            case 'title':
                this.setTitle( newValue )
                break;
            case 'image-url':
                this.setImage( newValue );
                break;
            case 'price':
                this.setPrice( newValue );
                break;
            case 'quantity':
                this.setQuantity( newValue );
                break;
            default:
                break;
        }

    }

    setTitle( title ) {
        this.shadowRoot.getElementById("title").textContent = title;
    }

    setImage( url ) {
        this.shadowRoot.getElementById("image-cart").src = url;
    }

    setQuantity( quantity ) {
       this.quantityElement.setAttribute('quantity', quantity );
    }

    setPrice( price) {
        this.shadowRoot.getElementById("price").textContent = `$${price}`;
    }

    updatePriceAndQuantity( item ) {
        this.price = item.quantity * item.unit_price;
        this.quantity = item.quantity;
    }

    setValuesByItem( item ) {

        this.title = item.name;
        this.imageUrl = item.images_url[0];
        this.sequence = item.sequence;

        this.updatePriceAndQuantity( item );

        this.quantityElement.item = item;

    }

}

window.customElements.define( 'item-cart', ItemCartTemplate )