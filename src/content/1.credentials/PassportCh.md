# PassportCh

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "did:ebsi:635ba519cd19764e84ea67dd",
    "type": [
      "VerifiableCredential", 
      "VerifiableAttestation", 
      "VerifableId", 
      "PassportCh"
    ],
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "image": {
            "id": "https://img.freepik.com/premium-photo/swiss-flag-switzerland_469558-1774.jpg",
            "type": "Image"
        },
        "name": "CH Authority",
        "type": "Profile",
        "url": "https://img.freepik.com/premium-photo/swiss-flag-switzerland_469558-1774.jpg"
    },
    "issuanceDate": "2022-11-10T19:19:47.287Z",
    "validFrom": "2022-11-10T19:19:47.287Z",
    "expirationDate": "2032-11-10T19:19:47.287Z",
    "issued": "2022-11-10T19:19:47.287Z",
    "credentialSubject": {
        "id": "urn:uri:123",
        "residence": "Schweiz",
        "canton": "Zürich",
        "address": "Seestraße 1",
        "passportNumber": "C7648556",
        "salutation": "",
        "familyName": "DOE",
        "givenName": "Hans",
        "birthName": "Doe",
        "dateOfBirth": "1930-10-01",
        "emailAddress": "",
        "placeOfBirth": "Zug",
        "height": "179",
        "gender": "M",
        "authority": "Aarau AG",
        "nationality": "Schweiz",
        "countryCode": "CHE",
        "passportPhoto": "data:image/png;base64,iVBORw0KGgo...kJggg=="
    },
    "evidence": {
        "documentPresence": "Physical",
        "evidenceDocument": "Passport",
        "subjectPresence": "Physical",
        "type": "DocumentVerification",
        "verifier": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN"
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
    "issuanceDate": "<timestamp>"
}
```
