export interface Customer {
    customerId?: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    customerTypeId : number,
    customerType?:{customerTypeId:Number,typeName:string},
}
export interface responseGET {
    mensaje: string,
    response:Customer[],
}
export interface CustomerType {
    customerTypeId: number,
    typeName:string,
}


