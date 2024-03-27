
using Microsoft.EntityFrameworkCore;

namespace BE_CRUDCustomers.Models.Repository
{
    public class CustomerRepository: ICustomerRepository
    {
        private readonly CustomersContext _context;

        public CustomerRepository(CustomersContext context)
        {
            _context = context;
        }

        public void AddCustomer(Customer customer)
        {
            _context.Add(customer);
            _context.SaveChanges();
        }

        public Customer GetCustomer(int id)
        {
            var customer = _context.Customers.Find(id);
            return customer;
        }

        public Customer GetCustomerComplete(int id)
        {
            var list_customers = _context.Customers.Include(c => c.CustomerType).ToList();
            var customer = list_customers.Find(c => c.CustomerId == id);
            return customer;
        }

        public List<Customer> GetlistCustomer()
        {
           return _context.Customers.Include(c => c.CustomerType).ToList();
        }

        public List<CustomerType> GetlistCustomerType()
        {
            return _context.CustomerTypes.ToList();
        }

        public void RemoveCustomer(int id)
        {
            Customer? customer = _context.Customers.Find(id);
            _context.Customers.Remove(customer);
            _context.SaveChanges();            
        }

        public void  UpdateCustomer(Customer customer)
        {
            var customerAlta = _context.Customers.Find(customer.CustomerId);
            customerAlta.CustomerId = customer.CustomerId;
            customerAlta.FirstName = customer.FirstName;
            customerAlta.LastName = customer.LastName;
            customerAlta.Address = customer.Address;
            customerAlta.Phone = customer.Phone;
            customerAlta.Email = customer.Email;
            customerAlta.CustomerTypeId = customer.CustomerTypeId;

             _context.SaveChangesAsync();
        }
    }
}
