import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
//     port: 3000
//   }
// })
export default defineConfig({
  server: {
    allowedHosts: ["ems-frontend-c8eqh4bwccbngjcy.uksouth-01.azurewebsites.net"],
    host: "0.0.0.0",
    port: 8080
  }
});
