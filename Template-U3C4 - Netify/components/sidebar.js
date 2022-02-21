function sidebar() {
return `<div id="home"><a href="/index.html" id="home1">Home</a></div>
<br>
<input type="text" id="searchbar" Placeholder="Search...">      
</div>
<style>
#container{
    display:flex;
}

#main{
    flex:8; border:1px solid black;
}
#sidebar{
    flex:1.2; border:1px solid black;
}
#home1{
text-decoration:none !important;
color:black;
font-size:20px;
}
#home1:hover{
text-decoration:underline;
color:black;
}
#home1:visited{
    text-decoration:none !important;
    color:black;
    }
</style>`
}
export default sidebar