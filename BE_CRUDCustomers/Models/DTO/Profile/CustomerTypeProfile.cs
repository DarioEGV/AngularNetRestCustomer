using AutoMapper;

namespace BE_CRUDCustomers.Models.DTO.Profiles
{
    public class CustomerTypeProfile :Profile
    {
        public CustomerTypeProfile() 
        {
        CreateMap<CustomerType,CustomerTypeDTO>();
            CreateMap<CustomerTypeDTO, CustomerType>();
        }
    }
}
