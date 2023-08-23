import { Address } from "./address"

export class Customer {

    _id: string
    _name: string
    _address!: Address
    _activate: boolean = true

    constructor(id: string, name: string) {
        this._id = id
        this._name = name
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required")
        }
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
    }

    /*get id(): string {
        return this._id
    }

    
    get name(): string {
        return this._name
    }

    
    get address(): string {
        return this._address
    }

    set address(address: string) {
        this._address = address
    }*/

    changeName(name: string) {
        this._name = name
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer")
        }
        this._activate = true
    }

    deactivate() {
        this._activate = false
    }

    set address(address: Address) {
        this._address = address
    }

}