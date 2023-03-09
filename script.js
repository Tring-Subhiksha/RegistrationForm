class FormValidation{
    formValues = {
        username : "",
        email : "",
        phonenumber : "",
        Dateofbirth:"",
        password : "",
        
    }
    errorValues = {
        usernameErr : "",
        emailErr : "",
        phonenumberErr : "",
        DateofbirthErr:"",
        passwordErr : "",
        
    }
    showError(index,msg){
        const form_group=document.getElementsByClassName("form-group")[index]
        form_group.classList.add("error")
        form_group.getElementsByClassName('span')[0].innerHTML= msg   
    }
    showSuccess(index){
        const form_group=document.getElementsByClassName("form-group")[index]
        form_group.classList.remove("error")
        form_group.classList.add("success")
        
    }

    getInputs(){
        this.formValues.username=document.getElementById("name").value.trim();
        this.formValues.email=document.getElementById("email").value.trim();
        this.formValues.phonenumber=document.getElementById("phone").value.trim();
        this.formValues.Dateofbirth=document.getElementById("date").value.trim();
        this.formValues.password=document.getElementById("password").value.trim();
       
    
  
        if(this.formValues.username===""){
            this.errorValues.usernameErr="*Name should not be blank";
            this.showError(0,this.errorValues.usernameErr);
        }
        else if(this.formValues.username.length<5){
            this.errorValues.usernameErr="*Name atleast five characters"
            this.showError(0,this.errorValues.usernameErr)
        }
        else if(this.formValues.username.length>16){
            this.errorValues.usernameErr="*Name is too large"
            this.showError(0,this.errorValues.usernameErr)
        }
        else{
            this.errorValues.usernameErr=""
            this.showSuccess(0);
        }
    

       
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "*Email Id should not be blank"
            this.showError(1,this.errorValues.emailErr)
        } 
        else {
            this.errorValues.emailErr = ""
            this.showSuccess(1)
        }

    
        const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "*Phone number should not be blank"
           this.showError(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccess(2)
       } else  {
           this.errorValues.phonenumberErr = "*Invalid Phone Number"
           this.showError(2,this.errorValues.phonenumberErr)
       }
    
       if(this.formValues.password === ""){
       
            this.showError(4,"*Password should not be blank")
        } else if(this.formValues.password.length <= 4){
            
            this.showError(4,"*Password must be atleast 5 Characters")
        } else if(this.formValues.password.length > 10){
           
            this.showError(4,"*Password should not exceeds 10 Characters")
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccess(4)
        }
     

   
   
        if(this.formValues.Dateofbirth === ""){
            this.errorValues.DateofbirthErr= "*Date of Birth should not be blank"
            this.showError(3,this.errorValues.DateofbirthErr)
        }
        else {
            this.errorValues.DateofbirthErr= ""
            this.showSuccess(3)
        }
}
    alertMessage(){
        const {usernameErr , emailErr , phonenumberErr , passwordErr , DateofbirthErr}= this.errorValues
        if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === "" && DateofbirthErr === ""){
        alert("Registration successfull Thank you " +this.formValues.username)
        this.remove();
        }
    }
remove(){
    const form_groups = document.getElementsByClassName('form-group')
    Array.from(form_groups).forEach(element => {
        element.getElementsByTagName('input')[0].value = ""
        element.getElementsByClassName('span')[0].textContent = ""
        element.classList.remove('success')
    })
}
}

const validateuser=new FormValidation();
document.getElementsByClassName("form")[0].addEventListener('submit',e=>{
    e.preventDefault();
    validateuser.getInputs();
    
    validateuser.alertMessage();
});
