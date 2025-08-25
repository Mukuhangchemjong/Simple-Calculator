 // to add value into the display
    function addToResult(value) {
    let result = document.getElementById('result');
    result.value += value;
   }
// to clear the result
function clearResult() {
    let clr = document.getElementById('result');
    result.value = '';
}
// to display the result
function calculateResult()
{
    let cal =  document.getElementById('result').value;

   try {
    let ans = eval(cal);
     document.getElementById('result').value = ans;
   } catch (error) {
    document.getElementById("result").value = "error";
   }
}




