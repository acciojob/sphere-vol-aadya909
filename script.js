function volume_sphere(event) {
    event.preventDefault(); // Prevent form from submitting

    let radiusInput = document.getElementById("radius").value;
    let radius = parseFloat(radiusInput);
    let volumeField = document.getElementById("volume");

    // Validate input (should be a number and non-negative)
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return;
    }

    // Calculate volume using V = (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume rounded to 4 decimal places
    volumeField.value = volume.toFixed(4);
}

// Attach event listener on form submit when the page loads
window.onload = function() {
    document.getElementById("MyForm").addEventListener("submit", volume_sphere);
};

