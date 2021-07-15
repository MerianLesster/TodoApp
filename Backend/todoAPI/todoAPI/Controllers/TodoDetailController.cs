using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todoAPI.Models;

namespace todoAPI.Controllers
{
    /// <summary>
    /// Todo Controller responsible for GET/POST/PUT/DELETE for managing todos
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TodoDetailController : ControllerBase
    {
        private readonly TodoDetailContext _context;

        public TodoDetailController(TodoDetailContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This GET method returns all the todos
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoDetail>>> GetTodoDetails()
        {
            return await _context.TodoDetails.ToListAsync();
        }

        /// <summary>
        /// This GET method returns the todo with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoDetail>> GetTodoDetail(int id)
        {
            var todoDetail = await _context.TodoDetails.FindAsync(id);

            if (todoDetail == null)
            {
                return NotFound();
            }

            return todoDetail;
        }

        /// <summary>
        /// This PUT method updates the existing todo with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="todoDetail"></param>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoDetail(int id, TodoDetail todoDetail)
        {
            if (id != todoDetail.TodoDetailId)
            {
                return BadRequest();
            }

            _context.Entry(todoDetail).State = EntityState.Modified;

            try
            {
                // save to DB
                await _context.SaveChangesAsync();
            }
            // handle possible concurrency exception to avoid modifying same records by multiple users
            catch (DbUpdateConcurrencyException)
            {
                // Checks whether the todo record exists and if it does not exist Show 404 NotFound exception
                if (!TodoDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            // returns NoContent when the request is successful
            return NoContent();
        }

        /// <summary>
        /// This POST method adds a new todo
        /// </summary>
        /// <param name="todoDetail"></param>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoDetail>> PostTodoDetail(TodoDetail todoDetail)
        {
            _context.TodoDetails.Add(todoDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoDetail", new { id = todoDetail.TodoDetailId }, todoDetail);
        }


        /// <summary>
        /// This DELETE method deletes the existing todo with the specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoDetail(int id)
        {
            var todoDetail = await _context.TodoDetails.FindAsync(id);
            // check if record exists
            if (todoDetail == null)
            {
                return NotFound();
            }

            // if exists then delete the record 
            _context.TodoDetails.Remove(todoDetail);
            // save to DB
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoDetailExists(int id)
        {
            return _context.TodoDetails.Any(e => e.TodoDetailId == id);
        }
    }
}
