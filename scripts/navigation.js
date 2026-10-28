document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.querySelector(".navbar");
	const toggle = document.querySelector(".nav-toggle-button");
	const mobile = window.matchMedia("(max-width: 980px)");
	if (!navbar || !toggle) return;

	const setOpen = (open) => {
		navbar.classList.toggle("is-menu-open", open);
		toggle.setAttribute("aria-expanded", String(open));
		toggle.setAttribute("aria-label", open ? toggle.dataset.closeLabel : toggle.dataset.openLabel);
	};
	toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
	navbar.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", () => setOpen(false));
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
			setOpen(false);
			toggle.focus();
		}
	});
	document.addEventListener("click", (event) => {
		if (!navbar.contains(event.target)) setOpen(false);
	});
	navbar.addEventListener("focusout", (event) => {
		if (event.relatedTarget && !navbar.contains(event.relatedTarget)) setOpen(false);
	});
	mobile.addEventListener("change", () => setOpen(false));
});
