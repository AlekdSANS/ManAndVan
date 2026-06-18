document.addEventListener("DOMContentLoaded", () => {
	const mapElement = document.getElementById("map");

	if (!mapElement || !window.L) {
		return;
	}

	const coordinates = [51.013144, 17.1752928];
	const map = L.map(mapElement, {
		scrollWheelZoom: false,
	}).setView(coordinates, 15);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: "&copy; OpenStreetMap contributors",
		maxZoom: 19,
	}).addTo(map);

	L.marker(coordinates).addTo(map).bindPopup("Kotowicka 4, 55-010 Groblice");

	setTimeout(() => {
		map.invalidateSize();
	}, 100);
});
