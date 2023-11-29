const cartEmptyTemplate = document.createElement('template');
cartEmptyTemplate.innerHTML = `
    <style> 
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .content > div {
            font-size: 25px;
        }

        .content > i {
            color: var( --gray-color )
        }

    </style>
    <div class="content">
        <i class="bi bi-cart4" style="font-size: 15rem;"></i>
        <div>Nenhum produto no carrinho</div>
    </div>
`;

class CartEmpty extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( cartEmptyTemplate.content.cloneNode( true ) );
    }

}

window.customElements.define( 'cart-empty', CartEmpty )