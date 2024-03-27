using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BE_CRUDCustomers.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public int? CustomerTypeId { get; set; }

    //[JsonIgnore]
    public virtual CustomerType? CustomerType { get; set; }
}
