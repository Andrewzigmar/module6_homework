function newArr(){let arr = [1,2,4,7,8,9,3,11,17,21,];

    let filtered1 = arr.filter(elem => elem % 2 === 0);
    console.log( filtered1.length );
    let filtered2 = arr.filter(elem => elem % 2 !== 0 );
    console.log( filtered2.length );
    let filtered3 = arr.filter(elem => elem = 0);
    console.log( filtered3.length );
    let filtered4 = arr.filter(elem => typeof elem == 'String');
    console.log( filtered4.length );
};
newArr();