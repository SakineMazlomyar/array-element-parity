function solve(arr){
    //..
    
    for(let  i = 0; i<arr.length; i++){
        if(arr[i] >= 0 && arr.includes(-arr[i]) === false){

           return arr[i]
        }

        if(arr[i] < 0 && arr.includes(Math.abs(arr[i])) === false){
            return arr[i]
        }
    }

};

console.log(solve([1, -1, 2, -2, 3] ))