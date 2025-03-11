const employeeJsonFormat = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32, Laham St.",
      "city": "Innsbruck",
      "country": "Austria"
    },
    "referred-by": "E0012"
  }`;
  
  console.log(`Initial Json Format : ${employeeJsonFormat}`);
  
  console.log("========== Json to Object ====================");
  const employeeObject = JSON.parse(employeeJsonFormat);
  console.log(employeeObject);
  console.log(`Log Role 'Dev': ${employeeObject.role[0]}`);
  const lastName = employeeObject.name.split(" ")[1];
  console.log(`Log Last Name 'Melon': ${lastName}`);
  const joinYear = employeeObject.doj.split("-")[2];
  console.log(`Joining of year of employee : ${joinYear}`);
  
  