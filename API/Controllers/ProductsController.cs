using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            this._context = context;
        }

        [HttpGet]
        
        public async Task<ActionResult<List<Product>>> GetProducts(string searchTerm)
        {
            var query = _context.Products
            
            .Search(searchTerm);

            return await query.ToListAsync();
        }
    }
}

// declare @maxPrice int = 100

// select top 1 uno.id, uno.price, uno.type, dos.id, dos.price, dos.type
// from products uno, products dos
// where (uno.price + dos.price) <= @maxPrice 
// order by (uno.price + dos.price) desc	

//Queda pendiente implementar esta query(ejemplo) con Dapper