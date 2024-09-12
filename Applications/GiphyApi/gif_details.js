let APIKEY="0dYUhXbjFEycFPyfjSBvY44vLRb8dBNE";

const details=async()=>{
    let id=JSON.parse(localStorage.getItem("details"));
    try{
        let response=await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
        let data= await response.json();
        appendingToDomDetails(data.data);

    }
    catch(error){
         console.log(error);
    }

}

details();

const appendingToDomDetails=(data)=>{
    let detailsDiv=document.getElementById("gifDetails");
    let image=document.createElement("img");
    image.src=data.images.original.url;
    detailsDiv.append(image);
 
}

