/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("openMenu").style.display = "block";
    document.getElementById("closedMenu").style.display = "none";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("openMenu").style.display = "none";
    document.getElementById("closedMenu").style.display = "block";
    } 
    

    function menuSwap(x) {
        x.classList.toggle("change");
    } 