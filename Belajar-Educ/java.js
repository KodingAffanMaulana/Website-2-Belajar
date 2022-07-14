var h1 = document.querySelector('h1');
h1.innerHTML = "We just modified HTML using Javascript!";


var h2 = document.createElement('h1');
h1.innerHTML = "A new HTML element!";

var ul = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML = "A first list element!";
var li2 = document.createElement('li');
li2.innerHTML = "A second list element!";
var li3 = document.createElement('li');
li3.innerHTML = "A third list element!";

var images = [
    "/udata/DErqVR5q0Pv/longexposurewaterfall1.jpg",
    "/udata/MLE2D8Lzv6X/route66.jpg",
    "/udata/nPaBd6Mq1Ly/archesdrive.jpg",
    "/udata/1krmXeav6GB/army2.jpg",
    "/udata/1klaZD0vxjz/redwoodupwards2.jpg",
    "/udata/4WQvGrR56Qq/solduc2.jpg",
    "/udata/1koZJB2vq8k/truck4scale.jpg"
];

var currentIndex = 0;

var img = document.querySelector('img');
var next = document.getElementById('next-button');
var prev = document.getElementById('prev-button');

var incrementIndex = function () {
    //console.log(currentIndex);
    currentIndex = currentIndex + 1;
    if (currentIndex > images.length - 1) {
        currentIndex = 0
    }
    return currentIndex;
}

var decrementIndex = function () {
    //console.log(currentIndex);
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    return currentIndex;
}
next.onclick = function () {
    img.setAttribute('src', images[incrementIndex(currentIndex)]);
}

prev.onclick = function () {
    img.setAttribute('src', images[decrementIndex(currentIndex)]);
}