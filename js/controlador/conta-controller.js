class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta => this.inserirContaNoHTML(conta));
    }

    cadastrar(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#data-aniversario');
        const elementoTipoConta = document.querySelector('#tipo-conta');

        const numeroConta = elementoNumero.value;
        const saldoConta = Number(elementoSaldo.value);
        const dataAniversario = elementoDataAniversario.value;

        if (elementoTipoConta.value == 'conta-comum') {
            let conta = new ContaComum(numeroConta, saldoConta);
            this.adicionarConta(conta);
            this.inserirContaNoHTML(conta);
        }
        else if (elementoTipoConta.value == 'conta-poupanca') {
            let conta = new ContaPoupanca(numeroConta, saldoConta, dataAniversario);
            this.adicionarConta(conta);
            this.inserirContaNoHTML(conta);
        }
        else if (elementoTipoConta.value == 'conta-bonificada') {
            let conta = new ContaBonificada(numeroConta, saldoConta);
            this.adicionarConta(conta);
            this.inserirContaNoHTML(conta);
        }
        else {
            console.log("Não foi possível criar a conta!")
        }
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
