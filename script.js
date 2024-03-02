const mainlocation = window.location.href;

if(mainlocation.includes("media")){

const tree=document.querySelector('#media__tree');


const inputfield=document.createElement('input');
inputfield.id="addnamespace";
//inputfield.outerHTML+="<br>";
inputfield.style.width="150px";
inputfield.placeholder="enter namespace";

const addnamespace=document.createElement('button');
//addnamespace.outerHTML="<br>";
addnamespace.innerText="Add";
//addnamespace.href="#";
addnamespace.style.width="50px";
addnamespace.addEventListener('click', function(){

    let url=window.location.href;
    let index=url.indexOf("doku.php");
    index=index+8;
    let remove=url.substring(index);
    let newurl=url.replace(remove,"");
    let location=document.getElementsByClassName("panelHeader")[1].childNodes[1].childNodes[1].innerHTML;
    if(location!="[root]"){
    newurl=newurl+"?id=start&do=media&ns="+location+":"+document.getElementById("addnamespace").value;

    window.location.href=newurl;
    }else{
        alert("Cant create in root!");
    }
});


inputfield.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    let url=window.location.href;
    let index=url.indexOf("doku.php");
    index=index+8;
    let remove=url.substring(index);
    let newurl=url.replace(remove,"");
    let location=document.getElementsByClassName("panelHeader")[1].childNodes[1].childNodes[1].innerHTML;
    if(location!="[root]"){
    newurl=newurl+"?id=start&do=media&ns="+location+":"+document.getElementById("addnamespace").value;

    window.location.href=newurl;
    }else{
        alert("Cant create in root!");
    }
  }
}); 

tree.prepend(addnamespace);
tree.prepend(inputfield);
//inputfield.outerHTML+="<br>";
}
