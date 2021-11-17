import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { getRepository, Repository } from 'typeorm'
import { Student } from '../student/entities/student.entity'
import { Classroom } from './entities/classroom.entity'

@Injectable()
export class ClassroomService extends TypeOrmCrudService<Classroom> {
	private classroomRepository = getRepository(Classroom)
	constructor(@InjectRepository(Classroom) classroomRepository) {
		super(classroomRepository)
	}

	public async getClassroomById(id: string): Promise<Classroom> {
		return await this.classroomRepository.findOne(id)
	}

	public async incrementStudentCount(classroomId: string): Promise<void> {
		const classroom = await this.getClassroomById(classroomId)
		classroom.studentCount++
		this.classroomRepository.save(classroom)
	}

	public async decreaseStudentCount(classroomId: string): Promise<void> {
		const classroom = await this.getClassroomById(classroomId)
		classroom.studentCount--
		this.classroomRepository.save(classroom)
	}

	public async handleClassroomAfterStudentUpdate(oldClassroomId: string, newClassroomId: string) {
		this.decreaseStudentCount(oldClassroomId)
		this.incrementStudentCount(newClassroomId)
	}
}
