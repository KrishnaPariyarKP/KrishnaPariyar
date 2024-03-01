const form = document.querySelector("form");

function sendemail() {
    var status= false;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nam = document.getElementById("frmname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;
    const detailmsg = `Name: ${nam}<br>Phone: ${phone}<br>Email: ${email}<br>Message: ${msg}`;
    if(phone.length<10 || !(!isNaN(phone))){
        document.getElementById("phone").style.border='red 2px solid';
        status=false;
    }
    else{
        document.getElementById("phone").style.border='black 2px solid';
        status=true;
    }
     if(!(pattern.test(email))){
        document.getElementById("email").style.border='red 2px solid';
        status=false;
    }
    else{
        document.getElementById("email").style.border='black 2px solid';
        status=true;
    }
    if(status===true){
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "kp.bhusa2021@gmail.com",
            Password: "68F3722BBE573A7FF039072B92DA1C96F3FF",
            To: 'kp.bhusa2021@gmail.com',
            From: "kp.bhusa2021@gmail.com",
            Subject: "Get message from portfolio",
            Body: detailmsg
        }).then(
             alert("Sucessfully send message.")
        );
    }
    
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    sendemail(); 
});
