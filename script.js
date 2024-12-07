document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const isClickInside =
    navbar.contains(event.target) ||
    event.target.classList.contains("navbar-toggler");

  // Close the navbar if clicked outside or on a link
  if (!isClickInside && navbar.classList.contains("show")) {
    const bootstrapNavbar = new bootstrap.Collapse(navbar);
    bootstrapNavbar.hide();
  }

  // Close the navbar if a nav-link is clicked
  if (
    event.target.classList.contains("nav-link") &&
    navbar.classList.contains("show")
  ) {
    const bootstrapNavbar = new bootstrap.Collapse(navbar);
    bootstrapNavbar.hide();
  }
});
