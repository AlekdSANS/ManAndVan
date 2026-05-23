document.addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector(".back-to-top");
	const startSection = document.querySelector(".hero");

	if (!button || !startSection) {
		return;
	}

	const toggleButton = () => {
		const startBottom = startSection.offsetTop + startSection.offsetHeight;
		button.classList.toggle("is-visible", window.scrollY > startBottom - 80);
	};

	toggleButton();
	window.addEventListener("scroll", toggleButton, { passive: true });
	window.addEventListener("resize", toggleButton);
});
