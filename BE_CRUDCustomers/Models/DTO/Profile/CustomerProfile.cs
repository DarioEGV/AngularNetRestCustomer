using AutoMapper;

namespace BE_CRUDCustomers.Models.DTO.Profiles
{
    public class CustomerProfile: Profile
    {
        public CustomerProfile() { 
        CreateMap<Customer,CustomerDTO>();
        CreateMap<CustomerDTO, Customer>();
        }
    }
}
