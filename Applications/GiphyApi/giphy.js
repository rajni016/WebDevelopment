let APIKEY="0dYUhXbjFEycFPyfjSBvY44vLRb8dBNE";


const main= async () => {
  try{
    let response =await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);
     
    let data=await response.json();
     appendingToDom(data.data);
  }
  catch(error){
    console.log(error);
  }
} ;

const appendingToDom= async (data)=>{
    let gifContent=document.getElementById("gif");
    let stickerContent=document.getElementById("sticker");
    let main=document.getElementById("main");
    gifContent.innerHTML="";
    stickerContent.innerHTML="";
    main.innerHTML="";
     data.forEach(element => {
        let image=document.createElement("img");
        image.src=element.images.downsized.url;
         main.append(image);
         image.addEventListener("click",()=>details_gif(element.id))
     });

  

}
//trending gifs will automatically load after rendering dom page 
main();
//clicked gif or sticker will load in to new  page, the gif id is stored in local storage and based on id we will make API call
const details_gif= (id)=>{
    localStorage.setItem("details",JSON.stringify(id));
    window.location.href="./gif_details.html";
}

//function makes API call with searched gif value as end point when clicked on Search Gifs
const gif=async()=>{
    let query=document.getElementById("search").value;
    if(query==""){
        alert("Please type in search bar")
    }
    else{
        try{
           let url=`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`
            let response= await fetch(url);//json object
            let data= await response.json();
           appendingToDom(data.data);
        }
        catch(error){
            console.log(error);
                   }

    }   
     
};
//function makes API call with searched sticker value as end point when clicked on Search Stickers
const sticker=async ()=>{
     let query=document.getElementById("search").value ;
     if(query==""){
        alert('Please Enter in Search Bar')
     }
     else{
        try{
            //API calls 
        let response = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${query}`);
        let data=await response.json();
        appendingToDom(data.data);

        }
        catch(error){
            console.log(error);
        }

     }

    

}
