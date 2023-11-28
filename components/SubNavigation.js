const subNavigationTemplate = document.createElement('template');
subNavigationTemplate.innerHTML = `
    <style>
        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 75px;
        }
        .content-options {
            display: flex;
            list-style-type: none;
            padding: 0px;
            justify-content: center;
            width: 500px;
            gap: var( --gap-default );
            font-size:18px;
            cursor: pointer;
            transition: var( --default-transition );
        }

        .content-options > a {
            text-decoration: none;
            color: inherit;
        }

        .content-options > a:hover {
            color: var( --primary-color );
        }

    </style>
    <div class="content">
        <ul class="content-options">
            <a href="./index.html">Home</a>
            <a>Sobre</a>
            <a>Categorias</a>
            <a>Produtos</a>
            <a>Contato</a>
        </ul>
    <div>
`;

class SubNavigation extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( subNavigationTemplate.content.cloneNode( true ) );
    }
}

window.customElements.define( 'sub-navigation', SubNavigation )