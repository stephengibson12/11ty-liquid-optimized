/**
 * Manages the active state for navigation links based on the current URL.
 */
export function initializeActiveNav() {
  document.addEventListener("DOMContentLoaded", function () {
    const currentPagePathname = window.location.pathname;

    const navLinks = document.querySelectorAll(".header-links a");

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      const listItem = link.closest("li");

      // IMPORTANT: Normalize paths for comparison
      // Remove trailing slashes for consistency, except for the root '/'
      const normalizedCurrentPath =
        currentPagePathname === "/"
          ? "/"
          : currentPagePathname.replace(/\/$/, "");
      const normalizedLinkHref =
        linkHref === "/" ? "/" : linkHref.replace(/\/$/, "");

      // Check if the link's href matches the current page's pathname
      if (normalizedLinkHref === normalizedCurrentPath) {
        // Remove 'active' from any other currently active list item
        const currentActive = document.querySelector(".header-links li.active");
        if (currentActive && currentActive !== listItem) {
          currentActive.classList.remove("active");
        }
        // Add the 'active' class to the parent <li> of the matched link
        if (listItem) {
          listItem.classList.add("active");
        }
      } else {
        // If it doesn't match, ensure the 'active' class is removed
        if (listItem && listItem.classList.contains("active")) {
          listItem.classList.remove("active");
        }
      }
    });
  });
}
