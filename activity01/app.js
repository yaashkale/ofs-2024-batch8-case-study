import fs from 'fs';

function addEmployee(empId, name, salary) {
    let employees = [];
    
    
    if (fs.existsSync('employee.json')) {
        const data = fs.readFileSync('employee.json');
        employees = JSON.parse(data);
    }


    const newEmployee = {
        empId: empId,
        name: name,
        salary: salary
    };

    employees.push(newEmployee);

 
    fs.writeFileSync('employee.json', JSON.stringify(employees, null, 4));
    console.log('Employee added successfully');
}

function printEmployees() {
    if (fs.existsSync('employee.json')) {
        const data = fs.readFileSync('employee.json');
        const employees = JSON.parse(data);
        console.log('All employees:');
        
        employees.forEach(emp => {
            console.log(`ID: ${emp.empId}, Name: ${emp.name}, Salary: ${emp.salary}`);
        });
    } else {
        console.log('No employees found!');
    }
}


addEmployee(1, 'Yash Kale', 50000);
addEmployee(2, 'Karthik Kaimaparambil', 40000);
addEmployee(3, 'Karthik Nambiar', 60000);


printEmployees();
