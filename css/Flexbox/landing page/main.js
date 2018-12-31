
function toggleDropdown{
    var navbarToggle = $("#navbarToggle");
    if(navbarToggle.className === "topnav"){
        navbarToggle.className += " responsive";
    }else{
        navbarToggle.className = "topnav";
    }
}