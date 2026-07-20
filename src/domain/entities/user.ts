import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/UniqueEntityId";

interface UserProps {
    username: string
    email: string
    password:string
    createdAt?: string
}

export class User extends Entity<UserProps>{
    constructor(props:UserProps, id?:UniqueEntityID){
        super(props, id)
    }
}
