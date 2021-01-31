// Remove
var index, table = document.getElementById('table');
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].cells[8].onclick = function()
    {
        var c = confirm("do you want to delete this row");
        if(c === true)
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }
        
        //console.log(index);
    };
    
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

// check the empty input
function checkEmptyInput1()
{
    var isEmpty = false,
        A = document.getElementById("A").value,
        B = document.getElementById("B").value,
        C = document.getElementById("C").value;
        D = document.getElementById("D").value,
        E = document.getElementById("E").value;

    if(A === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(B === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(C === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(D === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(E === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}


// display selected row data into input text
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          rIndex = this.rowIndex;
          document.getElementById("number").value = this.cells[0].innerHTML;
          document.getElementById("A").value = this.cells[1].innerHTML;
          document.getElementById("B").value = this.cells[2].innerHTML;
          document.getElementById("C").value = this.cells[3].innerHTML;
          document.getElementById("D").value = this.cells[4].innerHTML;
          document.getElementById("E").value = this.cells[5].innerHTML;
          document.getElementById("View").value = this.cells[6].innerHTML;
          document.getElementById("Edit").value = this.cells[7].innerHTML;
          document.getElementById("Remove").value = this.cells[8].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
    var number = document.getElementById("number").value,
        A = document.getElementById("A").value,
        B = document.getElementById("B").value,
        C = document.getElementById("C").value;
        D = document.getElementById("D").value,
        E = document.getElementById("E").value;
        View = document.getElementById("View").value;
        Edit = document.getElementById("Edit").value,
        Remove = document.getElementById("Remove").value;
   if(!checkEmptyInput1()){
    table.rows[rIndex].cells[0].innerHTML = number;
    table.rows[rIndex].cells[1].innerHTML = A;
    table.rows[rIndex].cells[2].innerHTML = B;
    table.rows[rIndex].cells[3].innerHTML = C;
    table.rows[rIndex].cells[4].innerHTML = D;
    table.rows[rIndex].cells[5].innerHTML = E;
    table.rows[rIndex].cells[6].innerHTML = View;
    table.rows[rIndex].cells[7].innerHTML = Edit;
    table.rows[rIndex].cells[8].innerHTML = Remove;
  }
}



// check the empty input - Add
// check the empty input
function checkEmptyInput2()
{
    var isEmpty = false,
        A1 = document.getElementById("A1").value,
        B1 = document.getElementById("B1").value,
        C1 = document.getElementById("C1").value;
        D1 = document.getElementById("D1").value,
        E1 = document.getElementById("E1").value;

    if(A1 === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(B1 === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(C1 === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(D1 === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    else if(E1 === ""){
        alert("Text Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}