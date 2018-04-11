$(document).ready(function() {
    //Sidenav initialisation
    $('.sidenav').sidenav();
    //Dropdown initialisation
    $(".dropdown-trigger").dropdown();
    //Collapsible initialization
    $('.collapsible').collapsible();
})

//Change icon for collapsible header 'Information'
/*function changeIcon() {
    el = document.getElementById("info-collapsible-list");
    if(el.textContent === "arrow_drop_down") {
        el.innerHTML = "arrow_drop_up";
    } else {
        el.innerHTML = "arrow_drop_down";
    }
}
*/