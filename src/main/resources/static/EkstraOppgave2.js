let uferdig;
let ferdig;
let skrivInn;

$(function () {
    uferdig = $("#uferdig");
    ferdig = $("#ferdig");
    skrivInn = $("#input");
})

let id = 0;
function leggTil() {
    id++;
    let ut = "<li id='rad-" + id + "'>";
    ut += "<input type='checkbox' id='sjekkboks-" + id + "' onchange='veksleStatus(" + id + ")'>"
    ut += "<span>" + skrivInn.val() + "</span>"
    ut += "</li>";

    skrivInn.val('');
    uferdig.append(ut);
}

function veksleStatus(id) {
    const sjekkboks = $("#sjekkboks-" + id);
    const rad = $("#rad-" + id);

    if (sjekkboks.is(':checked')) {
        rad.css({'text-decoration': 'line-through'});
        ferdig.append(rad);
    }
    else {
        rad.css({'text-decoration': 'none'});
        uferdig.append(rad);
    }
}
