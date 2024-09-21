export const appendData=(data,post_div)=>{
    
 data.forEach((element) => {
    let {title, images}=element;
    let div=document.createElement("div");
    let img=document.createElement("img");
    let p=document.createElement("p");
    img.src=images;
    p.innerText=title;
    div.append(img,p)
    post_div.append(div);

 });

}