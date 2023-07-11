//your JS code here. If required.
var a = prompt("Enter a string");
    let result = [];
    for(let i=0;i<a.length;i++){
      let count=0;
      for(let j=0;j<a.length;j++){
        if(a.charAt(i) === a.charAt(j)){
          count++;
        }
      }
      if(count === 1){
        result.push(a.charAt(i));
      }
    }
    if(result.length === 0){
      alert("null");
    }
    else{
      alert(result[0]);
    }
