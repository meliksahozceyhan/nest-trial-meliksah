import { Module } from '@nestjs/common'
import { StudentService } from './student.service'
import { StudentController } from './student.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from './entities/student.entity'
import { ClassroomModule } from '../classroom/classroom.module'
import { StudentSubscriber } from './student.subscriber'

@Module({
	imports: [TypeOrmModule.forFeature([Student]), ClassroomModule],
	controllers: [StudentController],
	providers: [StudentService, StudentSubscriber],
	exports: [StudentService, StudentSubscriber]
})
export class StudentModule {}
