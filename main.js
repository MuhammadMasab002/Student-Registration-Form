////////////////////////////////////////////////////////////////////////////////
//// selected options
var laBel = document.querySelector('#labelSubjt');
laBel.style.color = 'lightgray';
var proGram = document.getElementById('programs');
var subJect = document.getElementById('subjects');

//// creating optgroup for subjects
var optGroup1 = subJect.appendChild(document.createElement('optgroup'));
var optGroup2 = subJect.appendChild(document.createElement('optgroup'));
var optGroup3 = subJect.appendChild(document.createElement('optgroup'));

//// hide optgroups 
optGroup1.hidden = true;
optGroup2.hidden = true;
optGroup3.hidden = true;

proGram.addEventListener('change', function () {
    optGroup1.innerHTML = "";
    optGroup2.innerHTML = "";
    optGroup3.innerHTML = "";

    optGroup1.label = '';
    optGroup2.label = '';
    optGroup3.label = '';
    laBel.style.color = 'green';
    //// check program conditions for subjects 
    if (proGram.value == "cs") {
        optGroup1.hidden = false;
        optGroup2.hidden = true;
        optGroup3.hidden = true;
        optGroup1.label = 'BS Computer Science';
        var firstOpt1 = optGroup1.appendChild(document.createElement('option'));
        var firstOpt2 = optGroup1.appendChild(document.createElement('option'));
        var firstOpt3 = optGroup1.appendChild(document.createElement('option'));
        var firstOpt4 = optGroup1.appendChild(document.createElement('option'));
        //// there are the inner text for options
        firstOpt1.innerHTML = 'Data Structures';
        firstOpt2.innerHTML = 'Computer Networks';
        firstOpt3.innerHTML = 'Network Security';
        firstOpt4.innerHTML = 'Objetc Oriented Programming';

        //// there are the values for options
        firstOpt1.value = 'Data Structures';
        firstOpt2.value = 'Computer Networks';
        firstOpt3.value = 'Network Security';
        firstOpt4.value = 'Objetc Oriented Programming';
        firstOpt1.selected = true;
    }
    else if (proGram.value == "chemistry") {
        optGroup1.hidden = true;
        optGroup2.hidden = false;
        optGroup3.hidden = true;
        optGroup2.label = 'BS Chemistry';
        var secondOpt1 = optGroup2.appendChild(document.createElement('option'));
        var secondOpt2 = optGroup2.appendChild(document.createElement('option'));
        var secondOpt3 = optGroup2.appendChild(document.createElement('option'));
        //// there are the inner text for options
        secondOpt1.innerHTML = 'Inorganic Chemistry';
        secondOpt2.innerHTML = 'Organic Chemistry.';
        secondOpt3.innerHTML = 'Analytical Chemistry';

        //// there are the values for options
        secondOpt1.value = 'Inorganic Chemistry';
        secondOpt2.value = 'Organic Chemistry';
        secondOpt3.value = 'Analytical Chemistry';
        secondOpt1.selected = true;
    }
    else if (proGram.value == "msMath") {
        optGroup1.hidden = true;
        optGroup2.hidden = true;
        optGroup3.hidden = false;
        optGroup3.label = 'MS Math';
        var thirdOpt1 = optGroup3.appendChild(document.createElement('option'));
        var thirdOpt2 = optGroup3.appendChild(document.createElement('option'));
        var thirdOpt3 = optGroup3.appendChild(document.createElement('option'));
        //// there are the inner text for options
        thirdOpt1.innerHTML = 'Calculus Math';
        thirdOpt2.innerHTML = 'Discrete Math';
        thirdOpt3.innerHTML = 'Multivariable Calculus';

        //// there are the values for options
        thirdOpt1.value = 'Calculus Math';
        thirdOpt2.value = 'Discrete Math';
        thirdOpt3.value = 'Multivariable Calculus';
        thirdOpt1.selected = true;
    }
});



///////////////////////////////////////////////////////////////////////////////
//// upload image
var imgFile = document.getElementById('img_file');
var imgPreview = document.getElementById('img_preview');
imgPreview.addEventListener('click', function () {
    imgFile.click();
})

