//step-1 set event handaler
document
    .getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById("phone").value;

        const pin = document.getElementById("pin").value;

        if (phoneNumber === "0187" && pin === "1234") {
            window.location.href = "home.html";
        } else {
            alert("Wrong credentials");
        }
    });

document.getElementById("forgot").addEventListener("click", function () {
    document.getElementById("show-pass").innerText =
        "Phone is:0187\nPin is:1234";
});
