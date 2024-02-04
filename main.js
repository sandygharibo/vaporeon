function nextPage() {
    window.location.href = "yes.html";
}

/*function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}*/

function moveButton() {
    var button = document.getElementById('noButton');
    
    // Calculate maximum x and y coordinates to keep the button fully visible
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;

    // Calculate random coordinates within the visible area
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    // Ensure the button stays within the window bounds
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}