document.addEventListener("DOMContentLoaded", () => {
	const modal = document.querySelector(".image-modal");
	const modalImage = modal?.querySelector("img");
	const closeButton = modal?.querySelector(".image-modal-close");
	const tiles = document.querySelectorAll(".gallery-tile");

	if (!modal || !modalImage || !closeButton || tiles.length === 0) {
		return;
	}

	const closeModal = () => {
		modal.classList.remove("is-open");
		modal.setAttribute("aria-hidden", "true");
		modalImage.removeAttribute("src");
		modalImage.removeAttribute("alt");
	};

	tiles.forEach((tile) => {
		tile.addEventListener("click", () => {
			const image = tile.querySelector("img");
			const src = tile.dataset.fullImage || image?.getAttribute("src");

			if (!src) {
				return;
			}

			modalImage.src = src;
			modalImage.alt = image?.alt || "";
			modal.classList.add("is-open");
			modal.setAttribute("aria-hidden", "false");
			closeButton.focus();
		});
	});

	closeButton.addEventListener("click", closeModal);

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("is-open")) {
			closeModal();
		}
	});
});
