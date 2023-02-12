let string ="";
let buttons =document.querySelectorAll('.button');


Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    
    signs = ['+','-','*','%','/'];
    if(string.length==0&&signs.indexOf(e.target.innerHTML)!=-1){
        document.querySelector('input').value=string;
    }
    else if(signs.indexOf(e.target.innerHTML)!=-1 && signs.indexOf(string.charAt(string.length-1))!=-1){
        document.querySelector('input').value=string;
    }
    else  if(e.target.innerHTML=="M+"){
        if(eval(string)<0){
            string=string*-1;
            document.querySelector('input').value=string;
        }
    }else if(e.target.innerHTML=="M-"){
        if(eval(string)>0){
            string=string*-1;
            document.querySelector('input').value=string;
        }
    }

    else if(e.target.innerHTML=='C'){
        string="";
        document.querySelector('input').value=string;
    }
    else if (e.target.innerHTML=='=') {
        string=(eval(string));
        console.log(typeof(string));
        document.querySelector('input').value=string;
        string=string.toString();
    } 
    else{
    string =string+e.target.innerHTML;
    console.log(string);
    document.querySelector('input').value=string;
    }

   
})
})
