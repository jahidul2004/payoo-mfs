document
    .getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const pin = document.getElementById("pin").value;

        if (pin !== "1234") {
            alert("Wrong credentials");
        } else {
            const amount = parseInt(document.getElementById("amount").value);

            let currentMoney = parseInt(
                document.getElementById("money-amount").innerText
            );

            let newBalance = currentMoney + amount;

            document.getElementById("money-amount").innerText = newBalance;
        }
        document.getElementById("add-out-form").reset();
    });

document.getElementById("cash-out").addEventListener("click", function (event) {
    event.preventDefault();

    const pin = document.getElementById("pin").value;

    if (pin !== "1234") {
        alert("Wrong credentials");
    } else {
        const amount = parseInt(document.getElementById("amount").value);

        let currentMoney = parseInt(
            document.getElementById("money-amount").innerText
        );

        if (currentMoney < amount) {
            alert("Not enough balance");
        } else {
            let newBalance = currentMoney - amount;

            document.getElementById("money-amount").innerText = newBalance;
        }
    }
    document.getElementById("add-out-form").reset();
});
