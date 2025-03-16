document.addEventListener("DOMContentLoaded", function () {
    const approveButtons = document.querySelectorAll(".approve-btn");
    const rejectButtons = document.querySelectorAll(".reject-btn");

    approveButtons.forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            row.querySelector(".pending").textContent = "Approved";
            row.querySelector(".pending").style.color = "green";
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            row.querySelector(".pending").textContent = "Rejected";
            row.querySelector(".pending").style.color = "red";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const approveButtons = document.querySelectorAll(".approve-btn");
    const rejectButtons = document.querySelectorAll(".reject-btn");

    approveButtons.forEach(button => {
        button.addEventListener("click", function () {
            const statusCell = this.parentElement.previousElementSibling;
            statusCell.innerHTML = "<span style='color:green; font-weight:bold;'>Approved</span>";
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const statusCell = this.parentElement.previousElementSibling;
            statusCell.innerHTML = "<span style='color:red; font-weight:bold;'>Rejected</span>";
        });
    });
});

