const placeorder = (callback)=>{
    setTimeout(()=>{
        console.log("order is taken");
        callback();
    },2000);
};
const startproduction = (callback)=>{
    setTimeout(()=>{
        console.log("production start");
        callback();
    },2000);
};
const printid = (callback)=>{
    setTimeout(()=>{
        console.log("print id");
        callback();
    },2000);
};
const productname = (callback)=>{
    setTimeout(()=>{
        console.log("print name");
        callback();
    },2000);
};
const productdesc = (callback)=>{
    setTimeout(()=>{
        console.log("print desc");
        callback();
    },2000);
};




console.log("order is now going");
placeorder(()=>{
    console.log("in production");
    startproduction(()=>{
        console.log("passing  id");
        printid(()=>{
            console.log("passing name");
            productname(()=>{
                console.log("passing descrip");
                productdesc(()=>{
                    console.log("all done");
                })
            })

        })

    })
    
})