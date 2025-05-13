# EmailVerificationCredential

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/email/v1"
  ],
  "id": "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
  "type": [
    "VerifiableCredential",
    "EmailVerificationCredential"
  ],
  "issuer": "did:example:issuer123",
  "issuanceDate": "2025-05-12T15:00:00Z",
  "credentialSubject": {
    "id": "did:example:user456",
    "name": "Christine Schmidt",
    "email": "user@example.com",
    "emailVerified": true,
    "verifiedAt": "2025-05-12"
  }
}
```

## Manifest

```json
{
    "claims": {
        "Name": "$.credentialSubject.name",
        "Email": "$.credentialSubject.email",
        "Email Verified": "$.credentialSubject.emailVerified",
        "Verified At": "$.credentialSubject.verifiedAt"
    }
}
```

## Mapping example

```json
{
    "id": "<uuid>",
    "issuer": "<issuerDid>",
    "credentialSubject": {
        "id": "<subjectDid>"
    },
    "issuanceDate": "<timestamp>",
}
```