# WalletHolderCredential

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1", "ndid:context:walletHolder"],
    "id": "0x5ff0713ae0e29ca52a7799370a82534fdf0f25d6e82ae5645e827f0ac34eaf4a",
    "type": ["VerifiableCredential", "WalletHolderCredential"],
    "issuer": "did:ndid:5f76f7b0-bb71-4c3a-9410-9e0a13fc51b0",
    "issuanceDate": "2023-09-14T07:21:13.591Z",
    "credentialSubject": {
        "id": "did:ndid:197f5aa5-cae2-414e-9da0-e2d8ee2d3f3d",
        "walletHolderCredential": {
            "firstName": "สมศักดิ์",
            "lastName": "มั่งมี",
            "address": "92/222 ซอยเสรีไทย  กรุงเทพมหานคร 10240 THAILAND",
            "identifier": "3199611153090",
            "namespace": "citizen_id",
            "serviceID": "001.cust_info_001",
            "requestID": "1f8ba8218162e354c028be342f507517e6bbceae9af3ff689551eea3981a0189",
            "requestMessage": "ท่านกำลังยืนยันตัวตนเพื่อใช้ตามวัตถุประสงค์ของ National Digital ID Wallet และประสงค์ให้ส่งข้อมูลจาก ธนาคารกรุงศรี (Transaction Ref: 31817034)",
            "salt": "tlVqHnQ8HfipI9r2WnL83QPH6Z01yBo0DQaQv7RyYSQ=",
            "aal": 2.2,
            "ial": 2.3,
            "idp": "DC9E1ACB-D450-438F-9558-FE7672F3F3EB"
        }
    },
    "credentialStatus": {
        "id": "0x2ef196ba560d7d72f13d80f405841bc84cec229b70a0a05557c5388d215bb224",
        "type": "NDIDCredentialStatus2021"
    },
    "credentialSchema": {
        "id": "ndid:schema:walletHolder",
        "type": "JsonSchemaValidator2018"
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