
let control_of_reportlostitem_section = document.getElementById("reportlostitem");
function show_reportlostitem() {
    control_of_reportlostitem_section.style.display = "block";
}

let control_of_reportfounditem_section = document.getElementById("reportfounditem");
function show_reportfounditem(){
    control_of_reportfounditem_section.style.display = "block";
}

let control_of_contact_section = document.getElementById("contactus");
function show_contact(){
    control_of_contact_section.style.display = "block";
}

let control_of_adminlogin = document.getElementById("adminlogin");
function show_admin_login(){
    control_of_adminlogin.style.display ="block";
}


let adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        let username = document.getElementById("adminUsername").value;
        let password = document.getElementById("adminPassword").value;
        
      
        const ADMIN_USERNAME = "admin";
        const ADMIN_PASSWORD = "password123";
        
        if (username === ADMIN_USERNAME && password == ADMIN_PASSWORD) {
            alert("Admin login successful!");
            control_of_adminlogin.style.display ="none";
            document.getElementById("userResponses").style.display ="block";
        
           
        } else {
            alert("Invalid admin username or password. Please try again.");
            adminLoginForm.reset();
        }
    });

}

let control_of_contactme = document.getElementById("contactForm");
control_of_contactme.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const response = {
    name ,email, message
    }

    let dummyDateBase = JSON.parse(localStorage.getItem('tempDp'))||[];
    dummyDateBase.push(response);
    localStorage.setItem('tempDB', JSON.stringify(DummyDatabase)); 


});

