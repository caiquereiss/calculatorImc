function getWeightHeight(){
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  return {
    weight,
    height
  }
}

function calcular() {
  const {weight, height } =  getWeightHeight();
  const imc =  weight / (height * height); 

  document.getElementById('result').innerHTML = imc.toFixed(2);
 
}
