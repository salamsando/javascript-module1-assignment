window.onload = function() {
    alert("Welcome to my website!");
};


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("info").textContent = "You just clicked the button!";
});
var name = "Yaslam Salman Sando";
var favouriteColor = "Aqua Green";
const currentYear = new Date().getFullYear();

console.log(`Name: ${name}`);
console.log('Favourite Color: ${favouriteColor}');
console.log('Current Year: ${currentYear}');

