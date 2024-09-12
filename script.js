function calcola() {
    // Prendi i valori degli input
    var bonus = parseFloat(document.getElementById("bonus").value);
    var rollover = parseFloat(document.getElementById("rollover").value);
    var rtp = parseFloat(document.getElementById("rtp").value) / 100;

    // Verifica se tutti i campi sono validi
    if (isNaN(bonus) || isNaN(rollover) || isNaN(rtp)) {
        alert("Per favore inserisci valori validi.");
        return;
    }

    // Calcolo del costo statistico del rollover
    var costoRollover = bonus * rollover * (1 - rtp);

    // Calcoli dei target
    var targetMedio = costoRollover * 1.65;
    var targetBuono = costoRollover * 2.5;
    var targetAlto = costoRollover * 3.5;

    // Mostra i risultati
    document.getElementById("costoRollover").innerHTML = "Il Rollover ti costerà statisticamente: €" + costoRollover.toFixed(2);
    document.getElementById("targetMedio").innerHTML = "Target con medie probabilità di completare il rollover: €" + targetMedio.toFixed(2);
    document.getElementById("targetBuono").innerHTML = "Target con buone probabilità di completare il rollover: €" + targetBuono.toFixed(2);
    document.getElementById("targetAlto").innerHTML = "Target con alte probabilità di completare il rollover: €" + targetAlto.toFixed(2);
    
    document.getElementById("result").style.display = "block";
}
