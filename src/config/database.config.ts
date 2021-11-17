export default () => ({
	database: {
		host: process.env.DB_URI,
		port: 5432,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		schema: process.env.DB_SCHEMA
	}
})
