# VerifiableId

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "VerifiableAttestation",
    "VerifiableId"
  ],
  "credentialSchema": {
    "id": "https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0xb77f8516a965631b4f197ad54c65a9e2f9936ebfb76bae4906d33744dbcc60ba",
    "type": "FullJsonSchemaValidator2021"
  },
  "credentialSubject": {
    "currentAddress": [
      "1 Boulevard de la Liberté, 59800 Lille"
    ],
    "dateOfBirth": "1993-04-08",
    "familyName": "DOE",
    "firstName": "Jane",
    "gender": "FEMALE",
    "id": "did:ebsi:2AEMAqXWKYMu1JHPAgGcga4dxu7ThgfgN95VyJBJGZbSJUtp",
    "nameAndFamilyNameAtBirth": "Jane DOE",
    "personalIdentifier": "0904008084H",
    "placeOfBirth": "LILLE, FRANCE"
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
  "issuer": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN",
  "validFrom": "2021-08-31T00:00:00Z",
  "issuanceDate": "2021-08-31T00:00:00Z"
}
```

## Manifest

```json
{
    "claims": {
        "Credential Subject ID": "$.credentialSubject.id",
        "Personal Identifier": "$.credentialSubject.personalIdentifier",
        "Family Name": "$.credentialSubject.familyName",
        "First Name": "$.credentialSubject.firstName",
        "Name and Family Name at Birth": "$.credentialSubject.nameAndFamilyNameAtBirth",
        "Gender": "$.credentialSubject.gender",
        "Date of Birth": "$.credentialSubject.dateOfBirth",
        "Place of Birth": "$.credentialSubject.placeOfBirth",
        "Current Address": "$.credentialSubject.currentAddress[0]"
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