if (localStorage.getItem("custom_start_page") == null){
  page = prompt("Enter a URL for the custom start page")
  localStorage.setItem("custom_start_page", page)
  alert("Custom start page will take effect on refresh")
}
else{ 
   window.axiom.addTab("Start Page","https://google.com")
}
