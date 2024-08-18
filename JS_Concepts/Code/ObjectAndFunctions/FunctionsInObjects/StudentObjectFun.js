let details={
  data:[],
  addStudent: function(name,eng,mat,phy){
    let object={}
    object.name=name;
    object.english=eng;
    object.maths=mat;
    object.physics=phy;

    this.data.push(object)
  },
  leastTotal: function (){
    let lowScore=+Infinity;
    let lowStudent='';
    for(let i=0;i<this.data.length;i++){
      let total=this.data[i].english+this.data[i].maths+this.data[i].physics;
      if(total<lowScore){
        lowScore=total;
        lowStudent=this.data[i].name;
      }
    }
    console.log("student" ,lowStudent,"with least score",lowScore);
  },
  highestTotal: function(){
    let highScore = -Infinity;
    let highStudent ='';
    for(let i=0;i<this.data.length;i++){
      let total=this.data[i].english+this.data[i].maths+this.data[i].physics;
      if(total>highScore){
        highScore=total;
        highStudent=this.data[i].name;
      }
    }
    console.log('student', highStudent ,'with highest marks', highScore);
  }
}


details.addStudent("A",20,10,20,10);
details.addStudent("B",30,20,30,20);
details.addStudent("C",40,30,40,30);

console.log(details.data);
details.leastTotal();
details.highestTotal();


