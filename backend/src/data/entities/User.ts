// backend/src/data/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    username!: string;
   
    @Column()
    password! : string;
   
    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column({ default: true })
    isActive!: boolean;

}
