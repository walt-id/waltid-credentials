# BankId

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "BankId"
  ],
  "credentialSubject": {
    "accountId": "1234567890",
    "IBAN": "DE99123456789012345678",
    "BIC": "DEUTDEDBBER",
    "birthDate": "1958-08-17",
    "familyName": "DOE",
    "givenName": "JOHN",
    "id": "identity#bankId"
  },
  "id": "identity#BankId#3add94f4-28ec-42a1-8704-4e4aa51006b4",
  "issued": "2021-08-31T00:00:00Z",
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
  "validFrom": "2021-08-31T00:00:00Z",
  "issuanceDate": "2021-08-31T00:00:00Z"
}
```