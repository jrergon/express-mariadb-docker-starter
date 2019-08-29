import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 1;

    @Column({
        length: 16
    })
    username: string = "";

    @Column({
        length: 32
    })
    password: string = "";

    @Column({
        length: 16
    })
    name: string = "";

    @Column({
        length: 16
    })
    surname: string = "";

    @Column({
        length: 64
    })
    mail: string = "";

    @Column({
        length: 13
    })
    phone: string = "";
}