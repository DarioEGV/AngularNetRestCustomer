using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BE_CRUDCustomers.Models;

public partial class CustomerType
{
    public int CustomerTypeId { get; set; }

    public string? TypeName { get; set; }

    [JsonIgnore]
    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
