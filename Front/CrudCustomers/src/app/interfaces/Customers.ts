export interface Customers {
    CustomerID?: number,
    FirstName: string,
    LastName: string,
    Email: string,
    Phone: string,
    Address: string,
    CustomerType : string,
}

export interface CustomersAdd {
    CustomerID?: number,
    FirstName: string,
    LastName: string,
    Email: string,
    Phone: string,
    Address: string,
    CustomerTypeID?: string,
}