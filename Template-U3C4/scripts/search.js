function storeSearchterm(term) {
   
      var input_value=document.getElementById("searchbar").value
    
      localStorage.setItem("search_term",input_value)
      window.location.href="/Template-U3C4/search.html";
    
    


}

export default storeSearchterm