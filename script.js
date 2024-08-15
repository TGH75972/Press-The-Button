function pressButton(choice) {
    const result = document.getElementById("result");
    switch (choice) {
        case 1:
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
            break;
        case 2:
            result.textContent = "Why did the scarecrow win an award? Because he was outstanding in his field!";
            break;
        case 3:
            window.open("https://www.google.com/search?q=sus", "_blank");
            break;
        case 4:
            window.alert("You've unlocked a secret message: 'Curiosity didn't kill the cat, it made it wiser!'");
            break;
        case 5:
            document.body.style.backgroundColor = "#ff4c4c";
            result.textContent = "Face the light mode!";
            break;
        default:
            result.textContent = "Invalid choice!";
            break;
    }
}
