/* ==========================================
   WORLD EXPLORER
   Vanilla JavaScript
   No backend
   No external library
========================================== */


/* ==========================================
   COUNTRY DATA
========================================== */

const countryData = {

    Pakistan: {
        capital: "Islamabad",
        continent: "Asia",
        population: "241.5 Million",
        currency: "Pakistani Rupee (PKR)",
        code: "PK",
        flag: "🇵🇰"
    },

    India: {
        capital: "New Delhi",
        continent: "Asia",
        population: "1.43 Billion",
        currency: "Indian Rupee (INR)",
        code: "IN",
        flag: "🇮🇳"
    },

    China: {
        capital: "Beijing",
        continent: "Asia",
        population: "1.41 Billion",
        currency: "Chinese Yuan (CNY)",
        code: "CN",
        flag: "🇨🇳"
    },

    Japan: {
        capital: "Tokyo",
        continent: "Asia",
        population: "124.5 Million",
        currency: "Japanese Yen (JPY)",
        code: "JP",
        flag: "🇯🇵"
    },

    "Saudi Arabia": {
        capital: "Riyadh",
        continent: "Asia",
        population: "36.9 Million",
        currency: "Saudi Riyal (SAR)",
        code: "SA",
        flag: "🇸🇦"
    },

    Iran: {
        capital: "Tehran",
        continent: "Asia",
        population: "89.2 Million",
        currency: "Iranian Rial (IRR)",
        code: "IR",
        flag: "🇮🇷"
    },

    Turkey: {
        capital: "Ankara",
        continent: "Asia / Europe",
        population: "85.3 Million",
        currency: "Turkish Lira (TRY)",
        code: "TR",
        flag: "🇹🇷"
    },

    Russia: {
        capital: "Moscow",
        continent: "Europe / Asia",
        population: "143.4 Million",
        currency: "Russian Ruble (RUB)",
        code: "RU",
        flag: "🇷🇺"
    },

    Germany: {
        capital: "Berlin",
        continent: "Europe",
        population: "84.5 Million",
        currency: "Euro (EUR)",
        code: "DE",
        flag: "🇩🇪"
    },

    France: {
        capital: "Paris",
        continent: "Europe",
        population: "68.2 Million",
        currency: "Euro (EUR)",
        code: "FR",
        flag: "🇫🇷"
    },

    Italy: {
        capital: "Rome",
        continent: "Europe",
        population: "58.9 Million",
        currency: "Euro (EUR)",
        code: "IT",
        flag: "🇮🇹"
    },

    Spain: {
        capital: "Madrid",
        continent: "Europe",
        population: "48.4 Million",
        currency: "Euro (EUR)",
        code: "ES",
        flag: "🇪🇸"
    },

    "United Kingdom": {
        capital: "London",
        continent: "Europe",
        population: "68.3 Million",
        currency: "Pound Sterling (GBP)",
        code: "GB",
        flag: "🇬🇧"
    },

    "United States": {
        capital: "Washington, D.C.",
        continent: "North America",
        population: "335.9 Million",
        currency: "US Dollar (USD)",
        code: "US",
        flag: "🇺🇸"
    },

    Canada: {
        capital: "Ottawa",
        continent: "North America",
        population: "40.1 Million",
        currency: "Canadian Dollar (CAD)",
        code: "CA",
        flag: "🇨🇦"
    },

    Mexico: {
        capital: "Mexico City",
        continent: "North America",
        population: "128.5 Million",
        currency: "Mexican Peso (MXN)",
        code: "MX",
        flag: "🇲🇽"
    },

    Brazil: {
        capital: "Brasília",
        continent: "South America",
        population: "216.4 Million",
        currency: "Brazilian Real (BRL)",
        code: "BR",
        flag: "🇧🇷"
    },

    Argentina: {
        capital: "Buenos Aires",
        continent: "South America",
        population: "46 Million",
        currency: "Argentine Peso (ARS)",
        code: "AR",
        flag: "🇦🇷"
    },

    Egypt: {
        capital: "Cairo",
        continent: "Africa",
        population: "112.7 Million",
        currency: "Egyptian Pound (EGP)",
        code: "EG",
        flag: "🇪🇬"
    },

    Nigeria: {
        capital: "Abuja",
        continent: "Africa",
        population: "223.8 Million",
        currency: "Nigerian Naira (NGN)",
        code: "NG",
        flag: "🇳🇬"
    },

    "South Africa": {
        capital: "Pretoria",
        continent: "Africa",
        population: "63.2 Million",
        currency: "South African Rand (ZAR)",
        code: "ZA",
        flag: "🇿🇦"
    },

    Australia: {
        capital: "Canberra",
        continent: "Oceania",
        population: "26.6 Million",
        currency: "Australian Dollar (AUD)",
        code: "AU",
        flag: "🇦🇺"
    }

};


