function rotLeft(a,d){
    for(let i=1; i<d; i++){
        a.push([0]);
        a.shift([0]);
    }
    return a;

}
