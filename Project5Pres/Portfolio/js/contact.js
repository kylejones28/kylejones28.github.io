"use strict";

$( document ).ready( () => {

    $( "#register" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email_address").val();
        const phone = $("#phone").val();
        

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        
        
        // check user entries for validity
        let isValid = true;
        const success = "Thank you for contacting me I will get back to you ASAP ";
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email_address").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if (country.value == "") {
        country.nextElementSibling.textContent = "Please select a country.";
        isValid = false;
    } 
    else{
        country.nextElementSibling.textContent = "*";
    }

    if (terms.checked == false) {
        terms.nextElementSibling.textContent= "You must agree to the terms of service."; 
        isValid = false;
    }
    else{
        terms.nextElementSibling.textContent = "*";
    }

    if (comments.value == "") {
        comments.nextElementSibling.textContent= "Please enter a comment.";
        isValid = false;
    }
    else{
        comments.nextElementSibling.textContent = "*";
    }
        
        if ( isValid ) { 
            alert(success);
            // code that saves profile info goes here
        }
        
        $("#email_address").focus(); 
    });

$( "#reset_form" ).click( () => {
    $("#form").trigger("reset");
    // remove error messages
    //$("ul").remove();
    
    $("#email_address").focus();
});
    
    // set focus on initial load
    $("#email_address").focus(); 
});
