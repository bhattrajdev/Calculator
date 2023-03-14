
function number(data){
document.getElementById('result').value=document.getElementById('result').value+data

};

function clr(){
document.getElementById('result').value=""
}

function clrOne(){
    let value = document.getElementById('result').value
    document.getElementById('result').value=value.substr(0,value.length -1)
}

function operation(){
 let exp = document.getElementById('result').value
try{
 document.getElementById('result').value=eval(exp)
}
catch(e){
    document.getElementById('result').innerText("invalid")
}
}

    

