const getData=async()=>{
    try{
     let response= await fetch("http://localhost:3000/posts");
     let data=await response.json();
     console.log(data);

    }
    catch(error){
         console.log(error);
    }
}
getData();


const postData=async()=>{
    let newData={id: "3", title: "added title", views: 300};
  let commentsData = {
        id: "3",
        text: "a comment about post 3",
        postId: "3"
      };
    try{
        let response= await fetch("http://localhost:3000/posts",{
            method:"POST",
            body:JSON.stringify(newData),
            header:{
                "Content-Type":"application/json",
            },
        });
//post, update requires 2 parameters in the fetch call
        let comments=await fetch("http://localhost:3000/comments",{
            method:"POST",
            body: JSON.stringify(commentsData),
            header:{
                "Content-Type":"application/json"
            }
        });

    }
    catch(error){
        console.log(error);
    }
}

