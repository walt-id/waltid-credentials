# IdentityCredential

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "IdentityCredential"],
    "id": "",
    "credentialSubject": {
      "given_name": "John",
      "family_name": "Doe",
      "email": "johndoe@example.com",
      "phone_number": "+1-202-555-0101",
      "address": {
        "street_address": "123 Main St",
        "locality": "Anytown",
        "region": "Anystate",
        "country": "US"
      },
      "birthdate": "1940-01-01",
      "is_over_18": true,
      "is_over_21": true,
      "is_over_65": true
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
      "Name": "$.credentialSubject.given_name",
      "Family Name": "$.credentialSubject.family_name",
      "Email": "$.credentialSubject.email",
      "Phone number": "$.credentialSubject.phone_number",
      "Address": "$.credentialSubject.address",
      "Date of Birth": "$.credentialSubject.birthdate",
      "Over 18": "$.credentialSubject.is_over_18",
      "Over 21": "$.credentialSubject.is_over_21",
      "Over 65": "$.credentialSubject.is_over_65"
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
