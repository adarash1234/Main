function myFunction() {
    var tag_id = document.getElementById("tag_id").value;
    var name = document.getElementById("name").value;
    var vehicle_no = document.getElementById("vehicle_no").value;
    var materail = document.getElementById("material").value;
    var company_name = document.getElementById("company_name").value;
    var company_contact = document.getElementById("company_contact").value;

    
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'name1=' + tag_id + '&email1=' + name + '&password1=' + vehicle_no + '&contact1=' + contact + '&company_name1=' + comapny_name + '&company_contact1='+ company_contact;
    if (tag_id == '' || name == '' || vehicle_no == '' || materail == '' || company_name == '' || company_contact == '') {
    alert("Please Fill All Fields");
    } else {
    // AJAX code to submit form.
    $.ajax({
    type: "POST",
    url: "ajaxjs.php",
    data: dataString,
    cache: false,
    success: function(html) {
    alert(html);
    }
    });
    }
    return false;
    }