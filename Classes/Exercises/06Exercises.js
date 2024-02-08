class Company {
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!')
        } else if (Number(salary) < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position })
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment(){
        return this._findAverageLargestSalary(this.departments);
    }

    _findAverageLargestSalary(data){
        let max = 0;
        let departmentWithMaxSalary;
        for(let department in data) {
            let totalSalary = data[department].reduce((sum, employee) => sum + employee.salary, 0)
            let averageSalary = totalSalary / data[department].length;

            if (averageSalary > max) {
                max = averageSalary;
                departmentWithMaxSalary = department;
            }
        }

        let employees = this.departments[departmentWithMaxSalary];
        employees.sort((a, b) => {
            if (b.salary !== a.salary) {
                return b.salary - a.salary;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
        
        let output = `Best Department is: ${departmentWithMaxSalary}\n`;
        output += `Average salary: ${max.toFixed(2)}\n`;
        employees.forEach((employee, index) => {
            output += `${employee.name} ${employee.salary} ${employee.position}`;
            if (index < employees.length - 1) {
                output += "\n";
            }
        });
        return output;
    }
}

let c = new Company();

console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));

console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));

console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));

console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));

console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));

console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));

console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));

console.log(c.bestDepartment());