//step-1 set event handaler
document
    .getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById("phone").value;

        const pin = document.getElementById("pin").value;

        if (phoneNumber === "01878640770" && pin === "1234") {
            window.location.href = "home.html";
        } else {
            alert("Wrong credentials");
        }
    });
