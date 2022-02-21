async function apiCall(url) {
try{
    let res=await fetch(url)
    let data=await res.json()
console.log(data)
    return data
}
catch(err){
    console.log("error1")
}
}


function appendArticles(articles, main) {
articles.forEach((element)=>{
    console.log(element)
let div=document.createElement("div")
div.setAttribute("id","div")

let image=document.createElement("img")
image.src=element.urlToImage   
image.id=("image") 
let title=document.createElement("p")
title.innerText=element.title;

let description=document.createElement("p")
description.innerText=element.description;

let date=document.createElement("p")
date.innerText=element.publishedAt;
div.onclick=()=>{
    localStorage.setItem("article",JSON.stringify(element))
    window.location.href="/Template-U3C4/news.html"
}
div.append(image,title,description,date)
main.append(div)
})

}

export { apiCall, appendArticles }