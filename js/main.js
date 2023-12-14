document.addEventListener("DOMContentLoaded", function () {
    var studentInfo = document.getElementById("student-info");
    var studentId = "200520505";  
    var studentName = "Het";     

    studentInfo.textContent = "Student ID: " + studentId + " | Name: " + studentName;
});


fetch('https://api.example.com/data', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    // Process and display data on the page
    console.log(data);
})
.catch(error => console.error('Error:', error));