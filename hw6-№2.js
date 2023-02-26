function wholeNum(){
   
    let i = prompt('ведите число','');
        if(i>1000){
            alert('число больше 1000');
        }
        else if(i==0){
            alert('ноль не целое число');
        }
        else if(i==1){
            alert('1 не целое число');
        }
        else{
            for(let x = 2; x < i; x++)  {
                if(i % x === 0) {
                alert('ведено не целое число');
                return false;
                }
                else{
                    alert ('ведено  целое число');
                    return true;
                }
        }
    }

}
wholeNum();
