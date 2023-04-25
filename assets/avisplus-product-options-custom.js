let interval = setInterval(function () {
  let apElements = document.querySelector('#avpoptions-container');
  let inputR1 = $('#avpoptions-container div.apo-input--r1 input[type="radio"]');
  let inputR2 = $('#avpoptions-container div.apo-input--r2 input[type="radio"]');
  let inputR3 = $('#avpoptions-container div.apo-input--r3 input[type="radio"]');
  let inputR4 = $('#avpoptions-container div.apo-input--r4 input[type="radio"]');
  if (apElements){
    if (inputR1.length > 0 || inputR2.length > 0 || inputR3.length > 0 || inputR4.length > 0) {
      $($('#avpoptions-container div.apo-input--r1 input[type="radio"]')[0]).attr( 'checked', 'checked' )
      $($('#avpoptions-container div.apo-input--r2 input[type="radio"]')[0]).attr( 'checked', 'checked' )
      $($('#avpoptions-container div.apo-input--r3 input[type="radio"]')[0]).attr( 'checked', 'checked' )
      $($('#avpoptions-container div.apo-input--r4 input[type="radio"]')[0]).attr( 'checked', 'checked' )
    }
    clearInterval(interval);
  }
}, 100);

