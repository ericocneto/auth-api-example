import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/UniqueEntityId";

interface UserProps {
    username: string
    email: string
    password:string
    createdAt?: Date
}

export class User extends Entity<UserProps>{
    constructor(props:UserProps, id?:UniqueEntityID){
        super(props, id)
    }

    get username() {
        return this.props.username
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }

    get createdAt() {
        return this.props.createdAt
    }
}
