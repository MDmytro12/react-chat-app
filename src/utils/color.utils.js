const {Hash} = require('hash-anything')

export function colorFilter(symbol = 'a'){
    const hashSymbol = new Hash('sha1').hash(symbol).getValue()
    
    const r = hashSymbol[0].charCodeAt(0)
    const g = hashSymbol[1].charCodeAt(0)
    const b = hashSymbol[2].charCodeAt(0)

    const colorLight = `rgba( ${r} , ${g} , ${b} , .3)`
    const colorDark = `rgba( ${r} , ${g} , ${b} , 1 )`

    return ` linear-gradient(90deg, ${colorDark} 0%, ${colorLight} 100%)` 
}