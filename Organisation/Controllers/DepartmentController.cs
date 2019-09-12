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
    [RoutePrefix("api/Department")]
    public class DepartmentController : ApiController
    {
        [HttpGet]
        [Route("DepartmentList")]
        public IHttpActionResult GetDepartment()
        {
            IList<Departments> departments = null;

            using (var ctx = new OrganisationEntities())
            {
                departments = ctx.Departments
                            .Select(s => new Departments()
                            {
                                DeptId = s.Id,
                                DeptName = s.Name,
                                Guid = s.IDGUID
                            }).ToList<Departments>();
            }

            if (departments.Count == 0)
            {
                return NotFound();
            }

            return Ok(departments);
        }
    }
}
