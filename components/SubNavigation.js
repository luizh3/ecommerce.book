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
            display:flex;
            list-style-type: none;
            padding: 0px;
            justify-content: center;
            width: 500px;
            gap: var( --gap-default );
            font-size:18px;
            cursor: pointer;
        }

        .content-options > li {
            transition: var( --default-transition );
        }

        .content-options > li:hover {
            color: var( --primary-color );
        }

    </style>
    <div class="content">
        <ul class="content-options">
            <li>Home</li>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Produtos</li>
            <li>Contato</li>
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