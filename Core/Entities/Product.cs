using System.Collections.Generic;
using System.Linq;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
       public string Name { get; set; }
         public string NameEn { get; set; }
         public decimal OldPrice { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
        public ICollection<Photo> Photos { get; set; } = new List<Photo>();
        public string PictureUrl { get; set; } 
       public bool IsExternal { get; set; } 

    }
}