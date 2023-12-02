const inputSearchTemplate = document.createElement('template');
inputSearchTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 40px;
            background-color: white;
            display: flex;
            border: var( --border-default );
            border-radius: var( --radius-default );
            min-width: 100px;
        }

        input {
            border: none;
            width: 90%;
            height: 35px;
            margin-left: 10px;
        }

        input:focus {
            border: 0 none;
            outline: 0;
        }

        .button-search {
            display: flex;
            height: 40px;
            width: 50px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-right: 10px;
        }
    </style>
    <div class="content">
        <input placeholder="Pesquisar" ></input>
        <div class="button-search">
            <slot name="search-icon"></slot>
        </div>
    </div>
`;

class InputSearch extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( inputSearchTemplate.content.cloneNode( true ) );
    }

}

window.customElements.define( 'input-search', InputSearch )