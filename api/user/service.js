import { pool } from "../../configurations/connection.js";

export const create = (data, callback) => {
  const sql = `insert into EmployeeData(name,age,education,jobProfile) values(?,?,?,?)`;
  pool.query(
    sql,
    [data.name, data.age, data.education, data.jobProfile],
    (error, results, fields) => {
      if (error) return callback(error);
      return callback(null, results);
    }
  );
};
export const extraDetails = (data, callback) => {
  const sql = `insert into EmployeeDetails(experience,location,companies,technologies) values(?,?,?,?)`;
  // console.log(data);
  pool.query(
    sql,
    [data.experience, data.location, data.companies, data.technologies],
    (error, results, fields) => {
      if (error) return callback(error);
      return callback(null, results);
    }
  );
};
export const showDetails = (data, callback) => {
  const sql = `select * from EmployeeData inner join EmployeeDetails on EmployeeData.id = EmployeeDetails.id `;

  pool.query(
    sql,
    [],
    (error, results, fields) => {
      if (error) return callback(error);
      return callback(null, results);
    }
  );
};
