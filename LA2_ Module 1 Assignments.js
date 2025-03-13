// Student Data
const students = [
  { firstName: "Ian Kenneth", middleName: "G.", lastName: "Gacusan", birthdate: "October 19, 2006", birthplace: "Tablac, Candon City, Ilocos Sur", address: "Tablac, Candon City, Ilocos Sur", course: "BSCS 1st Year", dreamJob: "Professional Programmer" },
  { firstName: "Arvin", middleName: "Gacilan", lastName: "Santander", birthdate: "September 18, 2006", birthplace: "Caterman, Candon City", address: "Caterman, Candon City, Ilocos Sur", course: "BSCS 1A", dreamJob: "Game Developer" },
  { firstName: "John Patrick", middleName: "Mapanao", lastName: "Andaquig", birthdate: "April 24, 2006", birthplace: "Tampugo, Sta. Cruz, Ilocos Sur", address: "Tampugo, Sta. Cruz, Ilocos Sur", course: "BSCS", dreamJob: "Software Developer" }
];

// Generate and display student info
students.forEach(({ firstName, middleName = "", lastName, birthdate, birthplace, address, course, dreamJob }) => 
  console.log(`${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()} was born on ${birthdate} at ${birthplace}, lives in ${address}, taking ${course}, and dreams of becoming a ${dreamJob.toLowerCase()}.`)
);

// Mathematical Operations
let [a, b, c, d, e] = [25, 20, 12, "15", 15];
d = Number(d);

console.log(`Sum: ${a + b + c + d + e}`);
console.log(`d > e: ${d > e}, d < e: ${d < e}, d === e: ${d === e}`);
console.log(`Subtraction: ${a - b - c - d - e}, Exponentiation: ${e ** c}`);

c = 3;
console.log(`Updated Exponentiation: ${e ** c}`);
