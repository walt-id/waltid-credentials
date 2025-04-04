# GaiaXTermsAndConditions

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
    "https://registry.lab.gaia-x.eu/development/api/trusted-shape-registry/v1/shapes/jsonld/trustframework#"
  ],
  "type": ["VerifiableCredential" ,"GaiaXTermsAndConditions"],
  "issuanceDate": "2025-02-23T16:44:24.756Z",
  "credentialSubject": {
    "gx:termsAndConditions": "The PARTICIPANT signing the Self-Description agrees as follows:\n- to update its descriptions about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regards to the indicated attributes present in the descriptions.\n\nThe keypair used to sign Verifiable Credentials will be revoked where Gaia-X Association becomes aware of any inaccurate statements in regards to the claims which result in a non-compliance with the Trust Framework and policy rules defined in the Policy Rules and Labelling Document (PRLD).",
    "type": "gx:GaiaXTermsAndConditions",
    "id": "https://www.delta-dao.com/.well-known/2210_gx_tandc.json"
  },
  "issuer": "did:web:delta-dao.com",
  "id": "https://www.delta-dao.com/.well-known/2210_gx_tandc.json"
}
```

## Manifest

```json
{
    "claims": {
        "Gaia-X Terms and Conditions": "$.credentialSubject['gx:termsAndConditions']"
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