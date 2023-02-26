function num1(x){
    return function num2(y){
        return x + y;
    };

};
console.log(num1(5)(6));