var student1 = {
    firstName: 'Dj',
    lastName: 'Dem',
    age: 25,
    location: 'Nairobi',
};
var student2 = {
    firstName: 'The',
    lastName: 'Dem',
    age: 25,
    location: 'USIU',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
