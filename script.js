/** @format */


let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
  }

  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
arr.forEach((student) => {
    const { name, marks } = student; 
    if (marks > 50) {
      console.log(`${name} has scored above 50 with marks ${marks}`); 
    }
  });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log("Updated array with new student (addData):", arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.forEach((student, index) => { 
        const { marks } = student;
        if (marks < 50) {
          arr.splice(index, 1); 
        }
      });
    
      console.log("Array after removing failed students:", arr);
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "maria", age: "22", marks: 70 },
        { id: 6, name: "david", age: "21", marks: 88 },
        { id: 7, name: "emma", age: "23", marks: 92 },
      ];
      const combinedArray = arr.concat(newArray);
      console.log("Combined array (concatenateArray):", combinedArray);
  }
