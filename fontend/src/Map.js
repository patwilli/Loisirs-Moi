import React, { useEffect } from "react";
import L from "leaflet";

const Map = ({ loisirs }) => {
    useEffect(() => {
        const map = L.map("map").setView([48.117266, -1.6777926], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        loisirs.forEach(loisir => {
            L.marker([loisir.latitude, loisir.longitude]).addTo(map)
                .bindPopup(`${loisir.nom}`);
        });
    }, [loisirs]);

    return <div id="map" style={{ height: "500px" }}></div>;
};

export default Map;
