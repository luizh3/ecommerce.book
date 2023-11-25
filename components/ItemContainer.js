const itemContainerTemplate = document.createElement('template');
itemContainerTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: auto;
            display: flex;
            align-items:center;
            justify-content: center;
            gap: var( --gap-default );
            margin-bottom:50px;
        }
        
        @media ( max-width: 858px ) {
            .content {
                flex-direction: column;
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