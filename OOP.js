function Toaster() {
   var instance={}
   instance.toast=""
   instance.add=add
   instance.eject=eject
   instance.start=start
   instance.x;
   instance.stop=stop
   instance.lap=lap
    return instance;

}



var add=function(tost){
   this.toast=tost
   return this.toast
   }
var eject=function(){
     if(this.toast===""){
       return "toaster is empty"
     }else
         {
           var x= this.toast
           this.toast=""

       return x 
       }

   }
   

   var start =function(){
      var that=this
      
      if(this.toast===""){
      return( " toast needs to be added before it can be toasted")
      }
      if(this.toast.includes("toasted")){
        this.toast=this.toast.replace("toasted","burned")
        return this.toast
      }
      
       this.x=setTimeout(function(){
        
      
      console.log("ding")

     that.toast+=" toasted"
       console.log(that.toast)
      
     },2000)
     
     
   }

   var stop=function(){
       var that=this
       this.x=clearTimeout(that.x)
   }
  

// var t=Toaster()
//   t.add("white brid")
//  t.start()

function makeStopwatch(string) {
  var obj={}
  obj.name=string
  obj.stop=undefined;
  obj.time = 0;
  obj.start= start
  obj.stop1=stop1 
  obj.reset=reset 
  obj.lap=lap
  obj.min=0
  obj.laps=laps
  obj.count=0
  obj.val=""
  return obj
     
}

var start=function() {
  var that=this
  var name=this.name
  var min=this.min

    this.stop = setInterval(function() {
           if(that.time===59){
             min+=1
             that.time=0
             console.log('Elapsed time: ' +min +" m "+name)
           }
           that.time = that.time + 1;
          
            console.log('Elapsed time: ' +min +" m "+ that.time + 's. '+name);
          }, 1000);
     }

var stop1=function() {
  var that=this
  this.stop=clearInterval(that.stop);
     }

var reset=function() {
  var that=this
  this.val=""
       this.stop= clearInterval(that.stop);
        this.time = 0;
        
          }

var lap=function(){
  
 this.val+=(++this.count)+"."+this.time+"s \n"
  return 'Adding lap @ '+this.time+"s "+this.name

}
var laps=function(){
 if(this.time===0){
      return "no laps"
      }return this.val
}
var stopWatch1=makeStopwatch("Farh")
stopWatch1.start()

