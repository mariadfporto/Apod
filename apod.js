var key = "LcdJlqiYFrwyqSyRNjqfdMCks4SHWDrfyl6gMII5";
//Função utilizada para chamar a NASA
function callNasa() {

    let xhttp = new XMLHttpRequest();
    let url = "https://api.nasa.gov/planetary/apod?api_key="+key;
    
    let img = document.getElementById("img");
    var date =document.getElementById("date");
    
    url += "&date=" + date.value;
    console.log(url);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        img.src = JSON.parse(this.responseText).url;
        img.alt = JSON.parse(this.responseText).title
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  document.getElementById("submit").addEventListener("click",callNasa,false);