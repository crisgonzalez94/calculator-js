

window.addEventListener( "load" , function(){
    
    //=================================================================
    //Same DOM elements in variables
    //=================================================================
    let display = document.getElementById('display');//This is paragraph that show the operations

    //Buttons Numbers
    let btn_zero = document.getElementById('btn_zero');
    let btn_one  = document.getElementById('btn_one');
    let btn_two = document.getElementById('btn_two');
    let btn_three = document.getElementById('btn_three');
    let btn_four = document.getElementById('btn_four');
    let btn_five = document.getElementById('btn_five');
    let btn_six = document.getElementById('btn_six');
    let btn_seven = document.getElementById('btn_seven');
    let btn_eight = document.getElementById('btn_eight');
    let btn_nine = document.getElementById('btn_nine');

    //Buttons operation
    let btn_reset = document.getElementById('btn_reset');
    let btn_delete = document.getElementById('btn_delete');
    let btn_divide = document.getElementById('btn_divide');
    let btn_multiply = document.getElementById('btn_multiply');
    let btn_substract = document.getElementById('btn_substract');
    let btn_dot = document.getElementById('btn_dot');
    let btn_same = document.getElementById('btn_same');
    let btn_add = document.getElementById('btn_add');

    //===========================================================
    //Define the display content as zero /
    let result = '0';//This is the number that see in display
    let last_operation = 'none';//This variable is for verify if there a operation in course
    let last_number = '';

    display.innerHTML = result;

    //=================================================================
    //Key events
    //=================================================================
    btn_zero.addEventListener('click' , function(){
        writeNumber('0');
    });
    btn_one.addEventListener('click' , function(){
        writeNumber('1');
    });
    btn_two.addEventListener('click' , function(){
        writeNumber('2');
    });
    btn_three.addEventListener('click' , function(){
        writeNumber('3');
    });
    btn_four.addEventListener('click' , function(){
        writeNumber('4');
    });
    btn_five.addEventListener('click' , function(){
        writeNumber('5');
    });
    btn_six.addEventListener('click' , function(){
        writeNumber('6');
    });
    btn_seven.addEventListener('click' , function(){
        writeNumber('7');
    });
    btn_eight.addEventListener('click' , function(){
        writeNumber('8');
    });
    btn_nine.addEventListener('click' , function(){
        writeNumber('9');
    });
    btn_dot.addEventListener('click' , function(){
        writeNumber('.');
    });

    //==========================================================
    //Operation buttons events
    //==========================================================
    btn_add.addEventListener('click' , function(){
        add();
    });
    btn_substract.addEventListener('click' , function(){
        subtract();
    });
    btn_multiply.addEventListener('click' , function(){
        multiply();
    });
    btn_divide.addEventListener('click' , function(){
        divide();
    });
    btn_same.addEventListener('click' , function(){
        same();
    });

    //==========================================================
    //Other buttons eventss
    //==========================================================
    btn_reset.addEventListener('click' , function(){
        reset();
    });
    btn_delete.addEventListener('click' , function(){
        del();
    });

    function writeNumber(keyNumber){

        if(result == '0'){
            result = keyNumber;
        }else{
            result += keyNumber;
        }

        //Verify if just have a dot.
        if(result == '.'){
            result = '0.';
        }

        display.innerHTML = result;

    }

    //==========================================================
    //Usabilities functions
    //==========================================================
    function reset(){
        result = '0';
        operation = 'none';

        display.innerHTML = result;
    }
    function del(){
        //Verify how much numbers there in the display
        if( result.length > 1){
            result = result.slice(0 , result.length - 1);
            
        }else{
            result = '0';
        }
        
        display.innerHTML = result;
    }

    //==========================================================
    //Functions of operations
    //==========================================================
    function add(){
        //Verify if there a operation in course
        if(last_operation == 'none'){
            last_operation = 'add';
            last_number = result;
            result = '0';
            display.innerHTML = result;
        }else{
            last_operation = 'none';
            partial_result = parseFloat(last_number) + parseFloat(result);
            result = String(partial_result);
            display.innerHTML = result;
        }
    }

    function subtract(){
        //Verify if there a operation in course
        if(last_operation == 'none'){
            last_operation = 'substract';
            last_number = result;
            result = '0';
            display.innerHTML = result;
        }else{
            last_operation = 'none';
            partial_result = parseFloat(last_number) - parseFloat(result);
            result = String(partial_result);
            display.innerHTML = result;
        }
    }

    function multiply(){
        //Verify if there a operation in course
        if(last_operation == 'none'){
            last_operation = 'multiply';
            last_number = result;
            result = '0';
            display.innerHTML = result;
        }else{
            last_operation = 'none';
            partial_result = parseFloat(last_number) * parseFloat(result);
            result = String(partial_result);
            display.innerHTML = result;
        }
    }

    function divide(){
        //Verify if there a operation in course
        if(last_operation == 'none'){
            last_operation = 'divide';
            last_number = result;
            result = '0';
            display.innerHTML = result;
        }else{
            last_operation = 'none';
            partial_result = parseFloat(last_number) / parseFloat(result);
            result = String(partial_result);
            display.innerHTML = result;
        }
    }

    function same(){
        //Verify if there a operation in course
        switch(last_operation){
            case 'add':
                add();
                break;
            case 'substract':
                subtract();
                break;
            case 'multiply':
                multiply();
                break;
            case 'divide':
                divide();
                break;
        }
        
        if(last_operation == 'none'){
            display.innerHTML = result;
        }else{
            last_operation = 'none';
            partial_result = parseFloat(last_number) / parseFloat(result);
            result = String(partial_result);
            display.innerHTML = result;
        }
    }


});