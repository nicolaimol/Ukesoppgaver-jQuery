// C = (5/9)*(F-32)
// F = (9/5)*C+32
function convertToCelsius() {
    let far = parseFloat($("#Fahrenheit").val());
    let cel = (5/9)*(far-32);
    $("#Celsius").val(cel)
}

function convertToFahrenheit() {
    let cel = Number($("#Celsius").val());
    let far = (9/5)*cel + 32;
    $("#Fahrenheit").val(far);
}
