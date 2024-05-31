# eID

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "VerifiableAttestation", "eID"],
    "id": "",
    "credentialSubject": {
        "id": "",
        "firstName": "John",
        "lastName": "Doe",
        "dateOfBirth": "1980-01-01",
        "gender": "Male",
        "nationality": "US",
        "address": "123 Main St, Anytown, USA",
        "documentId": "G7F2A04F7O"
    },
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "name": "Government of Anytown"
    },
    "issuanceDate": "2021-08-31T00:00:00Z",
    "validFrom": "2021-09-01T00:00:00Z",
    "expirationDate": "2031-08-31T00:00:00Z"
}
```

## Manifest

```json
{
    "claims": {
        "Document ID": "$.credentialSubject.documentId",
        "Name": "$.credentialSubject.firstName",
        "Last Name": "$.credentialSubject.lastName",
        "Date of Birth": "$.credentialSubject.dateOfBirth",
        "Gender": "$.credentialSubject.gender",
        "Nationality": "$.credentialSubject.nationality",
        "Address": "$.credentialSubject.address"
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
    "validFrom": "<timestamp>",
    "expirationDate": "<timestamp-in:365d>"
}
```