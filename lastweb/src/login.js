let userName=document.getElementById("userName_log");
let password=document.getElementById("input_log");
let btn=document.getElementById("myBtn_log");
btn.onclick=function () {
    if(reg1()==true)
        {
             alert("Done");
        }
    
    else
        
        {
            alert(" Invalid username or password ");
            return false;     
        }
    }
function reg1(){
    let regx1=/^[A-z]{3,15}/;
    let regx3=/^[0-9]{9,10}[A-Z]{1,2}/;
    if(regx1.test(userName.value)==false||regx3.test(password.value)==false)
        {
    
          return false;   
        }
    else
        {
            return true;
        }
    
}

$(".icone_log").click(function(){
    
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
