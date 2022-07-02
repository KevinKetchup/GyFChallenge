using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Price = 10,
                    UploadDate = Convert.ToDateTime("25/10/2019"),
                    Category = "PRODDOS"
                },
                new Product
                {
                    Price = 60,
                    UploadDate = Convert.ToDateTime("21/10/2019"),
                    Category = "PRODUNO"
                },
                new Product
                {
                    Price = 5,
                    UploadDate = Convert.ToDateTime("22/10/2019"),
                    Category = "PRODDOS"
                },
                new Product
                {
                    Price = 5,
                    UploadDate = Convert.ToDateTime("29/10/2019"),
                    Category = "PRODUNO"
                },
                new Product
                {
                    Price = 15,
                    UploadDate = Convert.ToDateTime("11/09/2019"),
                    Category = "PRODDOS"
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}

         