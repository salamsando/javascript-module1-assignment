window.onload = function() {
    alert("Welcome to my website!");
};


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("info").textContent = "You just clicked the button!";
});
const name = "Yaslam Salman Sando";
const favouriteColor = "Aqua Green";
const currentYear = new Date().getFullYear();

console.log(`Name: ${name}`);
console.log('Favourite Color: ${favouriteColor}');
console.log('Current Year: ${currentYear}');


