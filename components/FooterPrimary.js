const FooterPrimaryTemplate = document.createElement('template');
FooterPrimaryTemplate.innerHTML = `
    <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .content-top {
            width: 100%;
            min-height: 275px;
            background-color: var( --eerie-black );
            display: flex;
            align-items:center;
            justify-content: center;
            color: #FFFFFF;
        }
        
        .content-bottom {
            width: 100%;
            height: 10vh;
            background-color: var( --eerie-black );
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #FFFFFF;
        }

        .content-links {
            width: 60%;
            display: flex;
            justify-content: space-between;
            min-width: 600px;
        }

        ul {
            list-style-type: none;
        }

        .list-title {
            font-size:20px;
            font-weight: 700;
        }
        
        li {
            cursor: pointer;
        }

        .logo {
            font-size: 20px;
            font-weight: 700;
        }

        .icon-social-media {
            cursor: pointer;
            font-size: 20px;
        }

        .social-media {
            display: flex;
            gap: 10px;
        }

        @media ( max-width: 900px ) {
            .content-links {
                flex-direction: column;
                width: 250px;
                min-width: 250px;
            }
        }

    </style>
    <div>
        <div class="content-top">
            <div class="content-links">
                <ul>
                    <li class="logo">INFINITE CART</li>
                    <li class="social-media">
                        <i class="bi bi-facebook icon-social-media"></i>
                        <i class="bi bi-whatsapp icon-social-media"></i>
                        <i class="bi bi-instagram icon-social-media"></i>
                        <i class="bi bi-twitter-x icon-social-media"></i>
                    </li>
                </ul>
                <ul class="list-links">
                    <li class="list-title">Informações</li>
                    <li>Sobre</li>
                    <li>Tipos de pagamentos</li>
                    <li>Política de privacidade</li>
                </ul>
                <ul class="list-links">
                    <li class="list-title">Categorias</li>
                    <li>Livro</li>
                    <li>Manga</li>
                    <li>Blu-ray</li>
                </ul>
                <ul class="list-links">
                    <li class="list-title">Ajuda & Suporte</li>
                    <li>Politica de devolução</li>
                    <li>Perguntas frequentes</li>
                    <li>Rastreamento de pedidos</li>
                </ul>
            </div>
        </div>
        <div>
            <div class="content-bottom">
                <div>
                    <img id="img-card" src="./resources/image/payment/payment.png"></img>
                </div>
                <div>Copyright © All Rights Reserved.</div>
            </div>
        </div>
    </div>
`;

class FooterPrimary extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( FooterPrimaryTemplate.content.cloneNode( true ) );
    }
}

window.customElements.define( 'footer-primary', FooterPrimary )