const navbarPrimaryTemplate = document.createElement('template');
navbarPrimaryTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border-bottom: var( --border-default );
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .content-icon {
            display: flex;
            gap: var( --gap-default );
            cursor: pointer;
        }
    </style>
    <div class="content">
        <div>
            E-Commerce
        </div>
        <input-search>
            <slot slot="search-icon" name="search-icon"></slot>
        </input-search>
        <div class="content-icon">
            <div class="icon">
                <slot name="person-icon"></slot>
                <span>Perfil</span>
            </div>
            <div class="icon">
                <slot name="heart-icon"></slot>
                <span>Favorito</span>
            </div>
            <div class="icon">
                <slot name="cart-icon"></slot>
                <span>Cart</span>
            </div>
        </div>
    </div>
`;

class NavbarPrimary extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( navbarPrimaryTemplate.content.cloneNode( true ) );
    }

}

window.customElements.define( 'navbar-primary', NavbarPrimary )