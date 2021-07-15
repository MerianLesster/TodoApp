using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todoAPI.Models
{
    public class TodoDetailContext : DbContext
    {
        public TodoDetailContext(DbContextOptions<TodoDetailContext> options) : base(options)
        {

        }

        public DbSet<TodoDetail> TodoDetails { get; set; }
    }
}
