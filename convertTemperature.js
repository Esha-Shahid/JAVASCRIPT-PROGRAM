function convert() {
    var c = document.getElementById('data').value;
    var f = (c * 1.8) + 32;
    document.getElementById('result').innerText = ` ${c} c = ${f} f `;
}