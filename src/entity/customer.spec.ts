import { Address } from "./address"
import { Customer } from "./customer"

describe('Customer unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let customer = new Customer("", "Jhon")
        }).toThrowError("Id is required")
    })

    it('should throw error when name is empty', () => {
        expect(() => {
            let customer = new Customer("123", "")
        }).toThrowError("Name is required")
    })

    it('should change name', () => {
        const customer = new Customer("123", "Jhon")

        customer.changeName("Jane")

        expect(customer.name).toBe("Jane")
    })

    it('should activate customer', () => {
        const customer = new Customer("1", "Customer 1")
        const address = new Address("Street 1", 123, "13330-250", "São Paulo")
        customer.address = address

        customer.activate()

        expect(customer.isActive()).toBe(true)
    })

    it('should throw error when address is undefined when you activate a customer', () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1")
            customer.activate()
        }).toThrowError("Address is mandatory to activate a customer")
    })

    it('should deactivate customer', () => {
        const customer = new Customer("1", "Customer 1")
        
        customer.deactivate()

        expect(customer.isActive()).toBe(false)
    })
})