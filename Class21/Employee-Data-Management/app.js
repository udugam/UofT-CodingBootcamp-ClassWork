
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuo1gTfq1L3Z7JzNTtFb42kNH6k2_1ysY",
    authDomain: "employee-data-system.firebaseapp.com",
    databaseURL: "https://employee-data-system.firebaseio.com",
    projectId: "employee-data-system",
    storageBucket: "employee-data-system.appspot.com",
    messagingSenderId: "460975632123"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Setup listener for everytime a child is added to the root for the database
  database.ref().on("child_added", function(snapshot) {
    var newEmployee = snapshot.val();

    var monthsWorked = moment().diff(moment(newEmployee.start), "months");
    
    var rowDiv = $("<tr>");
    rowDiv.append("<td>"+newEmployee.name+"</td>");
    rowDiv.append("<td>"+newEmployee.role+"</td>");
    rowDiv.append("<td>"+newEmployee.start+"</td>");
    rowDiv.append("<td>"+monthsWorked+"</td>");
    rowDiv.append("<td>"+newEmployee.rate+"</td>");
    rowDiv.append("<td>"+monthsWorked*newEmployee.rate+"</td>");

    
    //Adding constructed rowDiv to table body
    $("tbody").append(rowDiv);

  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  $(".btn").on("click", function() {
    event.preventDefault();

    var employeeName = $('#name').val().trim();
    var employeeRole = $('#role').val().trim();
    var employeeStart = $('#start').val().trim();
    var employeeRate = $('#rate').val().trim();
    var format = "MM/DD/YYYY";
    
    //Using moment.js to convert user inputed date into readable format to use with moment.js
    var convertedDate = moment(employeeStart,format);

    database.ref().push({
        name: employeeName,
        role: employeeRole,
        start: moment(convertedDate).format(format),
        rate: employeeRate
    })

  })


