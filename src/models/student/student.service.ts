import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { ClassroomService } from '../classroom/classroom.service'
import { Student } from './entities/student.entity'

@Injectable()
export class StudentService extends TypeOrmCrudService<Student> {
	constructor(@InjectRepository(Student) studentRepo, private readonly classroomService: ClassroomService) {
		super(studentRepo)
	}

	public handleStudentAfterCreate(student: Student): void {
		this.classroomService.incrementStudentCount(student.classroom.id)
	}

	public handleStudentAfterRemove(student: Student): void {
		this.classroomService.decreaseStudentCount(student.classroom.id)
	}

	public handleStudentAfterUpdate(oldStudent: Student, newClassroomId: string): void {
		this.classroomService.handleClassroomAfterStudentUpdate(oldStudent.classroom.id, newClassroomId)
	}
}
