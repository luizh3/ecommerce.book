const itemContainerTemplate = document.createElement('template');
itemContainerTemplate.innerHTML = `
    <style>
        .content {
            width: 1080px;
            height: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items:center;
            justify-content: center;
            gap: var( --gap-default );
            margin-bottom: 50px;
        }

        @media ( max-width: 1175px ) {
            .content {
                flex-direction: column;
                width: 525px;
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media ( max-width: 900px ) {
            .content {
                width: 250px;
                flex-direction: column;
                grid-template-columns: repeat(1, 1fr);
            }
        }

    </style>
    <div class="content">
        <slot name="item-0"></slot>
        <slot name="item-1"></slot>
        <slot name="item-2"></slot>
        <slot name="item-3"></slot>
    </div>
`;

class ItemContainer extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( itemContainerTemplate.content.cloneNode( true ) );
    }
}

window.customElements.define( 'item-container', ItemContainer )