const calculateTemp = () => {
  const numbertemp= document.getElementById('temp').value;

  const tempselected= document.getElementById('temp_diff');
  const valueTemp= temp_diff.options[tempselected.selectedIndex].value;

  const celtofah = (cel) =>
  {
    let fahrenheit= Math.round(cel * 9/5) +32;
    return fahrenheit;
  }
   
  const fahtocel = (fah) =>
  {
    let Celsius= Math.round((fah - 32)  * 5/9);
    return Celsius;
  }

let result;

if(valueTemp == 'cel'){
    result = celtofah(numbertemp);
    document.getElementById('resultContainer').innerHTML= `= ${result}° Fahrenheit `;
}
else{
    result = fahtocel(numbertemp);
    document.getElementById("resultContainer").innerHTML= `= ${result}° Celsius `;

}
}