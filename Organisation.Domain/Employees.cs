using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Organisation.Domain
{
    [DataContract]
    public class Employees
    {
        [DataMember]
        public int EmpId { get; set; }

        [DataMember]
        public string FirstName { get; set; }

        [DataMember]
        public string LastName { get; set; }

        [DataMember(Name = "Department")]
        public virtual Departments Department { get; set; }

        [ForeignKey("Department")]
        [DataMember]
        public int DeptId { get; set; }

        [DataMember]
        public Guid? Guid { get; set; }

        [DataMember]
        public string Designation { get; set; }

        [DataMember]
        public string ManagerName { get; set; }

        [DataMember]
        public string EmpType { get; set; }

        [DataMember]
        public string Notes { get; set; }

        [DataMember]
        public string EmpImage { get; set; }
    }
}
