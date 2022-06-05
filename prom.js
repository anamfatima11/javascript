function prom(complete) {
    return new promise (function(resolve,reject)
    {
        console.log ("fetching data,please wait.")
        settimeout (()=>{
            if (complete){
                resolve("I am sucessfull");
            }else{
                reject("I am failed");
            }
            },3000)
        }); 
    }
    // prom(true).then(resolve)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });
    Promise(true).then((result)=>{
        console.log("successs");
    }).catch((error)=>{
        console.log("error");
    })

    