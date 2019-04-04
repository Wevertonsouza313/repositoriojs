//Cadeia de prototipos {prototype chain}

Object.prototype.attr0 = '0'
const avo = { attr1 : 'A'}
const pai = { __proto__: avo, attr2 : 'B'}
const filho = {  __proto__: pai, attr3 : 'C'}

console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)    

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    status(){
                                   //aqui eu disse que esse metodo que deve ser chamado
                                   //la de cima do const carro
        return `${this.modelo}: ${super.status()}`
    }
}   
//aqui eu disse que ferrari é filho do carro
Object.setPrototypeOf(ferrari, carro)
console.log(ferrari)
//Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(volvo, carro)
console.log(volvo)

volvo.acelerarMais(100)
//console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari .status())
