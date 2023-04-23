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
