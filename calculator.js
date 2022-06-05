function alertinputvalueaddition(){
    let inputelement1 = document.getElementById('input1').value;
    let inputelement2 = document.getElementById('input2').value;
    let inputvalue1 =inputelement1.Value;
    let inputvalue2 =inputelement2.Value;
    let sum = Number(inputelement1) +  Number(inputelement2);

     document.getElementById('total').value=sum;

    //alert (`value of input is :${addition}`);
}