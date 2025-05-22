# KiwiAccessCredential


```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "VerifiableAttestation",
    "KiwiAccessCredential"
  ],
  "issuer": {
    "id": "did:key:z6MkjxvA4FNrQUhr8f7xhdQuP1VPzErkcnfxsRaU5oFgy2E5",
    "name": "Kiwi Access Authority",
    "url": "https://kiwiaccess.co.nz/",
    "image": "https://kiwiaccess.co.nz/wp-content/uploads/2018/10/Kiwi-Access-Logo-White.png"
  },
  "issuanceDate": "2023-11-15T10:00:00+13:00",
  "expirationDate": "2028-11-15T10:00:00+13:00",
  "name": "Kiwi Access Card",
  "description": "An official evidence of age and identity card for use across New Zealand.",
  "credentialSubject": {
    "id": "did:example:kiwi1234abcd",
    "type": "KiwiAccessHolder",
    "kiwiAccessCard": {
      "type": "KiwiAccessCard",
      "card_number": "KA123456789",
      "full_name": "SUSAN TURNER",
      "birth_date": "1998-08-28",
      "issue_date": "2023-01-15T10:00:00+13:00",
      "expiry_date": "2028-08-27T10:00:00+13:00",
      "portrait": "data:image/jpeg;base64,/9j/4AAQSkZJR...RSClooooP/2Q==",
      "issuing_country": "NZ",
      "issuing_authority": "Kiwi Access Authority",
      "sex": "female",
      "card_type": "EvidenceOfAge",
      "age_over_18": true,
      "age_over_21": true,
      "age_over_25": true,
      "age_over_60": false
    }
  }
}
```

## Manifest

```json
{
  "claims": {
    "Card Number": "$.credentialSubject.kiwiAccessCard.card_number",
    "Full Name": "$.credentialSubject.kiwiAccessCard.full_name",
    "Birth Date": "$.credentialSubject.kiwiAccessCard.birth_date",
    "Sex": "$.credentialSubject.kiwiAccessCard.sex",
    "Issuing Country": "$.credentialSubject.kiwiAccessCard.issuing_country",
    "Issuing Authority": "$.credentialSubject.kiwiAccessCard.issuing_authority",
    "Age Over 18": "$.credentialSubject.kiwiAccessCard.age_over_18",
    "Age Over 21": "$.credentialSubject.kiwiAccessCard.age_over_21",
    "Age Over 25": "$.credentialSubject.kiwiAccessCard.age_over_25",
    "Age Over 60": "$.credentialSubject.kiwiAccessCard.age_over_60"
  }
}
```

## Mapping example

```json
{
  "display": "<display>",
  "issuer": {
    "id": "<issuerDid>"
  },
  "credentialSubject": {
    "id": "<subjectDid>"
  },
  "issuanceDate": "<timestamp>",
  "expirationDate": "<timestamp-in:1825d>"
}
```