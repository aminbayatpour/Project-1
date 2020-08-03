const navigationButtons = document.querySelectorAll(".navigation-button");
navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.parentElement.classList.toggle("change");
    })
})