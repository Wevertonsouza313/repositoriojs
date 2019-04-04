String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola code'.reverse())

Array.prototype.first = function(){
    return[0]
}

console.log([1,2,3,4].first())  
console.log(['a','b','c','d'].first())  