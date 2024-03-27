using System.Text.Json.Serialization;

namespace BE_CRUDCustomers.Models.DTO
{
    public class CustomerTypeDTO
    {
        public int CustomerTypeId { get; set; }

        public string? TypeName { get; set; }

        [JsonIgnore]
        public virtual ICollection<CustomerDTO> Customers { get; set; } = new List<CustomerDTO>();
    }
}
