const form= document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = Number(weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('red')

    document.getElementById('infos').classList.remove('hidden');
    if (bmi <18.5) {
        description = "Cuidado! Você está abaixo do peso!!";
    } else if(bmi >= 18.5 && bmi <= 25) {
        description ="Você está com o peso ideal!";

        value.classList.remove('red')
        value.classList.add('green')

    } else if( bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobre peso!"
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está em obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está em obesidade severa!!";
    } else {
        description = "CUIDADO! Você está em obesidade morbida!";
    }
    
    value.textContent = bmi.replace(".", ",")
    document.getElementById("description").textContent = description; 
});