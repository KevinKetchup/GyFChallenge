using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Extensions
{
    public static class ProductExtension
    {
        public static IQueryable<Product> Search(this IQueryable<Product> query,string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            return query.Where(p => p.Price.ToString().Contains(searchTerm));
        }
    }
}