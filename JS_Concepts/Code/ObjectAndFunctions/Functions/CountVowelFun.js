
function checkVowel(String){
  let vowelCount=0;
  let vowel="aeiou";
  
  for(let i=0;i<String.length;i++){
   if(String[i]=='a'||String[i]=='e'||String[i]=='i'||
     String[i]=='o'||String[i]=='u'){
      vowelCount ++;   
     }
    
  }
  return  vowelCount;
}

console.log(checkVowel("abcde"));