function toggleHide(){
    let hambargericon = document.getElementById("hambargericon");
    let linklist = document.getElementById("linklist");
  if(  linklist.style.display!="none"){
    linklist.style.display = "none";
  }
  else{
    linklist.style.display = "block";
  }
  }