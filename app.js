'use strict'

document.querySelector('#loan-form').addEventListener('submit', function(e){
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';
    setTimeout(CalcResults, 1000);

    e.preventDefault();
});

function CalcResults(){
    document.querySelector('#monthly-payment').value = '';
    document.querySelector('#total-payment').value =   '';
    document.querySelector('#total-interest').value = '';
    document.querySelector('#results').style.display = 'none';
    let amount = parseFloat(document.querySelector("#amount").value);
    let interest = parseFloat(document.querySelector('#interest').value);
    let years = parseFloat(document.querySelector('#years').value);
    const x = Math.pow(1+(interest/100/12), (years*12));
    const monthly = (amount*x*(interest/100/12))/(x-1);

   

    if(isFinite(monthly)){
    document.querySelector('#monthly-payment').value = monthly.toFixed(2);
    document.querySelector('#total-payment').value =   (monthly*years*12).toFixed(2);
    document.querySelector('#total-interest').value = ((monthly*years*12)-amount).toFixed(2); 
    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';       
     } else {
    if (document.querySelector('.alert')){
    } else{
    showError('Check your numbers')
    document.querySelector('#loading').style.display = 'none'; 
}
}
}

function showError (error){
    const divEl = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    divEl.className = 'alert alert-danger';
    divEl.appendChild(document.createTextNode(error));
    card.insertBefore(divEl, heading);
    setTimeout (clearError, 3000);
}

function clearError (){
    document.querySelector('.alert').remove();
}

