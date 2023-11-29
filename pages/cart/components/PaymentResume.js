const paymentResumeTemplate = document.createElement('template');
paymentResumeTemplate.innerHTML = `
    <style>
        .content {
            width: 300px;
            height: 450x;
            background-color: var( --gray-weak-color );
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 10px;
        }

        .title {
            font-weight: 700;
            font-size: 25px;
        }

        .content-subtotal, .content-shipping, .content-discount, .content-total, .content-cash-payment {
            display: flex;
            justify-content: space-between;
        }

        .value {
            font-size: 18px;
            font-weight: 700;
        }

        .total-description {
            font-size: 25px;
            font-weight: 700;
        }

        .divisor {
            width: 100%;
            height: 1px;
            background-color: var( --gray-color );
        }

        .value-total {
            font-size: 20px;
            font-weight: 700;
        }

        .content-cash-payment {
            border-radius: var( --radius-default );
            background-color: #e5fff1;
            padding: 20px;
            color: #007823;
            font-weight:700;
            font-size: 20px;
        }

    </style>
    <div class="content">
        <div class="title">
            RESUMO
        </div>
        <div class="content-subtotal">
            <div>
                Subtotal
            </div>
            <div class="value" id="subtotal">
                $99.00
            </div>
        </div>
        <div class="content-shipping">
            <div>
                Frete
            </div>
            <div class="value" id="delivery-shipping">
                $16.00
            </div>
        </div>
        <div class="content-discount">
            <div>
                Desconto
            </div>
            <div class="value" id="discount">
                $16.00
            </div>
        </div>
        <div class="divisor"></div>
        <div class="content-total">
            <div class="total-description">Total</div>
            <div class="value-total" id="total">
                $119.00
            </div>
        </div>
        <div class="content-cash-payment">
            <div>
                À Vista
            </div>
            <div id="cash-payment">
                $119.00
            </div>
        </div>
        <button-primary text="IR PARA O PAGAMENTO" id="button-payment" ></button-primary>
    </div>
`;

class PaymentResume extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( paymentResumeTemplate.content.cloneNode( true ) );

        this.buttonPayment = this.shadowRoot.querySelector( "#button-payment" );
    }

    static get observedAttributes() { 
        return [ 'delivery-shipping', 'subtotal', 'discount', 'cash-payment', 'total' ]; 
    }

    get total() {
        this.getAttribute( 'total' ); 
    }

    set total( value ) {
        this.setAttribute( 'total', value ); 
    }

    get cashPayment() {
        this.getAttribute( "cash-payment" );
    } 

    set cashPayment( value ) {
        this.setAttribute( "cash-payment", value );
    }

    get discount() {
        this.getAttribute( "discount" );
    } 

    set discount( value ) {
        this.setAttribute( "discount", value );
    }

    get subtotal() {
        this.getAttribute( "subtotal" );
    } 

    set subtotal( value ) {
        this.setAttribute( "subtotal", value );
    }

    get deliveryShipping() {
        this.getAttribute( "delivery-shipping" );
    } 

    set deliveryShipping( value ) {
        this.setAttribute( "delivery-shipping", value );
    }

    redirectPage( destity ) {

        if( this.buttonPayment.disabled ){
            return;
        }

        window.location.href = destity;
    }

    connectedCallback() {
        this.buttonPayment.addEventListener( 'click', this.redirectPage.bind( this, './payment.html' ) );
    }

    setDisabledButton( value ) {
        console.log( value )
        this.buttonPayment.disabled = value; 
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        
        switch( name.toLowerCase() ){
            case 'delivery-shipping':
                this.setDeliveryShipping( newValue )
                break;
            case 'subtotal':
                this.setSubtotal( newValue );
                break;
            case 'discount':
                this.setDiscount( newValue );
                break;
            case 'cash-payment':
                this.setCashPayment( newValue );
                break;
            case 'total':
                this.setTotal( newValue );
                break;
            default:
                break;
        }
    }

    setDeliveryShipping( value ) {
        this.shadowRoot.getElementById( 'delivery-shipping' ).textContent = `$${value}`;
    }

    setSubtotal( value ) {
        this.shadowRoot.getElementById( 'subtotal' ).textContent = `$${value}`;
    }

    setDiscount( value ) {
        this.shadowRoot.getElementById( 'discount' ).textContent = `$${value}`;
    }

    setCashPayment( value ) {
        this.shadowRoot.getElementById( 'cash-payment' ).textContent = `$${value}`;
    }

    setTotal( value ) {
        this.shadowRoot.getElementById( 'total').textContent = `$${value}`;
    }

}

window.customElements.define( 'payment-resume', PaymentResume )