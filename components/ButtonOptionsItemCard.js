const buttonOptionsItemCardTemplate = document.createElement('template');
buttonOptionsItemCardTemplate.innerHTML = `
    <style>
        
    </style>
    <div>
        <button class="button-icon">
        </button>
        <button class="button-text-icon">
        </button>
        <button class="button-icon">
        </button>
    </div>
`;

class ButtonOptionsItemCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( buttonOptionsItemCardTemplate.content.cloneNode( true ) );
    }

    // connectedCallback(){
    //     const button = this.shadowRoot.querySelector('button');
    //     button.addEventListener('click', () => {
    //         console.log('a')
    //     })
    // }
}

window.customElements.define( 'button-options-item-card', ButtonOptionsItemCard )