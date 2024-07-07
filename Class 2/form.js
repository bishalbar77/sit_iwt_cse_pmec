var form = document.getElementById('insertStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    
    fetch('http://localhost:3001/insert_student', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name: name})
    }).then(response => response.json());
    
    console.log("Form submitted!");

});
