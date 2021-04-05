/*function maskify(creditCard){
    let aux = creditCard.split('');
    let toMask = aux.reverse()
    
    let masked = toMask.map((number, index) => {
        if(index === 0 || index === 1 || index === 2 ||index === 3){
            return number
        } else{
            return "#"
        }
    })
    return masked.reverse().join('');
}
*/
function maskify(cc) {
    console.log(cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4))
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

maskify('Nananananananananananananananana Batman!');