const personregister = [];

function registrer() {
    const navn = $("#navn");
    const adresse = $("#adresse");
    const telefon = $("#tlf");

    const Person = {
        navn: navn.val(),
        adresse: adresse.val(),
        telefon: telefon.val()
    }

    personregister.push(Person);

    $('input').val('');
}

function visRegister() {
    let ut = "<table><tr><th>Navn</th><th>Adresse</th><th>Telefon</th></tr>";
    for (let person of personregister) {
        ut += "<tr><td>"+ person.navn + "</td><td>" + person.adresse + "</td>" +
            "<td>" + person.telefon + "</td></tr>";
    }
    ut += "</table>";
    $("#ut").html(ut);
}
