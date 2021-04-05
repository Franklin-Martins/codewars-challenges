function isIsogram(a){
    let text = a.toLowerCase().split("").sort();
    let count = 0;
    text.map(e =>{
        let index = text.indexOf(e)
        if(e === text[index+1]){
            count += 1;
        }
    })
    return count>0?false:true;
}
console.log(isIsogram("moOse"));

/*function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}*/