# DataspaceParticipantCredential

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "DataspaceParticipantCredential"
  ],
  "id": "",
  "issuer": {
    "id": "did:web:delta-dao.com",
    "name": "deltaDAO AG"
  },
  "issuanceDate": "2021-08-31T00:00:00Z",
  "validFrom": "2021-09-01T00:00:00Z",
  "expirationDate": "2031-08-31T00:00:00Z",
  "credentialSubject": {
    "id": "Some String or URI",
    "type": "DataspaceParticipant",
    "dataspaceId": "Pontus-X",
    "legalName": "deltaDAO AG",
    "website": "https://www.delta-dao.com",
    "legalAddress": {
      "countryCode": "DE",
      "streetAddress": "Katharinenstraße 30a",
      "postalCode": "20457",
      "locality": "Hamburg"
    }
  }
}
```

## Manifest

```json
{
  "claims": {
    "Legal Name": "$.credentialSubject.legalName",
    "Website": "$.credentialSubject.website",
    "Legal Address Country Code": "$.credentialSubject.legalAddress.countryCode",
    "Legal Address Street": "$.credentialSubject.legalAddress.streetAddress",
    "Legal Address Postal Code": "$.credentialSubject.legalAddress.postalCode",
    "Legal Address Locality": "$.credentialSubject.legalAddress.locality",
    "Dataspace ID": "$.credentialSubject.dataspaceId"
  }
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
  "issuanceDate": "<timestamp>",
  "expirationDate": "<timestamp-in:365d>"
}
```