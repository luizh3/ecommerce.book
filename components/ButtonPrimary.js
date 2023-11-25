const buttonPrimaryTemplate = document.createElement('template');
buttonPrimaryTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <style>
        .content {
            width: 100%;
            height: 50px;
            border: none;
            border-radius: var( --radius-default );
            justify-content: center;
            align-items: center;
            display: flex;
            gap: 10px;
            cursor: pointer;
            background-color: var( --blue-strong-color );
            font-weight: 700;
            color: #FFFFFF;
            padding: 10px;
            font-size: 18px;
            box-shadow: var( --box-shadow-default );
        }

        .content:hover {
            opacity: 0.9;
        }
        
        .content > i {
            font-size: 20px;
        }
    </style>
    <button class="content">
        <i id="icon"></i>
    </button>
`;

class ButtonPrimary extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( buttonPrimaryTemplate.content.cloneNode( true ) );
    }

    setIcon( icon ){
        this.shadowRoot.getElementById("icon").classList.add( icon );
    }

    connectedCallback() {

        this.shadowRoot.querySelector(".content").textContent = this.attributes.text.value;

        if( this.attributes.icon ){
            this.setIcon( this.attributes.icon.value  );
        } 
    }

}

window.customElements.define( 'button-primary', ButtonPrimary )