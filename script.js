var numberMessages = document.getElementsByClassName('avatar').length;

document.getElementById("count").textContent = numberMessages;

for (var i = 0 ; i < document.getElementsByClassName("trash").length ; i++){
  document.getElementsByClassName("trash")[i].addEventListener("click", function(){
    this.parentNode.remove();
    document.getElementById("count").textContent = document.getElementsByClassName('avatar').length;
    }
  )
}