imgFile.addEventListener('change', handleFiles);
function handleFiles() {
    imgPreview.style.display = 'inline-block';
    // img_spn.innerHTML = '';
    var image = this.files[0];      //// url of the images
    var reader = new FileReader();
    reader.onload = function () {
        var allImg = imgPreview.querySelectorAll('img');
        allImg.forEach(item => item.remove())

        var img = imgPreview.appendChild(document.createElement('img'));
        img.src = reader.result;
        img.style = 'width:100%; height:100%;';
    }
    reader.readAsDataURL(image);

    //// check image validation with respect to -->> size, and types
    if (image.size > 1024 * 1024 * 2.5) {
        alert("File must be smaller than 2MB");
        return false;
    }
    let allowedImageTypes = ["image/jpeg", "image/gif", "image/png"];
    if (!allowedImageTypes.includes(image.type)) {
        alert("Allowed file type's are: [ .jpg .png .gif ]");
        return false;
    }

    //// create info HTML for image details
    let fileInfo = `
             <ul>
                <li> File name: <span>${image.name}</span> </li>
                <li> File size: <span>${image.size} bytes</span>  </li>
                <li> File type: <span>${image.type}</span> </li>
             </ul>
          `;
    document.querySelector('.file-info').innerHTML = fileInfo;

    img_Error.innerHTML = '';
    imgPreview.style.borderBottom = '5px solid rgb(142, 192, 142)';
    imgPreview.style.borderRight = '3px solid rgb(142, 192, 142)';
}



///////////////////////////////////////////////////////////////////////////////
// button
var sub = document.querySelector('#submit');

// input id
var firstName = document.getElementById('fName');
var lastName = document.getElementById('lName');
var cnic = document.getElementById('cnicNo');
var cellno = document.getElementById('cellNo');
var birthDate = document.getElementById('bDate');
var proGrams = document.getElementById('programs');
var email = document.getElementById('eMail');

// span id --->> error
var fnError = document.getElementById('fError');
var lnError = document.getElementById('lError');
var cnic_Error = document.getElementById('cnicError');
var cn_Error = document.getElementById('cnError');
var date_Error = document.getElementById('dError');
var email_Error = document.getElementById('emailError');


