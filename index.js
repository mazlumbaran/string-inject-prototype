const user = {
  name: "John Doe",
  birthYear: 1990,
  salary: 16000,
  taxFromEmp: 1000,
  taxFromComp: 1000,
  company: "Çekino",
  nowYear: 2023
};


function renderTemplate(template, data) {
  const regex = /{{\s*([^}\s]*)\s*}}/g;
  return template.replace(regex, (match, p1) => {
    const keys = p1.split(".");
    let value = data;
    let fnMatch = p1.match(/(.*)\((.*)\)/); // check for function match
    if (fnMatch) {
      const fnName = fnMatch[1];
      const args = fnMatch[2].split(",");
      const fn = eval(fnName);
      value = fn.apply(null, args);
    }
    else if (p1.includes("-")) {
      const keys = p1.split("-");
      const [a, b] = keys.map((key) => data[key.trim()]);
      value = a - b;
      
    } 
    else if (p1.includes("+")) {
      const keys = p1.split("+");
      const [a, b] = keys.map((key) => data[key.trim()]);
      value = a + b;
      
    } 
    else {
      keys.forEach((key) => {
        value = value[key];
      });
    }
    return value;
  });
}



const template = " Name: {{name}},\n Age: {{nowYear-birthYear}},\n Company: {{company}},\n Salary: {{salary}},\n Tax: {{taxFromEmp}},\n Net Salary: {{salary-taxFromEmp}},\n Cost To The Company: {{salary+taxFromComp}}";

console.log(renderTemplate(template, user));