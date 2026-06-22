function display() {
    let time = new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
}

setInterval(display, 1000);