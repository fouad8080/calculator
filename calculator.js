let display = document.getElementById('screen');

function  writeinscreen(values){
   if (!display) return;
    display.value += values;
}

function clearscreen(){
    console.log('das')
    display.value=null
}
function calcule(){
    
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}