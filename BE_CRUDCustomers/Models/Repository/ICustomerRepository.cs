using System.Runtime.CompilerServices;

namespace BE_CRUDCustomers.Models.Repository
{
    public interface ICustomerRepository
    {
      List<Customer> GetlistCustomer();
      List<CustomerType>GetlistCustomerType();
      Customer GetCustomerComplete(int id);
      Customer GetCustomer(int id);
     void RemoveCustomer(int id);

     void AddCustomer(Customer customer);
     void UpdateCustomer(Customer customer);
    }
}
