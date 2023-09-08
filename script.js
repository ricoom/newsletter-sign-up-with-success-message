const success=document.getElementById('suc_btn');
const submit=document.getElementById('submit');
const input=document.getElementById('data');
const err=document.getElementById('error');
const msg=document.getElementById('succes_msg')
const close=document.getElementById('suc_btn')

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(input.checkValidity()){

        msg.style.display='block';

    }else{
       err.innerText=input.validationMessage;
    }

})

close.addEventListener('click',(e)=>{
    e.preventDefault();
    
        msg.style.display='none';

   
})