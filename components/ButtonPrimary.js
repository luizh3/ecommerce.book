const buttonPrimaryTemplate = document.createElement('template');
buttonPrimaryTemplate.innerHTML = `
    <style>
        
    </style>
    <button>
        <slot name="text"></slot>
        <span id="contador"> 0 </span>
    </button>
`;

class ButtonPrimary extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( buttonPrimaryTemplate.content.cloneNode( true ) );
    }

    // connectedCallback(){
    //     const button = this.shadowRoot.querySelector('button');
    //     button.addEventListener('click', () => {
    //         console.log('a')
    //     })
    // }
}

window.customElements.define( 'button-primary', ButtonPrimary )