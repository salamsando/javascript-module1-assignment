window.onload = function() {
    alert("Welcome to my website!");
};


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("info").textContent = "You just clicked the button!";
});
