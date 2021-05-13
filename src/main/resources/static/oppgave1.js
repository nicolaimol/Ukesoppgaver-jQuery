function registrer() {
    let navn = $("#navn").val();
    let alder = $("#alder").val();

    $("#ut").html("Navnet er :" + navn + ", og alderen er" + alder);
}
