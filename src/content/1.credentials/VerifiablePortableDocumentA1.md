# VerifiablePortableDocumentA1

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "did:ebsi:zf39qHTXaLrr6iy3tQhT3UZ",
    "type": ["VerifiableCredential", "VerifiableAttestation", "VerifiablePortableDocumentA1"],
    "issuer": "did:ebsi:zf39qHTXaLrr6iy3tQhT3UZ",
    "issuanceDate": "2022-11-10T19:19:47.287Z",
    "validFrom": "2022-11-10T19:19:47.287Z",
    "issued": "2022-11-10T19:19:47.287Z",
    "credentialSubject": {
            "id": "subjectDID",
            "section1": {
                "personalIdentificationNumber": "1",
                "sex": "01",
                "surname": "Jane",
                "forenames": "Doe",
                "dateBirth": "1985-08-15",
                "nationalities": [
                    "BE"
                ],
                "stateOfResidenceAddress": {
                    "streetNo": "sss, nnn ",
                    "postCode": "ppp",
                    "town": "ccc",
                    "countryCode": "BE"
                },
                "stateOfStayAddress": {
                    "streetNo": "sss, nnn ",
                    "postCode": "ppp",
                    "town": "ccc",
                    "countryCode": "BE"
                }
            },
            "section2": {
                "memberStateWhichLegislationApplies": "DE",
                "startingDate": "2022-10-09",
                "endingDate": "2022-10-29",
                "certificateForDurationActivity": true,
                "determinationProvisional": false,
                "transitionRulesApplyAsEC8832004": false
            },
            "section3": {
                "postedEmployedPerson": false,
                "employedTwoOrMoreStates": false,
                "postedSelfEmployedPerson": true,
                "selfEmployedTwoOrMoreStates": true,
                "civilServant": true,
                "contractStaff": false,
                "mariner": false,
                "employedAndSelfEmployed": false,
                "civilAndEmployedSelfEmployed": true,
                "flightCrewMember": false,
                "exception": false,
                "exceptionDescription": "",
                "workingInStateUnder21": false
            },
            "section4": {
                "employee": false,
                "selfEmployedActivity": true,
                "nameBusinessName": "1",
                "registeredAddress": {
                    "streetNo": "1, 1 1",
                    "postCode": "1",
                    "town": "1",
                    "countryCode": "DE"
                }
            },
            "section5": {
                "noFixedAddress": true
            },
            "section6": {
                "name": "National Institute for the Social Security of the Self-employed (NISSE)",
                "address": {
                    "streetNo": "Quai de Willebroeck 35",
                    "postCode": "1000",
                    "town": "Bruxelles",
                    "countryCode": "BE"
                },
                "institutionID": "NSSIE/INASTI/RSVZ",
                "officeFaxNo": "",
                "officePhoneNo": "0800 12 018",
                "email": "info@rsvz-inasti.fgov.be",
                "date": "2022-10-28",
                "signature": "Official signature"
            }
        },
    "credentialSchema": {
        "id": "https://api-conformance.ebsi.eu/trusted-schemas-registry/v3/schemas/z5qB8tydkn3Xk3VXb15SJ9dAWW6wky1YEoVdGzudWzhcW",
        "type": "FullJsonSchemaValidator2021"
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
    "issuanceDate": "<timestamp-ebsi>",
    "issued": "<timestamp-ebsi>",
    "validFrom": "<timestamp-ebsi>",
    "expirationDate": "<timestamp-ebsi-in:365d>"
}
```