using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace todoAPI.Models
{
    public class TodoDetail
    {
        // Pascal casing for class properties

        /// <summary>
        /// Todo Id
        /// </summary>
        [Key]
        public int TodoDetailId { get; set; }

        /// <summary>
        /// Todo task name
        /// </summary>
        [Column(TypeName = "nvarchar(100)")]
        public string TaskName { get; set; }

        /// <summary>
        /// Todo priority
        /// </summary>
        [Column(TypeName = "nvarchar(6)")]
        public string Priority { get; set; }

        /// <summary>
        /// Todo duedate
        /// </summary>
        [Column(TypeName = "nvarchar(10)")]
        public string DueDate { get; set; }
    }
}
