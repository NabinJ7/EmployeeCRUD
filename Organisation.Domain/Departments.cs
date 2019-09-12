using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Organisation.Domain
{
    [DataContract]
    public class Departments
    {
        [DataMember]
        public int DeptId { get; set; }

        [DataMember]
        public Guid? Guid { get; set; }

        [DataMember]
        public string DeptName { get; set; }
    }
}
