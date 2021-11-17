import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ClassroomService } from './classroom.service'
import { Classroom } from './entities/classroom.entity'
import { Crud, CrudController } from '@nestjsx/crud'

@Crud({
	model: {
		type: Classroom
	},
	params: { id: { field: 'id', type: 'uuid', primary: true } }
})
@Controller('classroom')
export class ClassroomController implements CrudController<Classroom> {
	constructor(public service: ClassroomService) {}
}
