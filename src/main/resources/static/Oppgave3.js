
        function pluss() {
            const in_1 = Number($("#tall1").val());
            const in_2 = Number($("#tall2").val());
            const output = $("#ut");
            if (in_1 === NaN || in_2 === NaN) {
                alert("Feil tallformat, 0-9 må benyttes");
            } else {
                output.html(in_1 + in_2);
            }
        }

        function minus() {
            const in_1 = Number($("#tall1").val());
            const in_2 = Number($("#tall2").val());
            const output = $("#ut");
            if (in_1 === NaN || in_2 === NaN) {
                alert("Feil tallformat, 0-9 må benyttes");
            } else {
                output.html(in_1 - in_2);
            }
        }

        function ganger() {
            const in_1 = Number($("#tall1").val());
            const in_2 = Number($("#tall2").val());
            const output = $("#ut");
            if (in_1 === NaN || in_2 === NaN) {
                alert("Feil tallformat, 0-9 må benyttes");
            } else {
                output.html(in_1 * in_2);
            }
        }

        function dele() {
            const in_1 = Number($("#tall1").val());
            const in_2 = Number($("#tall2").val());
            const output = $("#ut");
            if (in_1 === NaN || in_2 === NaN) {
                alert("Feil tallformat, 0-9 må benyttes");
            } else {
                output.html(in_1 / in_2);
            }
        }
