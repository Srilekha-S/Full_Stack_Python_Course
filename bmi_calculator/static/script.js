function validateForm() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (!weight || !height) {
        alert("Please enter both weight and height!");
        return false;
    }
    return true;
}
