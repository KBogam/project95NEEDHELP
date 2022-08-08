function login()
{
    username = document.getElementById("usernameInput").value;
    username = localStorage.setItem("Username", username);

    window.location="lets_chat_room.html";
}

