"use strict";

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul.messages");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");

    
    let isValid = true;
    const success = "Thank you for contacting us we will answer your questions ASAP ";

    // check user entries for validity
    if (email.value == "") {
        email.nextElementSibling.textContent = "Email is required.\n";
        isValid = false
    } 
    else{
        email.nextElementSibling.textContent = "";
    }
    if (phone.value == "") {
        phone.nextElementSibling.textContent= " Enter a mobile phone number.";
        isValid = false; 
    } 
    else{
        phone.nextElementSibling.textContent = "";
    }

    if (country.value == "") {
        country.nextElementSibling.textContent = "Please select a country.";
        isValid = false;
    } 
    else{
        country.nextElementSibling.textContent = "";
    }

    if (terms.checked == false) {
        terms.nextElementSibling.textContent= "You must agree to the terms of service."; 
        isValid = false;
    }
    else{
        terms.nextElementSibling.textContent = "";
    }

    if (comments.value == "") {
        comments.nextElementSibling.textContent= "Please enter a comment.";
        isValid = false;
    }
    else{
        comments.nextElementSibling.textContent = "";
    }

    // submit the form or notify user of errors
    if (isValid) {
        alert(success);
    } 
};

const resetForm = () => {
    $("form").reset();
    const errorMsg = $("ul.messages");
    if (errorMsg != null) errorMsg.remove();
    // remove error messages
    //$("ul").remove();
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});