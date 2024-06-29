class heroi{  
        constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        
        let ataque
           
        switch(this.tipo){
            case "Mago":
            ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}!`)
            break
            
            case "Guerreiro":
            ataque = "espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}!`)
            break

            case "Monge":
            ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}!`)
            break

            case "Ninja":
            ataque = "shuriken"
            console.log(`O ${this.tipo} atacou usando ${ataque}!`)
            break
        }
    }
}
let tipoMago = new heroi("Mestre dos Magos", 70, "Mago")
let tipoGuerreiro = new heroi("Rambo", 30, "Guerreiro")
let tipoMonge = new heroi("William de Baskerville", 55, "Monge")
let tipoNinja = new heroi("Tartaruga", 16, "Ninja")

tipoMago.atacar()
tipoGuerreiro.atacar()
tipoMonge.atacar()
tipoNinja.atacar()