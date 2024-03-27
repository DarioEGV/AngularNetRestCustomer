namespace BE_CRUDCustomers.Models.DTO
{
    public class CustomerDTO
    {
        public int CustomerId { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Email { get; set; }

        public string? Phone { get; set; }

        public string? Address { get; set; }

        public int? CustomerTypeId { get; set; }

        //[JsonIgnore]
        public virtual CustomerTypeDTO? CustomerType { get; set; }
    }
}