sub.addEventListener('click', subFunc)
function subFunc() {

    //// first name validation
    if (firstName.value == '') {
        fnError.innerHTML = 'Enter Your First Name';
        fnError.style.color = 'red';
        firstName.style.borderBottom = '5px solid red';
        firstName.style.borderRight = '3px solid red';

    }
    else if (firstName.value.length < 3) {
        fnError.innerHTML = 'First Name length must be atleast 3 characters';
        fnError.style.color = 'red';
        firstName.style.borderBottom = '5px solid red';
        firstName.style.borderRight = '3px solid red';

    }
    else {
        fnError.innerHTML = '';
        fnError.style.color = 'green';
        firstName.style.borderBottom = '5px solid green';
        firstName.style.borderRight = '3px solid green';
    }

    //// last name validation
    if (lastName.value == '') {
        lnError.innerHTML = 'Enter Your Last Name';
        lnError.style.color = 'red';
        lastName.style.borderBottom = '5px solid red';
        lastName.style.borderRight = '3px solid red';

    }
    else if (lastName.value.length < 3) {
        lnError.innerHTML = 'Last Name length must be atleast 3 characters';
        lnError.style.color = 'red';
        lastName.style.borderBottom = '5px solid red';
        lastName.style.borderRight = '3px solid red';

    }
    else {
        lnError.innerHTML = '';
        lnError.style.color = 'green';
        lastName.style.borderBottom = '5px solid green';
        lastName.style.borderRight = '3px solid green';
    }

    //// cnic no. validation
    if (cnic.value == '') {
        cnic_Error.innerHTML = 'Enter Your CNIC No.';
        cnic_Error.style.color = 'red';
        cnic.style.borderBottom = '5px solid red';
        cnic.style.borderRight = '3px solid red';
    }
    else {
        // else if (cnic.value.match(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/)) {
        cnic_Error.innerHTML = '';
        cnic_Error.style.color = 'green';
        cnic.style.borderBottom = '5px solid green';
        cnic.style.borderRight = '3px solid green';
    }

    //// Cell no. validation
    if (cellno.value == '') {
        cn_Error.innerHTML = 'Enter Your Cell No.';
        cn_Error.style.color = 'red';
        cellno.style.borderBottom = '5px solid red';
        cellno.style.borderRight = '3px solid red';
    }
    else if (cellno.value.match(/^[+92]{0,3}[-\s\.]?[[0]{0,1}]*[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)) {
        cn_Error.innerHTML = '';
        cn_Error.style.color = 'green';
        cellno.style.borderBottom = '5px solid green';
        cellno.style.borderRight = '3px solid green';
    }
    else {
        cn_Error.innerHTML = 'Invalid Cell No.!';
        cn_Error.style.color = 'red';
        cellno.style.borderBottom = '5px solid red';
        cellno.style.borderRight = '3px solid red';
    }

    //// email validation
    if (email.value == '') {
        email_Error.innerHTML = 'Enter Your Email Address';
        email_Error.style.color = 'red';
        email.style.borderBottom = '5px solid red';
        email.style.borderRight = '3px solid red';
    }
    else if (email.value.match(/^[a-zA-Z0-9_-]*\@[a-zA-Z]{1,9}\.[com]{3}$/)) {
        email_Error.innerHTML = '';
        email_Error.style.color = 'green';
        email.style.borderBottom = '5px solid green';
        email.style.borderRight = '3px solid green';
    }
    else {
        email_Error.innerHTML = 'Invalid Email Address!';
        email_Error.style.color = 'red';
        email.style.borderBottom = '5px solid red';
        email.style.borderRight = '3px solid red';
    }

    //// date of birth validation
    if (birthDate.value == 0) {
        date_Error.innerHTML = 'Enter Date of Birth';
        date_Error.style.color = 'red';
        birthDate.style.borderBottom = '5px solid red';
        birthDate.style.borderRight = '3px solid red';
    }
    else {
        date_Error.innerHTML = '';
        birthDate.style.borderBottom = '5px solid green';
        birthDate.style.borderRight = '3px solid green';
    }

    //// upload image validation
    if (imgFile.value == 0) {
        img_Error.innerHTML = 'Upload Your Image';
        img_Error.style.color = 'red';
        imgPreview.style.borderBottom = '5px solid red';
        imgPreview.style.borderRight = '3px solid red';
    }
    else {
        img_Error.innerHTML = '';
        imgPreview.style.borderBottom = '5px solid green';
        imgPreview.style.borderRight = '3px solid green';
    }


    //////////////////////////////////////////////////////////////////


    //// traversing of form ---->>> DOM MANIPULATION
    var tableRow0 = document.querySelector('#tableRow0');
    var headCell = tableRow0.appendChild(document.createElement('th'));
        headCell.innerHTML = "Details";


    //// table Row selectors
    var tableRow1 = document.querySelector('#tableRow1');
    var tableRow2 = document.querySelector('#tableRow2');
    var tableRow3 = document.querySelector('#tableRow3');
    var tableRow4 = document.querySelector('#tableRow4');
    var tableRow5 = document.querySelector('#tableRow5');
    var tableRow6 = document.querySelector('#tableRow6');
    var tableRow7 = document.querySelector('#tableRow7');
    var tableRow8 = document.querySelector('#tableRow8');
    var tableRow9 = document.querySelector('#tableRow9');
    var tableRow10 = document.querySelector('#tableRow10');

    //// create table cells (td) for each table row
    var fNameCell = tableRow1.appendChild(document.createElement('td'));
    var lNameCell = tableRow2.appendChild(document.createElement('td'));
    var cnicCell = tableRow3.appendChild(document.createElement('td'));
    var cnCell = tableRow4.appendChild(document.createElement('td'));
    var emailCell = tableRow5.appendChild(document.createElement('td'));
    var proCell = tableRow6.appendChild(document.createElement('td'));
    var regCell = tableRow7.appendChild(document.createElement('td'));
    var imgCell = tableRow8.appendChild(document.createElement('td'));

    imgCell.id = 'imgId';

    //// create delete and edit buttons in table
    var delCell = tableRow9.appendChild(document.createElement('td'));
    var editCell = tableRow10.appendChild(document.createElement('td'));

    //// delete button
    var delBtn = delCell.appendChild(document.createElement('button'));
    delBtn.innerHTML = 'Delete';
    delBtn.id = 'delete';
    delBtn.className = 'btn';

    //// edit button
    var editBtn = editCell.appendChild(document.createElement('button'));
    editBtn.innerHTML = 'Edit';
    editBtn.id = 'edit';
    editBtn.className = 'btn';

    //// update button
    var upSub = document.createElement('button');
    upSub.innerHTML = 'Update';
    upSub.id = 'update';
    upSub.className = 'btn input1 fw-bold subUp';

    // -----------------------------------------------
    ////  -------- Insert input values in table ------

    var data1 = fNameCell.innerHTML = firstName.value;
    var data2 = lNameCell.innerHTML = lastName.value;
    var data3 = cnicCell.innerHTML = cnic.value;
    var data4 = cnCell.innerHTML = cellno.value;
    var data5 = emailCell.innerHTML = email.value;

    ////  -------- Insert select values in table ------
    if (proGram.value == "cs") {
        proCell.innerHTML = optGroup1.label;
    }
    else if (proGram.value == "chemistry") {
        proCell.innerHTML = optGroup2.label;
    }
    else if (proGram.value == "msMath") {
        proCell.innerHTML = optGroup3.label;
    }
    else {
        proCell.innerHTML = '';
    }

    //// Reg Number substring
    var dateYear = birthDate.value.substring(0, 4);
    var randomNo = Math.floor(Math.random() * 100);
    var dateDay = birthDate.value.substring(8, 10);
    var pGrams = proGrams.value.substring(0, 4);
    var main = pGrams.concat(' ' + dateYear + dateDay + randomNo);
    regCell.innerHTML = main;

    //// img path in table
    imgCell.innerHTML = imgFile.value;

    //// Empty all input values
    firstName.value = '';
    lastName.value = '';
    cnic.value = '';
    cellno.value = '';
    email.value = '';
    birthDate.value = '';
    document.querySelector('.file-info').innerHTML = '';
    imgPreview.innerHTML = 'Image Preview';


    //// delete button
    let arr = [fNameCell, lNameCell, cnicCell, cnCell, emailCell, proCell, regCell, imgCell, delCell, editCell];
    delBtn.addEventListener('click', delFunc)
    function delFunc() {
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }

        // headCell.innerHTML = "";
        headCell.remove();

        //// empty input values
        firstName.value = '';
        lastName.value = '';
        cnic.value = '';
        cellno.value = '';
        email.value = '';
        birthDate.value = '';

        //// empty input error values
        fnError.innerHTML = '';
        lnError.innerHTML = '';
        cnic_Error.innerHTML = '';
        cn_Error.innerHTML = '';
        email_Error.innerHTML = '';
        date_Error.innerHTML = '';
        img_Error.innerHTML = '';

        imgPreview.innerHTML = 'Image Preview';

        proCell.innerHTML = "";

        //// empty image preview div value
        document.querySelector('.file-info').innerHTML = "";

        //// input borders styling
        firstName.style.borderRight = '3px solid rgb(142, 192, 142)';
        firstName.style.borderBottom = '5px solid rgb(142, 192, 142)';
        lastName.style.borderRight = '3px solid rgb(142, 192, 142)';
        lastName.style.borderBottom = '5px solid rgb(142, 192, 142)';
        cnic.style.borderRight = '3px solid rgb(142, 192, 142)';
        cnic.style.borderBottom = '5px solid rgb(142, 192, 142)';
        cellno.style.borderRight = '3px solid rgb(142, 192, 142)';
        cellno.style.borderBottom = '5px solid rgb(142, 192, 142)';
        email.style.borderRight = '3px solid rgb(142, 192, 142)';
        email.style.borderBottom = '5px solid rgb(142, 192, 142)';
        birthDate.style.borderBottom = '5px solid rgb(142, 192, 142)';
        birthDate.style.borderRight = '3px solid rgb(142, 192, 142)';
        imgPreview.style.borderBottom = '5px solid rgb(142, 192, 142)';
        imgPreview.style.borderRight = '3px solid rgb(142, 192, 142)';

        //// changing submit button into update button
        var brd1 = document.getElementById('frm');
        brd1.replaceChild(sub, upSub);
    }

    //// edit button
    editBtn.addEventListener('click', editFunc)
    function editFunc() {
        //// insert input values from table data
        firstName.value = data1;
        lastName.value = data2;
        cnic.value = data3;
        cellno.value = data4;
        email.value = data5;



        proCell.innerHTML = "";

        //// empty table cell data on edit button
        fNameCell.innerHTML = '';
        lNameCell.innerHTML = '';
        cnicCell.innerHTML = '';
        cnCell.innerHTML = '';
        regCell.innerHTML = '';
        emailCell.innerHTML = '';
        imgCell.innerHTML = '';

        //// input border styling 
        firstName.style.borderRight = '3px solid blue';
        firstName.style.borderBottom = '5px solid blue';
        lastName.style.borderRight = '3px solid blue';
        lastName.style.borderBottom = '5px solid blue';
        cnic.style.borderRight = '3px solid blue';
        cnic.style.borderBottom = '5px solid blue';
        cellno.style.borderRight = '3px solid blue';
        cellno.style.borderBottom = '5px solid blue';
        email.style.borderRight = '3px solid blue';
        email.style.borderBottom = '5px solid blue';
        birthDate.style.borderBottom = '5px solid blue';
        birthDate.style.borderRight = '3px solid blue';
        imgPreview.style.borderBottom = '5px solid blue';
        imgPreview.style.borderRight = '3px solid blue';

        //// changing update button into submit button
        var brd1 = document.getElementById('frm');
        brd1.replaceChild(upSub, sub)


    }

    //// update button
    upSub.addEventListener('click', upDateFunc)
    function upDateFunc() {
        // event.preventDefault();

        //// changing submit button into update button
        var brd1 = document.getElementById('frm');
        brd1.replaceChild(sub, upSub)

        //// input border styling
        firstName.style.borderRight = '3px solid rgb(142, 192, 142)';
        firstName.style.borderBottom = '5px solid rgb(142, 192, 142)'
        lastName.style.borderBottom = '5px solid rgb(142, 192, 142)';
        lastName.style.borderRight = '3px solid rgb(142, 192, 142)';
        cnic.style.borderBottom = '5px solid rgb(142, 192, 142)';
        cnic.style.borderRight = '3px solid rgb(142, 192, 142)';
        cellno.style.borderBottom = '5px solid rgb(142, 192, 142)';
        cellno.style.borderRight = '3px solid rgb(142, 192, 142)';
        email.style.borderBottom = '5px solid rgb(142, 192, 142)';
        email.style.borderRight = '3px solid rgb(142, 192, 142)';
        birthDate.style.borderBottom = '5px solid rgb(142, 192, 142)';
        birthDate.style.borderRight = '3px solid rgb(142, 192, 142)';
        imgPreview.style.borderBottom = '5px solid rgb(142, 192, 142)';
        imgPreview.style.borderRight = '3px solid rgb(142, 192, 142)';

        //// insert table cell values from input values on update event
        fNameCell.innerHTML = fName.value;
        lNameCell.innerHTML = lName.value;
        cnicCell.innerHTML = cnic.value;
        cnCell.innerHTML = cellno.value;
        emailCell.innerHTML = email.value;
        regCell.innerHTML = main;
        imgCell.innerHTML = imgFile.value;

        ////  -------- Insert select values in table ------
        if (proGram.value == "cs") {
            proCell.innerHTML = optGroup1.label;
        }
        else if (proGram.value == "chemistry") {
            proCell.innerHTML = optGroup2.label;
        }
        else if (proGram.value == "msMath") {
            proCell.innerHTML = optGroup3.label;
        }
        else {
            proCell.innerHTML = '';
        }

        document.querySelector('.file-info').innerHTML = '';
    imgPreview.innerHTML = 'Image Preview';

        //// empty input values on update event 
        firstName.value = '';
        lastName.value = '';
        cnic.value = '';
        cellno.value = '';
        email.value = '';

        birthDate.value = '';

        fnError.innerHTML = '';
        lnError.innerHTML = '';
        cnic_Error.innerHTML = '';
        cn_Error.innerHTML = '';
        email_Error.innerHTML = '';
        date_Error.innerHTML = '';
        img_Error.innerHTML = '';


    }


};
