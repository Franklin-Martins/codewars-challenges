function arrayDiff(a, b) {
    if (b.length < 1 || a.length < 1) {
      return a;
    }
    console.log('vertor a: ' + a);
    console.log('vertor b: ' + b);
    
    let auxiliar = a;
    
    b.map(element =>{
        if(auxiliar.includes(element)){
          let index = a.indexOf(element);

          while(index >= 0){
              a.splice(index, 1);
              index = a.indexOf(element);
          }
        };
    });
    
    return a
}
console.log(arrayDiff([1,2,3,3],[3,2]))
//arrayDiff([1,2,2],[2])

/*function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}*/