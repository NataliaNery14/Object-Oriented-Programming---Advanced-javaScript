class Paciente {
    CPF : number;
    endereco : string;
    telefone : number;
    
    
    constructor(CPF: number, endereco: string, telefone:number ){
        this.CPF = CPF;
        this.endereco = endereco;
        this.telefone = telefone;
    }
        pacienteBom (){
        console.log('Meu medico me ajudou !!');

    }
}

    const paciente = new Paciente (1.0,'curado', 2.0);
    paciente.pacienteBom()

    console.log('A ${paciente.CPF}') \n 'qual o nº do CPF:' ${paciente.CPF}
    console.log('A ${paciente.telefone}')\n 'Qual o telefone:' ${paciente.telefone}