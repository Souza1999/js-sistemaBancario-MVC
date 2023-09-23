class ContaBonificada extends ContaComum {
    constructor(numero, saldo) {
        super(numero, saldo);
    }

    creditar(valor) {
        super.creditar(valor * 1.1);
    }

}