/* ==========================================
   SVG COUNTRY SHAPES
========================================== */

const countryShapes = [

    [
        "Canada",
        "M70 65 L150 45 L220 65 L245 95 L220 125 L165 110 L120 130 L80 110 Z"
    ],

    [
        "United States",
        "M90 135 L145 125 L205 140 L225 165 L205 190 L155 185 L115 195 L90 170 Z"
    ],

    [
        "Mexico",
        "M90 190 L120 185 L150 205 L170 230 L150 250 L120 235 L100 215 Z"
    ],

    [
        "Brazil",
        "M330 260 L375 240 L425 250 L465 285 L455 330 L425 365 L375 350 L345 315 Z"
    ],

    [
        "Argentina",
        "M350 350 L375 350 L395 385 L385 440 L360 455 L342 410 Z"
    ],

    [
        "United Kingdom",
        "M460 105 L472 90 L483 103 L477 123 L465 128 Z"
    ],

    [
        "France",
        "M455 145 L490 138 L510 155 L497 180 L465 175 L450 160 Z"
    ],

    [
        "Germany",
        "M505 125 L535 120 L550 145 L535 165 L505 160 L495 143 Z"
    ],

    [
        "Italy",
        "M510 180 L535 175 L545 195 L530 220 L515 205 Z"
    ],

    [
        "Spain",
        "M445 180 L480 178 L500 195 L480 210 L450 205 Z"
    ],

    [
        "Russia",
        "M535 75 L610 50 L700 55 L790 75 L860 100 L845 145 L770 155 L700 135 L640 145 L590 125 L540 115 Z"
    ],

    [
        "Turkey",
        "M590 185 L635 180 L660 195 L640 215 L600 212 Z"
    ],

    [
        "Egypt",
        "M535 235 L565 225 L585 245 L575 275 L540 270 Z"
    ],

    [
        "Nigeria",
        "M475 285 L510 280 L525 305 L510 330 L480 325 Z"
    ],

    [
        "South Africa",
        "M500 360 L545 350 L575 375 L555 415 L515 420 L490 395 Z"
    ],

    [
        "Saudi Arabia",
        "M585 230 L630 220 L660 250 L645 285 L600 275 L580 250 Z"
    ],

    [
        "Iran",
        "M635 205 L680 190 L710 215 L690 250 L650 245 Z"
    ],

    [
        "Pakistan",
        "M685 225 L715 215 L735 240 L720 270 L690 260 Z"
    ],

    [
        "India",
        "M720 245 L750 225 L775 250 L760 300 L730 325 L710 290 Z"
    ],

    [
        "China",
        "M720 150 L790 135 L845 165 L850 220 L805 245 L760 230 L735 200 Z"
    ],

    [
        "Japan",
        "M865 175 L880 165 L890 190 L880 215 L865 205 Z"
    ],

    [
        "Australia",
        "M760 365 L820 345 L875 365 L895 410 L860 445 L800 438 L760 405 Z"
    ]

];


/* ==========================================
   DOM ELEMENTS
========================================== */

const countriesContainer =
    document.getElementById("countries");

