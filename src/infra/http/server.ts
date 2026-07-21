import {app} from '@/main/http'
import { env } from '@/main/env'

app.listen({
    host: '0.0.0.0',
    port: env.PORT
}).then(()=>console.log(`HTTP server running on http://localhost:${env.PORT}`))