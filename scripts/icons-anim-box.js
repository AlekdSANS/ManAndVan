function tintLottieColors(value, color) {
	if (Array.isArray(value)) {
		return value.map((item) => tintLottieColors(item, color));
	}

	if (value && typeof value === "object") {
		if (
			value.a === 0 &&
			Array.isArray(value.k) &&
			value.k.length === 4 &&
			value.k.every((item) => typeof item === "number")
		) {
			return { ...value, k: color };
		}

		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [
				key,
				tintLottieColors(item, color),
			]),
		);
	}

	return value;
}

document.addEventListener("DOMContentLoaded", async () => {
	const el = document.getElementById("lottie-icon-box");
	const trigger = el?.closest("article");

	if (!el || !trigger || !window.lottie) {
		return;
	}

	const response = await fetch("scripts/icons8-box.json");
	const animationData = tintLottieColors(
		await response.json(),
		[0.9647, 0.7137, 0.0431, 1],
	);

	const boxAnimation = lottie.loadAnimation({
		container: el,
		renderer: "svg",
		loop: false,
		autoplay: false,
		animationData,
	});

	boxAnimation.addEventListener("DOMLoaded", () => {
		const svg = el.querySelector("svg");

		if (svg) {
			svg.style.width = "28px";
			svg.style.height = "28px";
		}

		boxAnimation.goToAndStop(0, true);
	});

	trigger.addEventListener("mouseenter", () => {
		boxAnimation.playSegments([0, 16], true);
	});

	trigger.addEventListener("mouseleave", () => {
		boxAnimation.playSegments([16, 0], true);
	});
});
