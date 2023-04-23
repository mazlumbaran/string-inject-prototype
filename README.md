# string-inject-prototype

In this project, a JavaScript object is created to store a user's information. Additionally, the user's information is rendered using a template string.

### Usage
To use the project, first populate the user object with the user's information. The following information should be included:

- name: the user's full name (string)
- birthYear: the user's birth year (number)
- salary: the user's salary (number)
- taxFromEmp: tax paid by employee (number)
- taxFromComp: tax paid by company (number)
- company: the name of the company the user works for (string)
- nowYear: the current year when the project is executed (number)

Next, use the renderTemplate function to fill in the template string with the corresponding values from the user object. This function replaces placeholders ({{ }}) in the template string with the relevant values from the object.
 ### Example
The following example shows how the user object and the template string can be used:

```
  const user = {
  name: "John Doe",
  birthYear: 1990,
  salary: 16000,
  taxFromEmp: 1000,
  taxFromComp: 1000,
  company: "Çekino",
  nowYear: 2023
};

const template = " Name: {{name}},\n Age: {{nowYear-birthYear}},\n Company: {{company}},\n Salary: {{salary}},\n Tax: {{taxFromEmp}},\n Net Salary: {{salary-taxFromEmp}},\n Cost To The Company: {{salary+taxFromComp}}";

console.log(renderTemplate(template, user));
```

In this example, the user's information from the user object is inserted into the template string, resulting in the following output:

```
 Name: John Doe,
 Age: 33,
 Company: Çekino,
 Salary: 16000,
 Tax: 1000,
 Net Salary: 15000,
 Cost To The Company: 17000
 ```
