# TaxReceipt

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "VerifiableTaxReceipt"
  ],
  "credentialSchema": {
    "id": "https://insert-link",
    "type": "FullJsonSchemaValidator2021"
  },
  "credentialSubject": {
    "id": "did:key:string",
    "ReceiptId": "string",
    "VAT": "string"
  },
  "evidence": [
    {
      "documentPresence": [
        "Physical"
      ],
      "evidenceDocument": [
        "Passport"
      ],
      "subjectPresence": "Physical",
      "type": [
        "DocumentVerification"
      ],
      "verifier": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN"
    }
  ],
  "id": "urn:uuid:3add94f4-28ec-42a1-8704-4e4aa51006b4",
  "issued": "2021-08-31T00:00:00Z",
  "issuer": {
    "id": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN",
    "name": "Tax Authority"
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