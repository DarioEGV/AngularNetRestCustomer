using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_CRUDCustomers.Models;
using System.Linq;
using System.Drawing;
using AutoMapper;
using BE_CRUDCustomers.Models.DTO;
using BE_CRUDCustomers.Models.Repository;

namespace BE_CRUDCustomers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
       // public readonly CustomersContext _context;
        private readonly IMapper _mapper;
        private ICustomerRepository _customerRepository;

        public CustomersController(
          //  CustomersContext context, 
            IMapper mapper,ICustomerRepository customerRepository)
        {
          //  _context = context;
            _mapper = mapper;
            _customerRepository = customerRepository;
        }

        [HttpGet]
        [Route("CustomersList")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var list_customers =  _customerRepository.GetlistCustomer();

                var list_customersDTO=_mapper.Map<IEnumerable<CustomerDTO>>(list_customers);
                
                return StatusCode(StatusCodes.Status200OK,new { mensaje="ok", response = list_customersDTO } );

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("CustomersTypeList")]
        public async Task<IActionResult> GetCustomerType()
        {
            try
            {
                var list_types = _customerRepository.GetlistCustomerType();
                if (list_types == null)
                {
                    return NotFound();
                }
                var lis_typesDTO = _mapper.Map< IEnumerable<CustomerTypeDTO>>(list_types);

                return Ok(lis_typesDTO);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Customer/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {

                var customer = _customerRepository.GetCustomer(id);
                if (customer==null)
                {
                    return NotFound();
                }
                var customerDTO=_mapper.Map<CustomerDTO>(customer);

                return Ok(customerDTO);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("DeleteCustomer/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var customer = _customerRepository.GetCustomer(id);
                if (customer == null)
                {
                    return NoContent();
                }
                else
                {
                  _customerRepository.RemoveCustomer(id);
                    return NoContent();
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        [Route("Customer/Post")]
        public async Task<IActionResult> Post(CustomerDTO customerDTO)
        {
            try
            {
                Customer customer = _mapper.Map<Customer>(customerDTO);
               
                _customerRepository.AddCustomer(customer);

                var customerItemDTO = _mapper.Map<CustomerDTO>(customer);
                return CreatedAtAction("Get", new {id= customerItemDTO.CustomerId}, customerItemDTO);

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("ModifyCustomer/{id}")]
        public async Task<IActionResult> Put(int id, CustomerDTO customerDTO)
        {
            try
            {
                var customer = _mapper.Map<Customer>(customerDTO);
                if (id != customer.CustomerId)
                {
                    return BadRequest();
                }
           
                var customerAlta=  _customerRepository.GetCustomer(id);

                if (customerAlta == null)
                {
                    return NotFound();
                }
                    _customerRepository.UpdateCustomer(customer);

                return Ok();

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
