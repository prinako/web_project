//search element
function search(s){

    if (s.matches){

        document.getElementById("search-contaniner").innerHTML ="<span><input type='text' placeholder='Search here'/><button class='search-btn'><i class='fas fa-search'</button></span>"
        document.getElementById("search-inHeader").innerHTML =""
    }else{
        document.getElementById("search-inHeader").innerHTML ="<span><input type='text' placeholder='Search here'/><button class='search-btn'><i class='fas fa-search'</button></span>"
        document.getElementById("search-contaniner").innerHTML =""

    }
}

var s = window.matchMedia("(max-width: 700px)")
search(s)
s.addListener(search);
console.log(s);
