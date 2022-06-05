const STUDENTS_DATA = [{

    NAME: "abc",
    MARKS: 95,
    RESULT: "",
},
{
    NAME: "def",
    MARKS: 91,
    RESULT: "",
},
{
    NAME: "ghi",
    MARKS: 91,
    RESULT: "",
},
{
    NAME: "jkl",
    MARKS: 94,
    RESULT: "",
},
{
    NAME: "mno",
    MARKS: 98,
    RESULT: "",
},
{
    NAME: "pqr",
    MARKS: 93,
    RESULT: "",
},
{
    NAME: "stu",
    MARKS: 97,
    RESULT: "",
},
{
    NAME: "vwx",
    MARKS: 93,
    RESULT: "",
},
{
    NAME: "xyz",
    MARKS: 90,
    RESULT: "",
},
{
    NAME: "yzx",
    MARKS: 34,
    RESULT: "",


}];
function addCellsToRow(studentData, row, rowIndex) {
    for(let prop in studentData) {
        const endOfRow = row.cells.length;
        const newlyAddedCell = row.insertCell(endOfRow);
        newlyAddedCell.id = `row_${rowIndex}_${prop}`;
        newlyAddedCell.innerHTML = studentData[prop];
    }
}

function getTableReady() {
    const table = document.getElementById('studentsTable1');
    table.innerHTML = null; // clearing the table before adding new rows
    const insertedRow = table.insertRow(0);
    insertedRow.insertCell(0).innerHTML = 'Name';
    insertedRow.insertCell(1).innerHTML = 'Marks';
    insertedRow.insertCell(2).innerHTML = 'Result';

}

function addStudentsToTabls() {
    getTableReady()
    const table = document.getElementById('studentsTable1');
    for(let i = 0; i < STUDENTS_DATA.length; i += 1) {
        const endOfTable = table.rows.length;
        const newlyAddedRow = table.insertRow(endOfTable);
        newlyAddedRow.id = `row_${i}`;
        addCellsToRow(STUDENTS_DATA[i], newlyAddedRow, i);
    }
}

function evaluateResults(){
    const table = document.getElementById('studentsTable1');
    for(let i = 0; i < table.rows.length - 1; i += 1) {
        const studentMarks = document.getElementById(`row_${i}_marks`).innerHTML;
        if(studentMarks < 20) {
            document.getElementById(`row_${i}_result`).innerHTML = 'FAIL'
        } else {
            document.getElementById(`row_${i}_result`).innerHTML = 'PASS'
        }
    }
}
