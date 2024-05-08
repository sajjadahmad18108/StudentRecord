let studentRecords = [];

function addStudent() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let studentDetail = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        dob: dob,
        email: email,
        phone: phone,
    };

    studentRecords.push(studentDetail);
    console.log(studentDetail);
     document.getElementById("studentForm").reset();
   displayStudentRecords();
}

function displayStudentRecords() {
    let tableBody = document.getElementById("resultsBody");
    tableBody.innerHTML = '';

    for (let i = 0; i < studentRecords.length; i++) {
        let row = tableBody.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.textContent = studentRecords[i].firstName;
        cell2.textContent = studentRecords[i].lastName;
        cell3.textContent = studentRecords[i].gender;
        cell4.textContent = studentRecords[i].dob;
        cell5.textContent = studentRecords[i].email;
        cell6.textContent = studentRecords[i].phone;
    }

    document.getElementById("searchResults").style.display = 'block';
}

function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';

    const filteredStudents = studentRecords.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(searchInput);
    });

    if (filteredStudents.length > 0) {
        filteredStudents.forEach(student => {
            let row = resultsBody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);

            cell1.textContent = student.firstName;
            cell2.textContent = student.lastName;
            cell3.textContent = student.gender;
            cell4.textContent = student.dob;
            cell5.textContent = student.email;
            cell6.textContent = student.phone;
        });
    } else {
        document.getElementById('searchResults').style.display = 'none';
    }
}
