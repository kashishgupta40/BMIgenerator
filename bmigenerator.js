const form =  document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() ;

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
       results.innerHTML = `Please give a valid height $(height)` ;
    }
    
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight $(weight)` ;
     }
     else{
      const bmi =  (weight / ((height*height)/10000)).toFixed(2);
     }
    //results.innerHTML = `$(height)`;
    results.innerHTML = `<span>$(bmi)</span>`;
    if(bmi <= 18.5){
         results.classList.add("low") ;
         results.innerHTML += " You are underweight.";
     }else if(bmi <=  24.9){
          results.classList.add("normal");
          results.innerHTML += " Your weight is normal.";
     }else if(bmi <=  29.9){
           results.classList.add("high");
           results.innerHTML += " You have overweight";
     }else {
            results.classList.add("very-high");
            results.innerHTML += " You have obesity";
     }

});