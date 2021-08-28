let absoluteValue=0;
let percentageValue=0;
let elem = document.querySelector('#range');
let valueOfRange=document.querySelector('#value-floating');
elem.addEventListener('input', function() {
   absoluteValue=this.value;
   percentageValue=absoluteValue/(150000-15000)*100;
    valueOfRange.style.left=`${percentageValue.toFixed(0)-12.999}%`;
    valueOfRange.style.top=`-35px`;
    valueOfRange.innerText=absoluteValue;
});