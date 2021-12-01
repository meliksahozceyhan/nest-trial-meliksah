import { IsNotEmpty, Length, min } from 'class-validator'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@IsNotEmpty()
	@Length(1, 64)
	@Column({ length: 128, nullable: false, name: 'user_name' })
	userName: String

	@IsNotEmpty()
	@Column({ nullable: false })
	password: String
}
