function exe() {
    let x = document.getElementById("L").value;
    let z = document.getElementById("P").value;
    if (x === "LOG") {
        document.getElementById("tx").innerHTML = x;
        document.location.href = 'profil.html';
        if (z === "PASS") {
            document.getElementById("txV").innerHTML = z;
            document.location.href = 'profil.html';
        }
    }
}