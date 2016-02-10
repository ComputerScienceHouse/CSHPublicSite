
    // process the form
    $('#mailerForm').validator().submit(function(event) {
 event.preventDefault(); // avoid to execute the actual submit of the form.
            
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val();
        var position = $('#position').val();
        var message = $('#message').val();
        var g = grecaptcha.getResponse();
        
        if(name == '' || email == '' || position == '' || message == ''){
            alertify.error("Please Complete Form!").closeLogOnClick(true).delay(4000);
            
        }
        else{
            // process the form
        //console.log("DEBUG:g="+g+'&name='+name+'&email='+email+'&position='+position+'&message='+message); //debug
        
        
        var url = "resources/php/mailer.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#mailerForm").serialize(), // serializes the form's elements.
        
           success: function(data)
           {
             //console.log("OKAY!"); //debug 
               alertify.success("Message Sent!").closeLogOnClick(true).delay(4000);
               
               
           },
            error: function(data)
           {
               alertify.error("Error Sending Message!").closeLogOnClick(true).delay(4000);
               
           },
            complete: function(data){
                //console.log("Complete!");//debug
                $('#mailerForm')[0].reset();
                grecaptcha.reset();
                
            }
         });
    
    
return false;
        
            
        }
        

        
        
    });
    