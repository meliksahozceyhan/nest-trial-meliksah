import { EntitySubscriberInterface, InsertEvent, Connection, RemoveEvent, UpdateEvent } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Student } from './entities/student.entity'
import { InjectConnection } from '@nestjs/typeorm'
import { StudentService } from './student.service'

@Injectable()
export class StudentSubscriber implements EntitySubscriberInterface<Student> {
	constructor(@InjectConnection() readonly connection: Connection, private readonly studentService: StudentService) {
		connection.subscribers.push(this)
	}

	listenTo() {
		return Student
	}

	afterInsert(event: InsertEvent<Student>) {
		this.studentService.handleStudentAfterCreate(event.entity)
	}
	afterRemove(event: RemoveEvent<Student>) {
		this.studentService.handleStudentAfterRemove(event.databaseEntity)
	}

	afterUpdate(event: UpdateEvent<Student>) {
		const classroomId = event.entity.classroom.id
		this.studentService.handleStudentAfterUpdate(event.databaseEntity, classroomId)
	}
}
