# 🌐 Portfolio – React + Docker + Azure App Service

Detta projekt är en personlig portfolio byggd i **React**, stylad med **Tailwind CSS** och distribuerad med **Docker** till **Azure App Service** via **Azure Container Registry (ACR)**.

---

## Milestones & Logs

### Skapade React-applikation
- Initierade med `create-react-app`.
- La till TailwindCSS för styling.
- Struktur: fyra sidor (Home, About, GitHub, Skills).

```bash
npx create-react-app portfolio-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
---
### Azure

- Körde portfolion i en container med Nginx
- Loggade in och pushade image till ACR
- Kopplade container till App Service
---
#### Portfolion nåbar via: 
https://uppgiftportfolio-c7cdc9f9babqdkg7.swedencentral-01.azurewebsites.net

---
### Debugging Milestones
Problem 1: Första Dockerfile pekade mot dist/ (fanns inte).

→ Fix: ändrade till build/.

Problem 2: Domänen visade Nginx default-sida.

→ Orsak: gammal image + cache.

✅ Fix: Byggde om (v6) + restartade appen + rensade cache → Portfolio visas korrekt.

---