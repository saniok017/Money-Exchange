// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = 0;
    const H=50;
    const Q=25;
    const D=10;
    const N=5;
    const P=1;
    const pile={};
    
    if(currency > 9999){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    for (let i=1; result + H <= currency;i++) {
        result += H;
        pile.H=i;
    }  
    for (let i=1; result + Q <= currency;i++) {
        result += Q;
        pile.Q=i;
    }
    for (let i=1; result + D <= currency;i++) {
        result += D;
        pile.D=i;
    }
    for (let i=1; result + N <= currency;i++) {
        result += N;
        pile.N=i;
    }
    for (let i=1; result + P <= currency;i++) {
        result += P;
        pile.P=i;
    }
    return pile
}