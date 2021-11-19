import { IsNotEmpty, Length } from 'class-validator'
import { Student } from 'src/models/student/entities/student.entity'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Classroom {
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
	@Length(1, 32)
	@Column({ length: 32, nullable: false, unique: true })
	code: string

	@IsNotEmpty()
	@Column({ nullable: false })
	level: number

	@Column({ default: 0, name: 'student_count' })
	studentCount: number

	@OneToMany(() => Student, (student) => student.classroom)
	students: Student[]
}
