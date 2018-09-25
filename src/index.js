// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    this.result = 0;
    this.H=50;
    this.Q=25;
    this.D=10;
    this.N=5;
    this.P=1;
    this.pile={};
    if(currency > 9999){return {error: "You are rich, my friend! We don't have so much coins for exchange"}};
    for (let i=1; this.result+this.H <= currency;i++) {
        this.result += this.H;
        this.pile.H=i;
    };   
    for (let i=1; this.result+this.Q <= currency;i++) {
        this.result += this.Q;
        this.pile.Q=i;
    };
    for (let i=1; this.result+this.D <= currency;i++) {
        this.result += this.D;
        this.pile.D=i;
    };
    for (let i=1; this.result+this.N <= currency;i++) {
        this.result += this.N;
        this.pile.N=i;
    };
    for (let i=1; this.result+this.P <= currency;i++) {
        this.result += this.P;
        this.pile.P=i;
    };
    return this.pile
}
