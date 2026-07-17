import React from 'react';
function ListExample() {
  // const employees = [
  //   {
  //     id: 1,
  //     name: "Kiran",
  //     salary: 50000,
  //     skills: ["Java", "React", "SQL"]
  //   },
  //   {
  //     id: 2,
  //     name: "Divya",
  //     salary: 70000,
  //     skills: ["Python", "Flask"]
  //   }
  // ]
  const companies = [
    {
      id: 1,
      name: "Google",
      employees: [
        {
          id: 101,
          name: "Rahul"
        },
        {
          id: 102,
          name: "Kiran"
        }
      ]
    },
    {
      id: 2,
      name: "Microsoft",
      employees: [
        {
          id: 201,
          name: "Divya"
        },
        {
          id: 202,
          name: "Sai"
        }
      ]
    }
  ]

  return (
    <>
      {/* <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <h3>{employee.name}</h3>
            <ul>
              {employee.skills.map((esm) => (
                <li key={esm}>
                  {esm}

                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <ul>
        {companies.map((company)=>(
          <li key={company.id}>
            <h3>{company.name}</h3>
            <ul>
              {company.employees.map((employee)=>(<li key={employee.id}>
                {employee.name}
              </li>))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )

}
export default ListExample;