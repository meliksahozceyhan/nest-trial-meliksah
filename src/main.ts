import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { QueryFailedExceptionFilter } from './filters/query-failed-exception.filter'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors()
	app.useGlobalFilters(new QueryFailedExceptionFilter())

	const config = new DocumentBuilder().setTitle('School Example').setDescription('This is an example API made by NEST.JS for learning purposes.').setVersion('1.0').addTag('school').build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('swagger/api/v1', app, document)

	await app.listen(3000)
}
bootstrap()
