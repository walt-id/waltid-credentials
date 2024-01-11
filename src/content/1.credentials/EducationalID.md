# EducationalID

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://europa.eu/schemas/v-id/2020/v1",
    "https://europa.eu/schemas/eidas/2020/v1"
  ],
  "id": "urn:uuid:3252d03c-c168-45fd-bf0a-b0b838a65e2c",
  "type": [
    "VerifiableCredential",
    "EducationalID"
  ],
  "issuer": "did:jwk:eyJrdHkiOiJPS1AiLCJkIjoiSElOOVdjVkNxaEd2d1o4STQ3V2VNdHhHY2VTS3B2YUVudTVlWEFvV3lEbyIsImNydiI6IkVkMjU1MTkiLCJraWQiOiJDRlEtTnJhNXlueUJzZnh3eTdhTmY4ZHVBRVVDTWxNSXJSSXJEZzZESXk0IiwieCI6Img1bmJ3Nlg5Sm1JMEJ2dVE1TTBKWGZ6TzhzMmVFYlBkVjI5d3NIVEw5cGsifQ==",
  "issuanceDate": "2023-12-13T11:56:31.382517677Z",
  "issued": "2023-12-13T11:56:19Z",
  "validFrom": "2023-12-13T11:56:19Z",
  "credentialSubject": {
    "id": "did:key:z6MksJPJvvPhV16vRPNkoDyGfp82bacJWor1fTPW62ZXL4Pw#z6MksJPJvvPhV16vRPNkoDyGfp82bacJWor1fTPW62ZXL4Pw",
    "identifier": [
      {
        "schemeID": "European Student Identifier",
        "value": "urn:schac:personalUniqueCode:int:esi:math.example.edu:xxxxxxxxxx",
        "id": "urn:schac:personalUniqueCode:int:esi:university.eu:firstlast@email.eu"
      }
    ],
    "schacPersonalUniqueID": "urn:schac:personalUniqueID:int:passport:{COUNTRY_CODE}:{PASSPORT_CODE}",
    "commonName": "Frist Last",
    "displayName": "Frist Last",
    "firstName": "Frist",
    "familyName": "Ferreira",
    "dateOfBirth": "19730429",
    "schacHomeOrganization": " ",
    "mail": "first.last@university.eu",
    "eduPersonPrincipalName": "first.last@university.eu",
    "eduPersonPrimaryAffiliation": "student",
    "schacPersonalUniqueCode": "urn:schac:personalUniqueCode:int:esi:university.eu:firstlast@email.eu",
    "eduPersonAffiliation": [
      {
        "value": "student, staff"
      }
    ],
    "eduPersonScopedAffiliation": [
      {
        "value": "student@university.eu, staff@university.eu"
      }
    ],
    "eduPersonAssurance": [
      {
        "value": "student, staff"
      }
    ]
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
  "issuanceDate": "<timestamp>"
}
```