const paymentResumeTemplate = document.createElement('template');
paymentResumeTemplate.innerHTML = `
    <style>
        .content {
            width: 300px;
            height: 450x;
            background-color: var( --gray-weak-color );
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 10px;
        }

        .title {
            font-weight: 700;
            font-size: 25px;
        }

        .content-subtotal, .content-shipping, .content-discount, .content-total, .content-cash-payment {
            display: flex;
            justify-content: space-between;
        }

        .value {
            font-size: 18px;
            font-weight: 700;
        }

        .total-description {
            font-size: 25px;
            font-weight: 700;
        }

        .divisor {
            width: 100%;
            height: 1px;
            background-color: var( --gray-color );
        }

        .value-total {
            font-size: 20px;
            font-weight: 700;
        }

        .content-cash-payment {
            border-radius: var( --radius-default );
            background-color: #e5fff1;
            padding: 20px;
            color: #007823;
            font-weight:700;
            font-size: 20px;
        }

    </style>
    <div class="content">
        <div class="title">
            RESUMO
        </div>
        <div class="content-subtotal">
            <div>
                Subtotal
            </div>
            <div class="value">
                $99.00
            </div>
        </div>
        <div class="content-shipping">
            <div>
                Frete
            </div>
            <div class="value">
                $16.00
            </div>
        </div>
        <div class="content-discount">
            <div>
                Desconto
            </div>
            <div class="value">
                $16.00
            </div>
        </div>
        <div class="divisor"></div>
        <div class="content-total">
            <div class="total-description">Total</div>
            <div class="value-total">
                $119.00
            </div>
        </div>
        <div class="content-cash-payment">
            <div>
                À Vista
            </div>
            <div>
                $119.00
            </div>
        </div>
        <button-primary text="IR PARA O PAGAMENTO" ></button-primary>
    </div>
`;

class PaymentResume extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( paymentResumeTemplate.content.cloneNode( true ) );
    }

}

window.customElements.define( 'payment-resume', PaymentResume )