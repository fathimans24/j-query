$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
                
            },
            sname:{
                required:true,
                minlength:4

            },
            emailAdress:{
                required:true,
                email:true

            },
            password:{
                minlength:6
            },
            days:{
                required:true

            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:"enter the first name"
        }
        
    })
})