# ProofOfAddress

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "urn:uuid:3b2a1f74-9c5a-4a3a-8d3f-7b9c2e5d4f10",
  "type": [
    "VerifiableCredential",
    "ProofOfAddress"
  ],
  "issuer": "did:example:utility-at",
  "validFrom": "2025-08-12T10:00:00Z",
  "validUntil": "2026-08-11T23:59:59Z",
  "credentialSubject": {
    "id": "did:example:john-doe-123",
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "country": "Austria",
      "countryCode": "AT",
      "streetAddress": "Landstraßer Hauptstraße 12",
      "apartmentOrSuite": "Top 7",
      "postalCode": "1030",
      "city": "Wien"
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