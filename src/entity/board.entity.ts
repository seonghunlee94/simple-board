import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Board {
    
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @ApiProperty({description: 'user_id'})
    @Column()
    userId: number;
    
    @ApiProperty({description: '내용'})
    @Column()
    content: string;
    
    @ApiProperty({description: '생성일'})
    @CreateDateColumn()
    createAt: Date;
    
    @ApiProperty({description: '수정일'})
    @UpdateDateColumn()
    updateAt: Date;
    
    @ApiProperty({description: '유저 정보'})
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
}