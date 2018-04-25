document.getElementById('output').style.visibility = 'hidden';
document.getElementById('ozInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let oz = e.target.value;
    document.getElementById('gramsOutput').innerHTML = oz*28.3495537056306;
    document.getElementById('kgOutput').innerHTML = oz*0.028349553705630602118;
    document.getElementById('lbsOutput').innerHTML = oz/16;
});