import { UniqueEntityID } from "./UniqueEntityId"

export abstract class Entity<Props> {
    protected _id?: UniqueEntityID
    protected props: Props

    constructor(props:Props, id?:UniqueEntityID){
        this.props = props
        this._id = id ?? new UniqueEntityID()
    }
    get id():any {
        return this._id
    }
}