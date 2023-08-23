import { Order } from "./order"
import { OrderItem } from "./order_item"

describe('Order unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "123", [])
        }).toThrowError("Id is required")
    })

    it('should throw error when customerId is empty', () => {
        expect(() => {
            let order = new Order("1", "", [])
        }).toThrowError("CustomerId is required")
    })

    it('should throw error when items are empty', () => {
        expect(() => {
            let order = new Order("1", "123", [])
        }).toThrowError("Items are required")
    })

    it('should calculate total', () => {
        const item1 = new OrderItem("1", "Item 1", 100, "p1", 2)
        const item2 = new OrderItem("2", "Item 2", 200, "p2", 2)
        const order = new Order("o1", "c1", [item1, item2])

        const total = order.total()

        expect(total).toBe(600)
    })

    it('should throw if the item qte is less or equal 0', () => {
        expect(() => {
            const item1 = new OrderItem("1", "Item 1", 100, "p1", 0)
            const order = new Order("o1", "c1", [item1])
        }).toThrowError("Quantity must be greater than zero")
    })
})