
let control_of_reportlostitem_section = document.getElementById("reportlostitem");
function show_reportlostitem() {
    control_of_reportlostitem_section.style.display = "block";
}

let control_of_reportfounditem_section = document.getElementById("reportfounditem");
function show_reportfounditem(){
    control_of_reportfounditem_section.style.display = "block";
}

let control_of_search_section = document.getElementById("searchitem");
function show_seacrh_login(){
    control_of_search_section.style.display = "block";
}

let control_of_contact_section = document.getElementById("contactus");
function show_contact(){
    control_of_contact_section.style.display = "block";
}

let control_of_adminlogin = document.getElementById("adminlogin");
function show_admin_login(){
    control_of_adminlogin.style.display ="block";
}

if (control_of_contact_section) {
    control_of_contact_section.addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        const response = {
            name, email, message
        };
     
        let dummyDatabase = JSON

    
}
