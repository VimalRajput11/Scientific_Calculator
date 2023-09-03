const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        }
         else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if(display.innerText !='' &&  item.id=='√x'){
                display.innerText= Math.sqrt(display.innerText).toFixed(4);

        }
        else if(display.innerText !='' &&  item.id=='x²'){
            display.innerText= Math.pow(display.innerText,2);
          }
            else if(display.innerText !='' &&  item.id=='x³'){
                display.innerText= Math.pow(display.innerText,3);}
                else if(display.innerText !='' &&  item.id=='!x'){
                    var f=1;
                    if(display.innerText==0){
                        display.innerText='1';
                    }
                    else if (display.innerText<0)
                    {
                        display.innerText='undefined';
                    }
                    else{
                        for(var i=display.innerText;i>0;i--)
                        {
                            f=f*i;
                        }
                        display.innerText=f;
                    }
                }
                else if(display.innerText !='' &&  item.id=='³√x'){
                    display.innerText= Math.cbrt(display.innerText).toFixed(4);}
                    else if(display.innerText !='' &&  item.id=='sin'){
                        y=(display.innerText*Math.PI)/180;
                        display.innerText= Math.sin(y).toFixed(4);}
                        else if(display.innerText !='' &&  item.id=='cos'){
                            x=(display.innerText*Math.PI)/180;
                            display.innerText= Math.cos(x).toFixed(4);}
                            else if(display.innerText !='' &&  item.id=='log'){
                                display.innerText= Math.log10(display.innerText).toFixed(4);}
                                else if(display.innerText !='' &&  item.id=='tan'){
                                    x=(display.innerText*Math.PI)/180;
                                    display.innerText= Math.tan(x).toFixed(4);}
                                    else if(display.innerText !='' &&  item.id==''){
                                        display.innerText= Math.pow(display.innerText,3);}
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

