
# Moved to: https://github.com/walt-id/waltid-identity/tree/main/waltid-applications/waltid-credentials
--------------------------
# walt.id Credentials

A collection of W3C Verifiable Credential conform data schemas

Hosted under: https://credentials.walt.id/

# Setup
```shell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

# Docker
```shell
docker build -t waltid/vc-repository .
docker run -p3000:3000 -i -t waltid/vc-repository
```