const tooltip =
    document.getElementById("tooltip");

const mapContainer =
    document.getElementById("mapContainer");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


/* ==========================================
   MAP STATE
========================================== */

let selectedCountry = null;

let scale = 1;

let panX = 0;

let panY = 0;

let dragging = false;

let startX = 0;

let startY = 0;

let startPanX = 0;

let startPanY = 0;


/* ==========================================
   CREATE MAP
========================================== */

function createMap() {

    countryShapes.forEach(function(country) {

        const name = country[0];

        const pathData = country[1];

        const path =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );

        path.setAttribute(
            "d",
            pathData
        );

        path.setAttribute(
            "class",
            "country"
        );

        path.dataset.country = name;

        path.setAttribute(
            "aria-label",
            name
        );


        /* CLICK */

        path.addEventListener(
            "click",
            function() {

                selectCountry(name);

            }
        );


        /* HOVER */

        path.addEventListener(
            "mouseenter",
            function(event) {

                showTooltip(
                    name,
                    event
                );

            }
        );


        path.addEventListener(
            "mousemove",
            function(event) {

                moveTooltip(event);

            }
        );


        path.addEventListener(
            "mouseleave",
            function() {

                hideTooltip();

            }
        );


        countriesContainer.appendChild(path);

    });

}


/* ==========================================
   SELECT COUNTRY
========================================== */

function selectCountry(name) {

    const data = countryData[name];

    if (!data) {

        return;

    }


    selectedCountry = name;


    document
        .querySelectorAll(".country.selected")
        .forEach(function(element) {

            element.classList.remove(
                "selected"
            );

        });


    const selectedElement =
        Array.from(
            document.querySelectorAll(".country")
        ).find(function(element) {

            return element.dataset.country === name;

        });


    if (selectedElement) {

        selectedElement.classList.add(
            "selected"
        );

    }


    document.getElementById(
        "countryName"
    ).textContent = name;


    document.getElementById(
        "countryFlag"
    ).textContent = data.flag;


    document.getElementById(
        "capital"
    ).textContent = data.capital;


    document.getElementById(
        "continent"
    ).textContent = data.continent;


    document.getElementById(
        "population"
    ).textContent = data.population;


    document.getElementById(
        "currency"
    ).textContent = data.currency;


    document.getElementById(
        "countryCode"
    ).textContent = data.code;


    searchInput.value = name;

    searchResults.classList.remove(
        "show"
    );

}


/* ==========================================
   TOOLTIP
========================================== */

function showTooltip(
    name,
    event
) {

    tooltip.textContent = name;

    tooltip.classList.add(
        "show"
    );

    if (event) {

        moveTooltip(event);

    }

}


function moveTooltip(event) {

    const rect =
        mapContainer.getBoundingClientRect();

    tooltip.style.left =
        (event.clientX - rect.left + 10) + "px";

    tooltip.style.top =
        (event.clientY - rect.top + 10) + "px";

}


function hideTooltip() {

    tooltip.classList.remove(
        "show"
    );

}


/* ==========================================
   SEARCH
========================================== */

function searchCountry() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    searchResults.innerHTML = "";


    if (!query) {

        searchResults.classList.remove(
            "show"
        );

        return;

    }


    const matches =
        Object.keys(countryData)
            .filter(function(country) {

                return country
                    .toLowerCase()
                    .includes(query);

            })
            .slice(0, 8);


    matches.forEach(function(country) {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "search-result";

        button.textContent =
            country;

        button.type =
            "button";


        button.addEventListener(
            "click",
            function() {

                selectCountry(country);

            }
        );


        searchResults.appendChild(
            button
        );

    });


    if (matches.length > 0) {

        searchResults.classList.add(
            "show"
        );

    } else {

        searchResults.classList.remove(
            "show"
        );

    }


    /* EXACT MATCH */

    const exactMatch =
        matches.find(function(country) {

            return country.toLowerCase() === query;

        });


    if (exactMatch) {

        selectCountry(exactMatch);

    }

}


