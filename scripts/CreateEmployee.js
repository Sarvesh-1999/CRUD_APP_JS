const employeeFormEle = document.getElementById("employee-form");

console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  
});
