const itemCardActionsTemplate = document.createElement('template');
itemCardActionsTemplate.innerHTML = `
    <style> 
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .card-actions {
            bottom: 20px;
            left: 35px;
            transform: translateY(200px);
            display: flex;
            height: 45px;
        }

        .card-action-button {
            width: 40px;
            border: none;
            background-color: var( --blue-strong-color );
            color: #FFFFFF;
            font-size: var( --font-size-15 );
        }

        .card-action-button:first-child { 
            border-radius: var( --radius-default ) 0 0 var( --radius-default ); 
        }

        .card-action-button:last-child { 
            border-radius: 0 var( --radius-default ) var( --radius-default ) 0; 
        }

        .card-action-button i, .card-action-button-text i {
            font-size: 18px;
        }

        .card-action-button:hover, .card-action-button-text:hover  {
            background-color: var( --blue-hover-color );
        }

        .card-action-button-text {
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: center;
            border: none;
            border-right: var( --border-default );
            border-left: var( --border-default );
            background-color: var( --blue-strong-color );
            color: #FFFFFF;
            font-size: 15px;
        }

    </style>
    <div class="card-actions">
        <button class="card-action-button">
            <i class="bi bi-eye"></i>
        </button>
        <button class="card-action-button-text" id="add">
            <i class="bi bi-cart3"></i>
            <p>Adicionar</p>
        </button>
        <button class="card-action-button">
            <i class="bi bi-heart"></i>
        </button>
    </div>
`;

class ItemCardActions extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( itemCardActionsTemplate.content.cloneNode( true ) );
        
        this.addButton = this.shadowRoot.getElementById( "add" );
    }

    connectedCallback() {

        this.addButton.addEventListener( 'click', ( event ) => {
            event.preventDefault();
        } )

    }

}

window.customElements.define( 'item-card-actions', ItemCardActions )