

//alert("ay7ahga");
let userName   =document.getElementById("userName_re");
let email      =document.getElementById("email_re");
let password   =document.getElementById("input_re");
let cPassword  =document.getElementById("input2_re");
let btns       =document.getElementById("myBtn_re");

btns.onclick=function(){
    if(reg()==true)
        {
                     alert("done");
        }
    
    else
        {
        alert("UserName must contain min 3 char and max 15  and email  should like example122@exe.com and  bassword must contain at least 9 number and 1 upperCase char");
            return false;

        }
}

function reg(){
    let regx1=/^[A-z]{3,15}/;
    let regx2=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regx3=/^[0-9]{9,10}[A-Z]{1,2}/;
    if(regx1.test(userName.value)==false  ||regx2.test(email.value)==false
       ||regx3.test(password.value)==false||regx3.test(cPassword.value)==false)
        {
    
          return false;   
        }
    else
        {
            return true;
        }
}

$(".icone_re").click(function(){
 let x= $(this).parent().find("input");
    if($(this).css("opacity")==1)
        { 
             $(this).css("opacity","0");
             x.attr("type","text");
             $(this).siblings().css("opacity","1");
        }
    else
        {
             $(this).css("opacity","1") ;
             x.attr("type","password");
        }
})