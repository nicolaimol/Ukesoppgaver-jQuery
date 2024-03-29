let liste;
const oppgaver = [];
const oppgave1 = {
    sporsmol: "Når er frist for oblig 1?",
    alternativer: ['1. Februar', '6. Februar', '12. Februar'],
    riktigIndex: 2
}

const oppgave2 = {
    sporsmol: "Hvor mange obliger er det i dette faget?",
    alternativer: ['3', '5', 'ingen', '2'],
    riktigIndex: 0
}

const oppgave3 = {
    sporsmol: "Hva står API for?",
    alternativer: ['App Program Instruction', 'Application Programming Interface', 'Det er ikke en forkortelse'],
    riktigIndex: 1
}

oppgaver.push(oppgave1)
oppgaver.push(oppgave2)
oppgaver.push(oppgave3)

function skrivUtOppgaver() {
    liste = $("#liste");
    let ut = "";
    let id = 0;
    let oppgaveIndex = 0;
    for (let oppgave of oppgaver) {
        ut += "<li>"
        ut += "<h4>" + oppgave.sporsmol + "</h4>"
        ut += "<div>"
        for (let alternativ of oppgave.alternativer) {
            id++;
            ut += "<label for='" +id + "'>" + alternativ + "</label>"
            ut += "<input type='radio' id='" + id + "' value='" +  alternativ +
                "' name='oppgave-" + oppgaveIndex + "'><br>"
        }
        ut += "</div></li>"

        oppgaveIndex++;
    }

    ut += "<button type='button' onclick='sjekkSvar()'>SJekk svar</button>"
    liste.html(ut);
}

function sjekkSvar() {
    let rikige = 0;
    for (let i = 0; i < oppgaver.length; i++) {
        const radioKnapper = $('[name="oppgave-' + i + '"]');
        let svar;
        for (let alternativ of radioKnapper) {
            if (alternativ.checked) {
                svar = alternativ.value;
                break;
            }
        }

        if (sjekkOmRiktig(i, svar)) {
            rikige++;
        }
    }
    liste.html('');
    alert(rikige + " av " + oppgaver.length + " oppgaver er riktige")
}

function sjekkOmRiktig(i, svar) {
    const opppgave = oppgaver[i];
    if (opppgave.riktigIndex === opppgave.alternativer.indexOf(svar)) {
        return true;
    }
    return false;
}
