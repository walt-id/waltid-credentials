# KycCredential

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiableCredential",
    "KycCredential"
  ],
  "id": "urn:uuid:fd0e0f93-5011-4fa2-9020-fa7da57df947",
  "credentialSubject": {
    "id": "did:key:z6MkgjsyqQUvtW4wPWKkqffiygdCDathYK1vvpSkxC7qCmqr#z6MkgjsyqQUvtW4wPWKkqffiygdCDathYK1vvpSkxC7qCmqr",
    "givenName": "HASSAN MOUSA MOHAMMAD ABUHELWEH",
    "surname": "ABUHELWEH",
    "verifiedEmail": "email@gmail.com",
    "verifiedPhone": "+971557032203",
    "documentNumber": "R301855",
    "personalNumber": "R301855",
    "birthDate": "1984-10-06",
    "expiryDate": "2027-11-15",
    "documentType": "P",
    "issuingState": "JOR",
    "nationality": "Jordan",
    "sex": "M",
    "faceMatch": 0.8,
    "faceLiveness": "Genuine",
    "authenticityLiveness": "Genuine",
    "documents": [
      {
        "name": "Face",
        "url": ""
      },
      {
        "name": "document_front",
        "url": ""
      },
      {
        "name": "document_back",
        "url": ""
      }
    ]
  },
  "issuer": {
    "id": "did:key:z6MkjoRhq1jSNJdLiruSXrFFxagqrztZaXHqHGUTKJbcNywp",
    "name": "KYC Provider"
  },
  "issuanceDate": "2024-05-13T08:29:25.744750031Z",
  "validFrom": "2024-05-13T08:29:25.744775222Z",
  "expirationDate": "2025-05-13T08:29:25.744794971Z"
} 
```

## Manifest

```json
{
    "claims": {
        "Name": "$.credentialSubject.givenName",
        "Surname": "$.credentialSubject.surname",
        "Email": "$.credentialSubject.verifiedEmail",
        "Phone": "$.credentialSubject.verifiedPhone",
        "Document Number": "$.credentialSubject.documentNumber",
        "Personal Number": "$.credentialSubject.personalNumber",
        "Birth Date": "$.credentialSubject.birthDate",
        "Expiry Date": "$.credentialSubject.expiryDate",
        "Document Type": "$.credentialSubject.documentType",
        "Issuing State": "$.credentialSubject.issuingState",
        "Nationality": "$.credentialSubject.nationality",
        "Sex": "$.credentialSubject.sex",
        "Face Match": "$.credentialSubject.faceMatch",
        "Face Liveness": "$.credentialSubject.faceLiveness",
        "Authenticity Liveness": "$.credentialSubject.authenticityLiveness"
    }
}
```

## Mapping example

```json
{
    "id": "<uuid>",
    "credentialSubject": {
        "id": "<subjectDid>"
    },
    "issuer": {
        "id": "<issuerDid>"
    },
    "issuanceDate": "<timestamp>",
    "validFrom": "<timestamp>",
    "expirationDate": "<timestamp-in:365d>"
}
```