console.log('Welcome to Gilmartins')


let x;

var startworker = function {
    if(typeof(x) == "undefined") {
        x = new Worker("Main.js");
      }
      x.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;
      };

}

var stopworker = function {
    x.terminate();
    x = undefined;


}