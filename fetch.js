
    async function fetchData() {
        try{
            const response =await fetch("");
            if(!response.ok){
                throw new Error("network response was not ok ");
            }
            const data = await response.json();
            console.log(data);

        }
        catch(error){
            console.error("error fatching data:",error);
        }
    }
    fetchData();
