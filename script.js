// script.js

document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const hexColorBox = document.getElementById('hexColorBox');

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);
        const hex = rgbToHex(r, g, b);

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        hexCode.textContent = hex;
        hexColorBox.style.backgroundColor = hex;
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }

    function syncInputs() {
        redInput.value = redRange.value;
        greenInput.value = greenRange.value;
        blueInput.value = blueRange.value;
        updateColor();
    }

    colorPicker.addEventListener('input', function () {
        const color = hexToRgb(colorPicker.value);
        redRange.value = color.r;
        greenRange.value = color.g;
        blueRange.value = color.b;
        syncInputs();
    });

    redRange.addEventListener('input', syncInputs);
    greenRange.addEventListener('input', syncInputs);
    blueRange.addEventListener('input', syncInputs);

    redInput.addEventListener('input', function () {
        redRange.value = redInput.value;
        syncInputs();
    });
    greenInput.addEventListener('input', function () {
        greenRange.value = greenInput.value;
        syncInputs();
    });
    blueInput.addEventListener('input', function () {
        blueRange.value =blueInput.value;
        syncInputs();
    });

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    // Inicializar la vista con el color negro
    updateColor();
});
