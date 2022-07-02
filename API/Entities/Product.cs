using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public long Price { get; set; }
        public DateTime UploadDate { get; set; }
        public string Category { get; set; }
    }
}