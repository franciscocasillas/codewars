//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n){
    console.log(String(n).split('').map(Number).reverse())
}

digitize(2395)