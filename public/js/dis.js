const yearElement = document.getElementById('current-year');
yearElement.textContent = new Date().getFullYear();

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode === 85) { 
        event.preventDefault(); 
    }

    if (event.keyCode === 123) { 
        event.preventDefault(); 
    }
    
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { 
        event.preventDefault(); 
    }
});

    document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
});
