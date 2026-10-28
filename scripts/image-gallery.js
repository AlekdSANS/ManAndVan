document.addEventListener("DOMContentLoaded", () => {
	const modal = document.querySelector(".image-modal");
	const modalImage = modal?.querySelector("img");
	const closeButton = modal?.querySelector(".image-modal-close");
	const previousButton = modal?.querySelector(".image-modal-prev");
	const nextButton = modal?.querySelector(".image-modal-next");
	const caption = modal?.querySelector(".image-modal-caption");
	const counter = modal?.querySelector(".image-modal-counter");
	const photos = Array.from(document.querySelectorAll(".photo-grid .gallery-tile"));
	if (!modal || !modalImage || !closeButton || !photos.length) return;

	let currentIndex = 0;
	let opener;
	let touchStart;

	const showPhoto = (index) => {
		currentIndex = (index + photos.length) % photos.length;
		const tile = photos[currentIndex];
		modalImage.src = tile.dataset.fullImage;
		modalImage.alt = tile.querySelector("img").alt;
		caption.textContent = tile.querySelector(".photo-caption").textContent;
		counter.textContent = `${currentIndex + 1} / ${photos.length}`;
	};

	document.querySelectorAll(".gallery-tile").forEach((tile) => {
		tile.addEventListener("click", () => {
			const index = photos.findIndex((photo) => photo.dataset.photo === tile.dataset.photo);
			if (index < 0) return;
			opener = tile;
			showPhoto(index);
			modal.showModal();
			closeButton.focus();
		});
	});

	closeButton.addEventListener("click", () => modal.close());
	previousButton.addEventListener("click", () => showPhoto(currentIndex - 1));
	nextButton.addEventListener("click", () => showPhoto(currentIndex + 1));
	modal.addEventListener("click", (event) => {
		if (event.target === modal) modal.close();
	});
	modal.addEventListener("keydown", (event) => {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			event.preventDefault();
			showPhoto(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
		}
	});
	modal.addEventListener("touchstart", (event) => {
		const touch = event.changedTouches[0];
		touchStart = { x: touch.clientX, y: touch.clientY };
	}, { passive: true });
	modal.addEventListener("touchend", (event) => {
		if (!touchStart) return;
		const touch = event.changedTouches[0];
		const deltaX = touch.clientX - touchStart.x;
		const deltaY = touch.clientY - touchStart.y;
		touchStart = null;
		if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
			showPhoto(currentIndex + (deltaX < 0 ? 1 : -1));
		}
	}, { passive: true });
	modal.addEventListener("close", () => {
		modalImage.removeAttribute("src");
		touchStart = null;
		opener?.focus({ preventScroll: true });
	});
	document.addEventListener("languagechange", () => {
		if (modal.open) showPhoto(currentIndex);
	});
});
