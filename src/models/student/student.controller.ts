import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Crud({
	model: {
		type: Student
	},
	params: { id: { field: 'id', type: 'uuid', primary: true } },
	query: { join: { classroom: { eager: true } } }
})
@Controller('student')
export class StudentController implements CrudController<Student> {
	constructor(public service: StudentService) {}
}
