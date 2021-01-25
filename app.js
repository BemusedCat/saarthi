$("form").submit((e) => {
  var myName = $("#name")[0];
  var empid = $("#empid")[0];
  var dept = $("#dept")[0];
  var doj = $("#doj")[0];
  var email = $("#email")[0];
  var table = $("#myTableData")[0];
  var rowCount = table.rows.length;
  console.log(rowCount);
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = '<input type="button" value = "✂️ " class="removebutton">';
  row.insertCell(1).innerHTML = myName.value;
  row.insertCell(2).innerHTML = empid.value;
  row.insertCell(3).innerHTML = dept.value;
  row.insertCell(4).innerHTML = doj.value;
  row.insertCell(5).innerHTML = email.value;
  e.preventDefault();
  $('#myModal').modal('hide');
  return false;
});

$(document).on('click', '.removebutton', function () {
     $(this).closest('tr').remove();
     return false;
 });
