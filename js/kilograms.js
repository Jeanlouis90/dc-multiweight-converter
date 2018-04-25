document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kgInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let kilograms = e.target.value;
    document.getElementById('gramsOutput').innerHTML = kilograms*1000;
    document.getElementById('lbsOutput').innerHTML = kilograms*2.20462;
    document.getElementById('ozOutput').innerHTML = kilograms*35.274;
});