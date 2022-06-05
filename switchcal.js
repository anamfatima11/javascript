function performOperation(operationtoperform) {
    let inputelement1 = document.getElementById('operand1');
    let inputelement2 = document.getElementById('operand2');
    let inputvalue1 = inputelement1.value;
    let inputvalue2 = inputelement2.value;
    let result;
    switch (operationtoperform) {
        case 'addition':
            result = Number(inputvalue1) + Number(inputvalue2);
            break;
        case 'subtraction':
            result = Number(inputvalue1) - Number(inputvalue2);
            break;
        case 'multiplication':
            result = Number(inputvalue1) * Number(inputvalue2);
            break;
        case 'division':
            result = Number(inputvalue1) / Number(inputvalue2);
            break;

        default:
            alert('invalid operation!')

    }
            let inputelement3 = document.getElementById('result');
            inputelement3.value=result;
    }

    function reset() {

    }
