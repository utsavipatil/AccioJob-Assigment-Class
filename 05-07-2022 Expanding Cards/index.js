const allPanels = document.querySelectorAll(".panel");
 allPanels.forEach((panel) => {
    panel.addEventListener("click" , () => {
        removeActiveClass(); //Remove last active
        panel.classList.add("active"); //Update active to current pannel
        panel.children[0].style.display = "block";
    });
});

const removeActiveClass = () => {
 allPanels.forEach((panel) => {
        panel.children[0].style.display = "none";
        panel.classList.remove("active");
    });
};