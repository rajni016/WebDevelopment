function outerFunction(web){
    let name='Chrome';
    function innerFunction(){
        console.log(name,web)
    }
    innerFunction();
}

//all the vriables and parameters are accessed by inner function even though Outer Function exceution is finished, this accessing nature is known as Closure
outerFunction("Google");
