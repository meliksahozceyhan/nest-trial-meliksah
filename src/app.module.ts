import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import databaseConfig from './config/database.config'
import { DatabaseModule } from './database/database.module'
import { ClassroomModule } from './models/classroom/classroom.module'
import { StudentModule } from './models/student/student.module'
import { UserModule } from './models/user/user.module';

@Module({
	imports: [ConfigModule.forRoot({ load: [databaseConfig], isGlobal: true }), DatabaseModule, ClassroomModule, StudentModule, UserModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
