class Patinete{
    roda : number;
    cor : string;
    tamanho : number;
    movimento : string;
    
    constructor(roda: number, cor: string, tamanho:number ){
        this.cor = cor;
        this.roda = roda;
        this.tamanho = tamanho;
    }
        movimentoReto (){
        console.log('O Patinete eletrico e meu sonho de consumo !!');

    }
}

    const patinete = new Patinete (1.0,'cor laranja', 2.0);
    patinete.movimentoReto()

    console.log('A ${patinete.cor}') \n 'Ele possui o nº de rodas:' ${patinete.rodas}
    console.log('A ${patinete.tamanho}')\n 'Ele possui o tamanho em (cm):' ${patinete.tamanho} 
    
    

