import { AfterLoad, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty, Length } from 'class-validator'
import { Classroom } from 'src/models/classroom/entities/classroom.entity'

@Entity()
export class Student {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@IsNotEmpty()
	@Length(1, 128)
	@Column({ length: 128, nullable: false })
	name: string

	@IsNotEmpty()
	@Length(1, 128)
	@Column({ length: 128, nullable: false })
	surname: string

	nameSurname: string

	@IsNotEmpty()
	@Column({ nullable: false })
	studentNumber: number

	@Column({ name: 'birth_date' })
	birthDate: Date

	@IsNotEmpty()
	@Column({ nullable: false })
	grade: number

	@ManyToOne(() => Classroom, (classroom) => classroom.students, { nullable: false, eager: true })
	classroom: Classroom

	@AfterLoad()
	afterLoad(): void {
		this.nameSurname = this.name + ' ' + this.surname
	}
}
