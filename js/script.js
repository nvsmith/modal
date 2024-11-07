var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

// Set initial state of modal
let modalOpen = false;

// Close and Open Modal Functions
var closeModal = function () {
    modal.classList.remove("show-modal");
    button.innerText = "Any other questions?";
    modalOpen = false;
};

var openModal = function () {
    modal.classList.add("show-modal");
    button.innerText = "Close Modal";
    modalOpen = true;
};

// Esc and Click Events
button.addEventListener("click", function () {
    if (!modalOpen) {
        openModal();
    } else {
        closeModal();
    }
});

modalX.addEventListener("click", function () {
    closeModal();
});

document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    if (e.key === "Escape" && modal.classList.contains("show-modal")) {
        closeModal();
    }
});
