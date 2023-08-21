// type of promises pending resolve & reject
const placeorder = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("order is taken");
            resolve();
        },2000);

    });
};
const startproduction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("production is start");
            resolve();
        },2000);

    });
};
const printid = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print id");
            resolve();
        },2000);

    });
};
const productname = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("take name");
            resolve();
        },2000);

    });
};
const productdesc = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" take product desc");
            resolve();
        },2000);

    });
};
console.log("order is now going to take");
placeorder()
.then(()=>{
    console.log("product is in production");
    return startproduction();

})
.then(()=>{
    console.log("id printing started..");
    return printid();

})
.then(()=>{
    console.log("productname printing started..");
    return productname();

})
.then(()=>{
    console.log("productdesc printing started..");
    return productdesc();

})
.catch((error)=>{
    console.log("error");
    return error();

})