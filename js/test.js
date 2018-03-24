function getData(quantity) {
  var numbers = '';
  var possibleText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var result = [];
  for(var k = 0; k < quantity; k++) {
    var text = "NAME";
    for(var i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.round(Math.random() * possibleText.length));
    }
    numbers = Math.floor(Math.random() * 1000);
    result.push({name: text, id: numbers});
  }
  return result;
}

const response = getData(100);

function isNumeric(n) { return !isNaN(parseFloat(n)) && isFinite(n); }

function getName() {
  var names = [];

  for(var i = 0; i < response.length; i++) {
    for(var key in response[i]) {
      if(!isNumeric(response[i][key])) {
        names.push(response[i][key]);
      }
    }
  }

  var dv = document.createElement("div");
  var parent = document.getElementsByClassName("col-xs-1")[0];
  var count = 0;

  do {
    parent.appendChild(dv);
    dv.className = 'row';
    dv = document.createElement("div")
    count++;
  } while(count < names.length);

  for(var i = 0; i < names.length; i++) {
    document.getElementsByClassName("row")[i].innerHTML = names[i];
  }
}

function showID() {
  var strName = document.getElementsByClassName("row");

  for(let i = 0; i < response.length; i++) {
    strName[i].addEventListener("click", function(){
      var name = strName[i].firstChild.nodeValue;
      if(name == response[i].name) alert(response[i].id);
    });
  }
}
