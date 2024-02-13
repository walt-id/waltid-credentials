# HotelReservation

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "VerifiableHotelReservation"
  ],
  "credentialSchema": {
    "id": "https://insert-link",
    "type": "FullJsonSchemaValidator2021"
  },
  "credentialSubject": {
    "id": "did:key:string",
    "familyName": "DOE",
    "firstName": "Jane",
    "currentAddress": [
      "42 Great Place, Canada"
    ],
    "dateOfBirth": "1993-04-08",
    "placeOfBirth": "LILLE, FRANCE"
  },
  "id": "urn:uuid:3add94f4-28ec-42a1-8704-4e4aa51006b4",
  "issued": "2021-08-31T00:00:00Z",
  "issuer": {
    "id": "did:web:string",
    "name": "Hotel"
  },
  "validFrom": "2024-01-31T00:00:00Z",
  "issuanceDate": "2024-01-31T00:00:00Z"
}

```

## Mapping example

```json
{
    "id": "<uuid>",
    "issuer": {
        "id": "<issuerDid>"
    },
    "credentialSubject": {
        "id": "<subjectDid>"
    },
    "issuanceDate": "<timestamp>"
}
```
