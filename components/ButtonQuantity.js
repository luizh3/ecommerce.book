const buttonQuantityTemplate = document.createElement('template');
buttonQuantityTemplate.innerHTML = `
    <style>
    
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

    .content {
        display: flex;
        align-items: center;
        background-color: transparent;
        width: 150px;
        justify-content: space-between;
    }
    
    .icon {
        width: 50px;
        height: 50px;
        background-color: var( --blue-strong-color );
        border: none;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        box-shadow: var( --box-shadow-default );
    }

    .icon:hover {
        background-color: var(--blue-hover-color);
    }
        
    </style>
    <div class="content">
        <button class="icon">
            <i class="bi bi-plus-lg"></i>
        </button>
            <div style="font-weight: 700;" id="quantity">
                3
            </div>
        <button class="icon">
            <i class="bi bi-dash"></i>
        </button>
    </div>
`;

class ButtonQuantity extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( buttonQuantityTemplate.content.cloneNode( true ) );
    }

    static get observedAttributes() { 
        return ['quantity']; 
    }

    get quantity() {
        return this.getAttribute( 'quantity' );
    }

    set quantity( value ) {
        this.setAttribute( 'quantity', value );
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        
        switch( name.toLowerCase() ){
            case 'quantity':
                this.setQuantity( newValue )
                break;
            default:
                break;
        }

    }

    setQuantity( quantity ) {
        this.shadowRoot.getElementById( "quantity" ).textContent = quantity;
    }

    setAlgumaCoisa() {
        console.log( 'aaa' )
    }
}

window.customElements.define( 'button-quantity', ButtonQuantity )