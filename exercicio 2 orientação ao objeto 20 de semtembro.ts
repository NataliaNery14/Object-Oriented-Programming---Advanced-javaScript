class Cliente {
    CPF : number;
    endereco : string;
    conta : number;
    
    
    constructor(CPF: number, endereco: string, conta:number ){
        this.CPF = CPF;
        this.endereco = endereco;
        this.conta = conta;
    }
        clienteReclama (){
        console.log('Meu banco em muito ruim !!');

    }
}

    const cliente = new Cliente (1.0,'nervoso', 2.0);
    cliente.clienteReclama()

    console.log('A ${cliente.CPF}') \n 'Ele possui o nº do CPF:' ${cliente.CPF}
    console.log('A ${cliente.conta}')\n 'Ele possui o nº da conta:' ${cliente.conta} 