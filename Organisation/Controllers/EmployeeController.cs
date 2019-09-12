using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Organisation.Data;
using Organisation.Domain;

namespace Organisation.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {
        private readonly OrganisationEntities _context;

        public EmployeeController()
        {
            _context = new OrganisationEntities();
        }

        [HttpGet]
        [Route("EmployeeList")]
        public IHttpActionResult Get()
        {
            IList<Employees> employees = null;

            employees = _context.Employees
                        .Select(s => new Employees()
                        {
                            EmpId = s.ID,
                            FirstName = s.FirstName,
                            LastName = s.LastName,
                            DeptId = s.DeptId,
                            Designation = s.Designation,
                            ManagerName = s.ManagerName,
                            EmpType = s.EmployeeType
                        }).ToList<Employees>();


            if (employees.Count == 0)
            {
                return NotFound();
            }

            return Ok(employees);
        }

        [HttpPost]
        [Route("AddEmployee")]
        public Employee Post([FromBody]Employee emp)
        {
            if (emp == null)
            {
                throw new ArgumentNullException("Employee");
            }

            Employee newEmp = new Employee();

            try
            {
                newEmp.FirstName = emp.FirstName;
                newEmp.LastName = emp.LastName;
                newEmp.DeptId = emp.DeptId;
                newEmp.Designation = emp.Designation;
                newEmp.EmployeeType = emp.EmployeeType;
                newEmp.ManagerName = emp.ManagerName;
                newEmp.EmpImage = emp.EmpImage;
                _context.Employees.Add(newEmp);
                int rowsAffected = _context.SaveChanges();

                return rowsAffected > 0 ? emp : null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpPost]
        [Route("UpdateEmployee")]
        public bool Put(int id, [FromBody]Employee emp)
        {
            emp.ID = id;

            if (emp == null)
            {
                throw new ArgumentNullException("Employee");
            }

            var employee = _context.Employees.Single(a => a.ID == emp.ID);

            if (employee != null)
            {
                employee.FirstName = emp.FirstName;
                employee.LastName = emp.LastName;
                employee.Designation = emp.Designation;
                employee.EmployeeType = emp.EmployeeType;
                employee.ManagerName = emp.ManagerName;
                employee.EmpImage = emp.EmpImage;
                employee.DeptId = emp.DeptId;

                int rowsAffected = _context.SaveChanges();

                return rowsAffected > 0 ? true : false;
            }
            else
            {
                return false;
            }

        }

        [HttpDelete]
        [Route("DeleteEmployee")]
        public bool Delete(int id)
        {
            Employee emp = _context.Employees.Find(id);
            _context.Employees.Remove(emp);

            int rowsAffected = _context.SaveChanges();

            return rowsAffected > 0 ? true : false;
        }
    }
}
