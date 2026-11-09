let menuButton = document.getElementById('menu-btn');

let navLinks = document.querySelector(".nav-links")


function handleNavButton() {
    // alert("Hey the button was cliked")
    navLinks.classList.toggle("active")

}

menuButton.addEventListener("click", handleNavButton)


let fruist = ["Mango", "Apple", "Guava", "Oranage"]

let fruitDiv = document.querySelector(".fruits")

for (fruit of fruist) {
    let h3 = document.createElement("h3")

    h3.textContent = fruist;

    fruitDiv.appendChild(h3)
}
