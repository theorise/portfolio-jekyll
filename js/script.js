function toggleContent() {
    var selector = document.querySelector("[data-design-process]"),
        target = event.target.parentNode;
    selector.classList.toggle('is-visible');
    target.classList.contains(selector) ? target.innerHTML = "<span>View the process</span>  &uparrow;" : target.innerHTML = "<span>Hide the process</span>  &downarrow;"
}
