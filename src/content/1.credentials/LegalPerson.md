# LegalPerson

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/gaia-x/development#"
  ],
  "type": ["VerifiableCredential", "LegalPerson"],
  "id": "https://example.org/legal-participant/68a5bbea9518e7e2ac1cc75bcc8819a7edd5c4711e073ffa4bb260034dc6423c/data.json",
  "name": "Legal Person",
  "issuer": "did:web:example.org",
  "issuanceDate": "2023-07-20T07:05:44Z",
  "expirationDate": "2033-07-20T07:05:44Z",
  "credentialSubject": {
    "id": "https://example.org/legal-participant-json/68a5bbea9518e7e2ac1cc75bcc8819a7edd5c4711e073ffa4bb260034dc6423c/data.json",
    "type": "gx:LegalPerson",
    "gx:legalName": "Example Org",
    "gx:legalRegistrationNumber": {
      "id": "https://example.org/gaiax-legal-registration-number/68a5bbea9518e7e2ac1cc75bcc8819a7edd5c4711e073ffa4bb260034dc6423c/data.json"
    },
    "gx:headquarterAddress": {
      "gx:countrySubdivisionCode": "FR-75"
    },
    "gx:legalAddress": {
      "gx:countrySubdivisionCode": "FR-75"
    }
  }
}
```

## Manifest

```json
{
    "claims": {
        "Legal Name": "$.credentialSubject['gx:legalName']",
        "Legal Registration Number": "$.credentialSubject['gx:legalRegistrationNumber'].id",
        "Headquarter Address Country Subdivision": "$.credentialSubject['gx:headquarterAddress']['gx:countrySubdivisionCode']",
        "Legal Address Country Subdivision": "$.credentialSubject['gx:legalAddress']['gx:countrySubdivisionCode']"
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
  "issuanceDate": "<timestamp>",
  "expirationDate": "<timestamp-in:365d>"
}
```