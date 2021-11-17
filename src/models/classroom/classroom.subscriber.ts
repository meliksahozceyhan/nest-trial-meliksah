import { EntitySubscriberInterface, InsertEvent, Connection, UpdateEvent } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Classroom } from './entities/classroom.entity'
import { InjectConnection } from '@nestjs/typeorm'
import { ClassroomService } from './classroom.service'

@Injectable()
export class ClassroomSubscriber implements EntitySubscriberInterface<Classroom> {
	constructor(@InjectConnection() readonly connection: Connection, private readonly classroomService: ClassroomService) {
		connection.subscribers.push(this)
	}

	listenTo() {
		return Classroom
	}

	afterInsert(event: InsertEvent<Classroom>) {}

	afterUpdate(event: UpdateEvent<Classroom>) {
		console.log('AFTER UPDATE ENTITY', event.entity)
		console.log('AFTER UPDATE DATABASE ENTİTY', event.databaseEntity)
	}
}
