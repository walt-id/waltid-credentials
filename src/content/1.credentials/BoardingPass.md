# BoardingPass

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "VerifiableAttestation", "BoardingPass"],
    "id": "",
    "credentialSubject": {
        "id": "",
        "firstName": "John",
        "lastName": "Doe",
        "seat": "1A",
        "flight": "LH123",
        "date": "09/01/2021"
    },
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "name": "Airline"
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
        "Date": "$.credentialSubject.date",
        "Name": "$.credentialSubject.firstName",
        "Last Name": "$.credentialSubject.lastName",
        "Flight": "$.credentialSubject.flight",
        "Seat": "$.credentialSubject.seat"
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