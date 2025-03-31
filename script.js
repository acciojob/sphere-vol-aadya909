function volume_sphere() {
document.getElementById("MyForm").addEventListener("submit",function(event){
	event.preventDefault();
	 let radiusInput = document.getElementById("radius").value;
    let radius = parseFloat(radiusInput);
    let volumeField = document.getElementById("volume");
	 if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return;}
		 let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
})

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
