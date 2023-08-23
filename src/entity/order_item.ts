export class OrderItem {

    _id: string
    _productId: string
    _name: string
    _price: number
    _quantity: number

    constructor (id: string, name: string, price: number, productId: string, quantity: number) {
        this._id = id
        this._name = name
        this._price = price
        this._productId = productId
        this._quantity = quantity
    }

    get price(): number {
        return this._price
    }

    get quantity(): number {
        return this._quantity
    }

    orderItemTotal() {
        return this._price * this._quantity
    }

}