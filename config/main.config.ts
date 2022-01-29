import { registerAs } from "@nestjs/config"

export default registerAs('mainConfiguration', () => ({
  port: parseInt(process.env.PORT, 10) || 3000
}))