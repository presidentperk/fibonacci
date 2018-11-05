var a = 0;
var b = 1;
function fibonacci(){
    while (a <= 500 && b <= 500){
    console.log(a+", ");
    console.log(b+", ");
    a+=b;
    b+=a;
    }
    if(a>b){
        console.log(b);
    }
    else{
        console.log(a);
    }
}
function fibonacciRecursive(iter){
    if(iter==0){
        return 0;
    }
    else if(iter==1){
        return 1;
    }
    else{
        return fibonacciRecursive(iter - 1)+fibonacciRecursive(iter-2);
    }
}
fibonacci();
console.log(fibonacciRecursive(5));