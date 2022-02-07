function getWeightHeight(){
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  return {
    weight,
    height
  }
}
function calculateImc() {
  const {weight, height } =  getWeightHeight();
  const calculate =  weight / (height * height);
  return calculate;
}

function calcular() {
 const imc = calculateImc();
 document.getElementById('result').innerHTML = imc.toFixed(2);
 
}
