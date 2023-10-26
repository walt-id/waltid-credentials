# MortgageEligibility

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "did:ebsi:635ba519cd19764e84ea67dd",
    "type": [
      "VerifiableCredential", 
      "VerifiableAttestation", 
      "VerifableId", 
      "MortgageEligibility"
    ],
    "issuer": "did:ebsi:zhs8QaHif4mPqhEcn5Z8K9E",
    "issuanceDate": "2022-11-10T19:19:47.287Z",
    "validFrom": "2022-11-10T19:19:47.287Z",
    "expirationDate": "2022-11-10T19:19:47.287Z",
    "issued": "2022-11-10T19:19:47.287Z",
    "credentialSubject": {
        "id": "urn:uri:123",
        "salutation": "",
        "familyName": "",
        "firstName": "",
        "emailAddress": "",
        "dateOfBirth": "",
        "purchasePrice": "",
        "totalIncome": "",
        "mortgageAmount": "",
        "additionalCollateral": "",
        "postCodeProperty": ""
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
    "issuanceDate": "<timestamp>"
}
```