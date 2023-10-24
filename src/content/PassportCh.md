# PassportCh

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
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
      "id": "<url to image>",
      "type": "Image"
    },
    "name": "CH Authority",
    "type": "Profile",
    "url": "<url to image>"
  },
  "issuanceDate": "2022-11-10T19:19:47.287Z",
  "validFrom": "2022-11-10T19:19:47.287Z",
  "expirationDate": "2022-11-10T19:19:47.287Z",
  "issued": "2022-11-10T19:19:47.287Z",
  "credentialSubject": {
    "id": "urn:uri:123",
    "residence": "Schweiz",
    "canton": "Zug",
    "address": "Bergstrasse 1",
    "passportNumber": "C7648556",
    "salutation": "",
    "familyName": "DOE",
    "givenName": "Fidelis",
    "birthName": "Doe",
    "dateOfBirth": "1930-10-01",
    "emailAddress": "",
    "placeOfBirth": "Ruemligen BL",
    "height": "183",
    "gender": "F",
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