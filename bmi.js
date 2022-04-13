window.onload = () => {
    let button = document.querySelector("#btn");
  

    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
   
    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
   
    if (height === null || isNaN(height)) 
        result.innerHTML = "Invalid Height";
  
    else if (weight === null || isNaN(weight)) 
        result.innerHTML = "Invalid Weight";
  
   
    else {
  
        
        let bmi = (weight / ((height * height) 
                            / 10000));
  
        if (bmi <= 18.5) result.innerHTML =
            `You are Underweight: <span>${bmi}</span>`;
  
        else if (bmi <= 24.9) 
            result.innerHTML = 
                `You are Healthy: <span>${bmi}</span>`;

         else if (bmi <= 29.9) 
            result.innerHTML = 
                `You are Overweight: <span>${bmi}</span>`;
        
        else result.innerHTML =
            `You are Obese : <span>${bmi}</span>`;
    }
}