/* ==========================================
   ZOOM
========================================== */

function updateMapTransform() {

    countriesContainer.setAttribute(
        "transform",
        `translate(${panX} ${panY}) scale(${scale})`
    );

}


function zoomMap(amount) {

    scale += amount;


    if (scale < 1) {

        scale = 1;

    }


    if (scale > 4) {

        scale = 4;

    }


    updateMapTransform();

}


/* ==========================================
   RESET
========================================== */

function resetMap() {

    scale = 1;

    panX = 0;

    panY = 0;

    selectedCountry = null;


    countriesContainer.removeAttribute(
        "transform"
    );


    document
        .querySelectorAll(".country.selected")
        .forEach(function(element) {

            element.classList.remove(
                "selected"
            );

        });


    document.getElementById(
        "countryName"
    ).textContent =
        "No country selected";


    document.getElementById(
        "countryFlag"
    ).textContent =
        "🌐";


    document.getElementById(
        "capital"
    ).textContent =
        "—";


    document.getElementById(
        "continent"
    ).textContent =
        "—";


    document.getElementById(
        "population"
    ).textContent =
        "—";


    document.getElementById(
        "currency"
    ).textContent =
        "—";


    document.getElementById(
        "countryCode"
    ).textContent =
        "—";


    searchInput.value = "";

    searchResults.classList.remove(
        "show"
    );

}


/* ==========================================
   DRAG / PAN
========================================== */

mapContainer.addEventListener(
    "pointerdown",
    function(event) {

        if (
            event.target.classList.contains(
                "country"
            )
        ) {

            return;

        }


        dragging = true;

        mapContainer.classList.add(
            "dragging"
        );


        startX = event.clientX;

        startY = event.clientY;

        startPanX = panX;

        startPanY = panY;


        mapContainer.setPointerCapture(
            event.pointerId
        );

    }
);


mapContainer.addEventListener(
    "pointermove",
    function(event) {

        if (!dragging) {

            return;

        }


        const rect =
            mapContainer.getBoundingClientRect();


        const dx =
            (event.clientX - startX)
            *
            (1000 / rect.width);


        const dy =
            (event.clientY - startY)
            *
            (500 / rect.height);


        panX =
            startPanX + dx;


        panY =
            startPanY + dy;


        updateMapTransform();

    }
);


function stopDragging(event) {

    dragging = false;

    mapContainer.classList.remove(
        "dragging"
    );


    try {

        mapContainer.releasePointerCapture(
            event.pointerId
        );

    } catch (error) {

        /* Ignore pointer release errors */

    }

}


mapContainer.addEventListener(
    "pointerup",
    stopDragging
);


mapContainer.addEventListener(
    "pointercancel",
    stopDragging
);


/* ==========================================
   MOUSE WHEEL ZOOM
========================================== */

mapContainer.addEventListener(
    "wheel",
    function(event) {

        event.preventDefault();


        if (event.deltaY < 0) {

            zoomMap(0.25);

        } else {

            zoomMap(-0.25);

        }

    },
    {
        passive: false
    }
);


/* ==========================================
   BUTTONS
========================================== */

document
    .getElementById("zoomIn")
    .addEventListener(
        "click",
        function() {

            zoomMap(0.25);

        }
    );


document
    .getElementById("zoomOut")
    .addEventListener(
        "click",
        function() {

            zoomMap(-0.25);

        }
    );


document
    .getElementById("resetMap")
    .addEventListener(
        "click",
        resetMap
    );


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        searchCountry
    );


searchInput.addEventListener(
    "input",
    searchCountry
);


searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchCountry();

        }


        if (event.key === "Escape") {

            searchResults.classList.remove(
                "show"
            );

        }

    }
);


/* ==========================================
   CLOSE SEARCH
========================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.closest(
                ".search-box"
            )
        ) {

            searchResults.classList.remove(
                "show"
            );

        }

    }
);


/* ==========================================
   START APPLICATION
========================================== */

createMap();