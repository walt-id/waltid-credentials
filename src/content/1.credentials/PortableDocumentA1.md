# PortableDocumentA1

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "id": "did:ebsi:635ba519cd19764e84ea67dd",
    "type": ["VerifiableCredential", "VerifiableAttestation", "PortableDocumentA1"],
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "image": {
            "id": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w",
            "type": "Image"
        },
        "name": "CH Authority",
        "type": "Profile",
        "url": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w"
    },
    "issuanceDate": "2022-11-10T19:19:47.287Z",
    "validFrom": "2022-11-10T19:19:47.287Z",
    "issued": "2022-11-10T19:19:47.287Z",
    "credentialSubject": {
        "section1": {
            "personalIdentificationNumber": "1",
            "sex": "01",
            "surname": "Forcher",
            "forenames": "Joe Marvin",
            "birthName": "Rudolf",
            "dateBirth": "1982-08-15",
            "nationalities": ["BE"],
            "placeOfBirth": "Bruxelles",
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
            "employeeIdentificationNumber": "1",
            "nameBusinessName": "1",
            "registeredAddress": {
                "streetNo": "1, 1 1",
                "postCode": "1",
                "town": "1",
                "countryCode": "DE"
            }
        },
        "section5": {
            "companyNamesAndIdNumber": ["Firma Mustermann GmbH, 12345", "Company Two"],
            "companyAddresses": ["Quai de Willebroeck 35, 1000, Bruxelles, BE", "second address"],
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
            "email": "some@email.com",
            "date": "2022-10-28",
            "signature": "Official signature"
        },
        "id": "did:ebsi:zgsaCQxPaQwA4VcNRsjwUBFyeHSVwcyCnaXnfKYsSzUkZ"
    },
    "credentialSchema": {
        "id": "https://api-test.ebsi.eu/trusted-schemas-registry/v2/schemas/z3BTAA7Cs3qw8UV8YtgCVMicPNkaYHfFZZPfUfXAbFvng",
        "type": "FullJsonSchemaValidator2021"
    },
    "evidence": {
        "documentPresence": "Physical",
        "evidenceDocument": "A1",
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