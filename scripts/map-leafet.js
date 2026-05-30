document.addEventListener("DOMContentLoaded", () => {
	const mapElement = document.getElementById("map");

	if (!mapElement || !window.L) {
		return;
	}

	const coordinates = [51.0121, 17.1725];
	const map = L.map(mapElement, {
		scrollWheelZoom: false,
	}).setView(coordinates, 15);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: "&copy; OpenStreetMap contributors",
		maxZoom: 19,
	}).addTo(map);

	L.marker(coordinates).addTo(map).bindPopup("Kotowicka 2, Groblice");

	setTimeout(() => {
		map.invalidateSize();
	}, 100);
});
