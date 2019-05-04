var circle = {
    radius: 1,
    Circumference: function () {
       return this.radius * 2 * Math.PI;
    },
    Area: function () {
        return this.radius * this.radius * Math.PI;
    },
    Volume: function () {
        return this.radius * this.radius * this.radius * 4/3 * Math.PI;
    },
};

var submit = document.getElementById("submit");

function testNum() {
    var Elem = document.getElementById("circle").value;
    if (Elem <= 0) {
        document.getElementById("results").innerHTML = "Type a number greater than 0";
        return false;} else {
        circle.radius = Number(document.getElementById("circle").value);
        var results = "<p>" + "The calculation for radius of "+ circle.radius + " is: " + "</p>" + "<p>" + "Circumference: "  + circle.Circumference() + "</p>" + "<p>" + "Area: " + circle.Area() + "</p>" + "<p>" + "Volume: " + circle.Volume() + "</p>";
        document.getElementById("results").innerHTML = results;
        return true;
    }
};

submit.addEventListener('click', testNum)