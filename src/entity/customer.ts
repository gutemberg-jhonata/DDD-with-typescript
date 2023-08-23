import { Address } from "./address"

export class Customer {

    private _id: string
    private _name: string
    private _address!: Address
    private _activate: boolean = true

    constructor(id: string, name: string) {
        this._id = id
        this._name = name
        this.validate()
    }

    get name(): string {
        return this._name
    }

    set address(address: Address) {
        this._address = address
    }

    isActive() {
        return this._activate
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required")
        }
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
    }

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

}