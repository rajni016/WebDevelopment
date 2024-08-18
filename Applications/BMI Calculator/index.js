
function calculate(){
    let weight=document.querySelector("#weight").value;
    let height=document.querySelector("#height").value;
    let BMI= (weight)/(height*height);
    console.log(BMI);
        if(BMI<=18.4){
            document.querySelector("h3").innerText="Your BMI is " +BMI + " ,You are UnderWeight"
         }
         else if (BMI>=18.5 && BMI<=24.9){
             document.querySelector("h3").innerText="Your BMI is " +BMI + " ,You are normal Weight"
          }
          else if(BMI>=25 && BMI<=29.9){
             document.querySelector("h3").innerText="Your BMI is " +BMI + " ,You are Over Weight"
          }
          else {
             document.querySelector("h3").innerText="Your BMI is " +BMI + " ,You are Obese"
          }

    
    
   
    
}
