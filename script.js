const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const rgbValue = document.getElementById('rgb-value');

function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    rgbValue.textContent = `RGB(${r}, ${g}, ${b})`;
    
    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Inicializar el color
updateColor();