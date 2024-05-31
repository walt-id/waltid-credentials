# NaturalPersonVerifiableID

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1" ],
  "id": "urn:uuid:3add94f4-28ec-42a1-8704-4e4aa51006b4",
  "type": [ "VerifiableCredential", "VerifiableAttestation", "NaturalPersonVerifiableID"],
  "issuer": "did:ebsi:zf39qHTXaLrr6iy3tQhT3UZ",
  "issuanceDate": "2022-11-10T19:19:47.287Z",
  "validFrom": "2022-11-10T19:19:47.287Z",
  "issued": "2022-11-10T19:19:47.287Z",
  "credentialSubject": {
      "id": "did:key:z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9KbrvQgsKodq2xnfBMYGk99qtunHHQuvvi35kRvbH9SDnue2ZNJqcnaU7yAxeKqEqDX4qFzeKYCj6rdbFnTsf4c8QjFXcgGYS21Db9d2FhHxw9ZEnqt9KPgLsLbQHVAmNNZoz",
      "familyName": "Doe", 
      "firstName": "Jane",
      "dateOfBirth":  "1985-08-15", 
      "personalIdentifier": "c02654b4-814e-46dd-ba17-0bd81a45057c",
      "nameAndFamilyNameAtBirth": "Jane Doe",
      "placeOfBirth": "Lille, France",
      "currentAddress": "1 Boulevard de la Liberté, 59800 Lille",
      "gender": "Female"
  },
  "credentialSchema": {
      "id": "https://api-conformance.ebsi.eu/trusted-schemas-registry/v3/schemas/z22ZAMdQtNLwi51T2vdZXGGZaYyjrsuP1yzWyXZirCAHv",
      "type": "FullJsonSchemaValidator2021"
  }
}
```

## Manifest

```json
{
    "claims": {
        "Name": "$.credentialSubject.firstName",
        "Last Name": "$.credentialSubject.familyName",
        "Date of Birth": "$.credentialSubject.dateOfBirth",
        "Gender": "$.credentialSubject.gender",
        "Personal Identifier": "$.credentialSubject.personalIdentifier",
        "Name and Family Name at Birth": "$.credentialSubject.nameAndFamilyNameAtBirth",
        "Place of Birth": "$.credentialSubject.placeOfBirth",
        "Current Address": "$.credentialSubject.currentAddress"
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
    "issuanceDate": "<timestamp-ebsi>",
    "issued": "<timestamp-ebsi>",
    "validFrom": "<timestamp-ebsi>",
    "expirationDate": "<timestamp-ebsi-in:365d>"
}
```