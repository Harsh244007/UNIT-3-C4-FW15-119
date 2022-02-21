function storeSearchterm(term) {
   
      var input_value=document.getElementById("searchbar").value
    
      localStorage.setItem("search_term",input_value)
      window.location.href="/search.html";
    
    


}

export default storeSearchterm