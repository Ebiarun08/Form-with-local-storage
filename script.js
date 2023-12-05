const form = document.getElementById("form");
const username = document.getElementById("username");
const dateofbirth = document.getElementById("dateofbirth");
const email = document.getElementById("email");
const mobile = document.getElementById("phnumber");
// const dob = document.getElementById("dateofbirth");
const gender = document.getElementsByName("male");
const occupation = document.getElementById("occupation");
const idtype = document.getElementById("idtype");
const idnum = document.getElementById("idnum");
const authority = document.getElementById("authority");
const state = document.getElementById("state");
const issuedate = document.getElementById("issuedate");
const expirydate = document.getElementById("expirydate");



// console.log(dateofbirth.value);
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const dateofbirthValue = dateofbirth.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();

    const occupationValue = occupation.value.trim();
    const idtypeValue = idtype.value.trim();
    const idnumValue = idnum.value.trim();
    const authorityValue = authority.value.trim();
    const stateValue = state.value.trim();
    const issuedateValue = issuedate.value.trim();
    const expirydateValue = expirydate.value.trim();
    var result=""


    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (dateofbirthValue === '') {
        setError(dateofbirth, 'Date of birth required');
    }
    // else if( ){

    // }
    else {
        setSuccess(dateofbirth);
    }
    // console.log(dateofbirth.value);

    if (emailValue === '') {
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Enter the valid email');
    }
    else {
        setSuccess(email);
    }

    if (mobileValue === '') {
        setError(mobile, 'Mobile Number is required');
    }
    else if (mobileValue.length != 10) {
        setError(mobile, 'enter 10 digits')
    }
    else {
        setSuccess(mobile)
    }
    // console.log(mobileValue.value);
    

    if (occupationValue === '') {
        setError(occupation, 'Occupation is required');
    } else {
        setSuccess(occupation);
    }

    
    if (idtypeValue === '') {
        setError(idtype, 'Username is required');
    } else {
        setSuccess(idtype);
    }

    
    if (idnumValue === '') {
        setError(idnum, 'Username is required');
    } else {
        setSuccess(idnum);
    }

    if (authorityValue === '') {
        setError(authority, 'Username is required');
    } else {
        setSuccess(authority);
    }

    if (stateValue === '') {
        setError(state, 'Username is required');
    } else {
        setSuccess(state);
    }
   var gen = document.getElementsByName("male")
   for (i=0; i<gen.length;i++){
    if(gen[i].checked){
        result =gen[i].value
        break;
    }
   }
   console.log(result);
    if (issuedateValue === '') {
        setError(issuedate, 'Date required');
    }
    // else if( ){

    // }
    else {
        setSuccess(issuedate);
    }
    if (expirydateValue === '') {
        setError(expirydate, 'Date of birth required');
    }
    // else if( ){

    // }
    else {
        setSuccess(expirydate);
    }
    var formData = {
        name:usernameValue,
        email:emailValue,
        dob:dateofbirthValue,
        mobile:mobileValue,
        gender:gender.value,
        idtype:idtypeValue,
        idnum:idnumValue,
        authority:authorityValue,
        state:stateValue,
        issuedate:issuedateValue,
        expirydate:issuedateValue,

        
    };

    localStorage.setItem('formData',JSON.stringify(formData));

    window.location.href = 'result.html';
}
























const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    // a+=1
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


































































const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}