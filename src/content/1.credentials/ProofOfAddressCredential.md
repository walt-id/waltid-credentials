# ProofOfAddressCredential

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "urn:uuid:3b2a1f74-9c5a-4a3a-8d3f-7b9c2e5d4f10",
  "type": [
    "VerifiableCredential",
    "ProofOfAddressCredential"
  ],
  "issuer": "did:example:utility-at",
  "validFrom": "2025-08-12T10:00:00Z",
  "validUntil": "2026-08-11T23:59:59Z",
  "credentialSubject": {
    "id": "did:example:john-doe-123",
    "firstName": "REPLACE_ME",
    "lastName": "REPLACE_ME",
    "address": {
      "country": "REPLACE_ME",
      "countryCode": "REPLACE_ME",
      "streetAddress": "REPLACE_ME",
      "apartmentOrSuite": "REPLACE_ME",
      "postalCode": "REPLACE_ME",
      "city": "REPLACE_ME"
    }
  }
}
```

## Manifest

```json
{
  "claims": {
    "First name": "$.credentialSubject.firstName",
    "Last name": "$.credentialSubject.lastName",
    "Address country": "$.credentialSubject.address.country",
    "Address country code": "$.credentialSubject.address.countryCode",
    "Street address": "$.credentialSubject.address.streetAddress",
    "Apartment or suite": "$.credentialSubject.address.apartmentOrSuite",
    "Postal code": "$.credentialSubject.address.postalCode",
    "City": "$.credentialSubject.address.city"
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
  "validFrom": "<timestamp>",
  "validUntil": "<timestamp-in:365d>"
}
```