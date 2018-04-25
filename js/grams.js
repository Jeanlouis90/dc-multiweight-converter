document.getElementById('output').style.visibility = 'hidden';
document.getElementById('gramsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let grams = e.target.value;
    document.getElementById('kgOutput').innerHTML = grams/1000;
    document.getElementById('lbsOutput').innerHTML = grams*0.002204626;
    document.getElementById('ozOutput').innerHTML = grams*0.035274;
});