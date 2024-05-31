# Visa

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "VerifiableAttestation", "Visa"],
    "id": "did:visa:987654321abcdef",
    "credentialSubject": {
        "id": "",
        "firstName": "John",
        "lastName": "Doe",
        "passportNumber": "G7F2A04F7O",
        "dateOfBirth": "1980-01-01",
        "gender": "Male",
        "nationality": "US",
        "visaType": "Tourist",
        "entryNumber": "Single",
        "visaValidity": {
            "start": "2024-01-01",
            "end": "2024-06-30"
        },
        "purposeOfVisit": "Tourism"
    },
    "issuer": {
        "id": "did:key:z3MkpTHsHjxvqq7TnqmBnYf6pWZpa27DqXx6Wp7dVPLm987X",
        "name": "Embassy of Wonderland"
    },
    "issuanceDate": "2023-11-01T00:00:00Z",
    "validFrom": "2024-01-01T00:00:00Z",
    "expirationDate": "2024-06-30T00:00:00Z"
}
```

## Manifest

```json
{
    "claims": {
        "Passport Number": "$.credentialSubject.passportNumber",
        "Name": "$.credentialSubject.firstName",
        "Last Name": "$.credentialSubject.lastName",
        "Date of Birth": "$.credentialSubject.dateOfBirth",
        "Gender": "$.credentialSubject.gender",
        "Nationality": "$.credentialSubject.nationality",
        "Visa Type": "$.credentialSubject.visaType",
        "Entry Number": "$.credentialSubject.entryNumber",
        "Visa Issuance Date": "$.credentialSubject.visaValidity.start",
        "Visa Expiration Date": "$.credentialSubject.visaValidity.end",
        "Purpose of Visit": "$.credentialSubject.purposeOfVisit"
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