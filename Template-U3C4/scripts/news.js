function appendArticles(article,main) {

    let div=document.createElement("div")

let image=document.createElement("img")
image.src=article.urlToImage   
image.id=("image1") 
let title=document.createElement("p")
title.innerText=article.title;

let description=document.createElement("p")
description.innerText=article.description;

let date=document.createElement("p")
date.innerText=article.publishedAt;

div.append(image,title,description,date)
main.append(div)
    
}
export default appendArticles;