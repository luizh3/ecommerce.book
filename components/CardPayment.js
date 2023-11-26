const cardPaymentTemplate = document.createElement('template');
cardPaymentTemplate.innerHTML = `
    <style>
        .content {
            width: 400px;
            height: 60px;
            border: var( --border-default );
            border-radius: var( --radius-default );
            align-items: center;
            display: flex;
            gap: 10px;
            background-color: #FFFFFF;
            padding: 10px;
            cursor: pointer;
        }

        .content:hover {
            background-color: #58baff;
            border-color: transparent;
            color: #FFFFFF;
        }

        .content-image {
            width: 50px;
            height: 40px;
            border: var( --border-default );
            border-radius: 4px;
            padding: 4px;
            background-color: #FFFFFF;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .bold {
            font-weight: 700;
        }

        .space-between {
            display: flex;
            width: 100%;
            gap: 30px;
        }

        .content-informations {
            width: 100%;
        }

    </style>
    <div class="content">
        <div class="content-image">
            <img src="../resources/image/payment/visa.png"></img>
        </div>
        <div class="content-informations">
            <div class="space-between" id="informations">
                <div class="bold" id="last-numbers">com terminação 2345</div>
            </div>
            <div id="date-expiration">Exp. data 02/27</div>
        </div>
        
    </div>
`;

class CardPayment extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( cardPaymentTemplate.content.cloneNode( true ) );
    }

    connectedCallback() {
        
        if( this.attributes.label ){
            this.addLabelInformation( this.attributes.label.value );
        }

        this.setDateExpiration( this.attributes.datemonthyear.value );
        this.setTextNumberCard( this.attributes.lastnumbers.value );
        this.setImage( this.attributes.url.value );

    }

    setDateExpiration( dateMonthYear ) {
        this.shadowRoot.getElementById( 'date-expiration' ).textContent = `Exp. data ${dateMonthYear}`;
    }

    setTextNumberCard( lastNumbers ) {
        this.shadowRoot.getElementById( 'last-numbers' ).textContent = `Com terminação ${lastNumbers}`;
    }

    setImage( url ) {
        this.shadowRoot.querySelector("img").src = url;
    }

    addLabelInformation( labelDescription ){
        let labelElement = document.createElement('label-information');
        labelElement.setName( labelDescription );
        this.shadowRoot.querySelector("#informations").appendChild( labelElement );
    }

}

window.customElements.define( 'card-payment', CardPayment )