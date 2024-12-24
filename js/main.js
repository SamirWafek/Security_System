function valid(){
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("subject").value;
    let pass = document.getElementById("message").value;
    if(fullname===""||email===""||subject===""||message===""){
        alert("Please fill all the fields");
        return false;
    }
    if(email.indexOf("@")===-1||email.indexOf(".")===-1){
        alert("Invalid your email");
        return false;
    

    }
    return true
     
    
    
}