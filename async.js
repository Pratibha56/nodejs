
function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();

        },time)
    })
}
async function placeorder(){
     await delay(2000);
    console.log("orde take place");

}
async function startproduction(){
    await delay(2000);
   console.log("production start");

}
async function printid(){
    await delay(2000);
   console.log("printed id");

}
async function productname(){
    await delay(2000);
   console.log(" name taken ");

}
async function productdesc(){
    await delay(2000);
   console.log("discription taken ");

}
async function main ()
{
    console.log("order is now going to take place");
    await placeorder();
    console.log("product is in production");
    await startproduction();
    console.log("print id ");
    await printid();
    console.log("product name");
    await productname();
    console.log("product desc");
    await productdesc();
}
main();