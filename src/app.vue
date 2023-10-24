<template>
    <Html class="" lang="en">
        <Body class="bg-gray-900 text-white antialiased transition-colors duration-300 font-sans">
            <NuxtLayout class="">
                <NuxtLoadingIndicator />
                <NuxtErrorBoundary>
                    <!--page -->
                    <!--<MonacoEditor v-model="val" class="h-48 bg-white" lang="json"-->
                    <!--&gt;</MonacoEditor>-->

                    <NuxtPage class="h-full max-w-6xl mx-auto" />

                    <template #error="{ error, clearError }">
                        <p>An error occurred: {{ error }}</p>

                        <button class="rounded-md bg-white border p-1 mt-2" @click="clearError">Reset error</button>
                    </template>
                </NuxtErrorBoundary>
            </NuxtLayout>
        </Body>
    </Html>
</template>

<script lang="ts" setup>
import "@unocss/reset/tailwind-compat.css";
import "uno.css";

const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());

const val = ref(
    "{\n" +
        '    "@context": [\n' +
        '      "https://www.w3.org/2018/credentials/v1",\n' +
        '      "https://www.w3.org/2018/credentials/examples/v1"\n' +
        "    ],\n" +
        '    "id": "http://example.gov/credentials/3732",\n' +
        '    "type": [\n' +
        '      "VerifiableCredential",\n' +
        '      "UniversityDegreeCredential"\n' +
        "    ],\n" +
        '    "issuer": {\n' +
        '      "id": "did:web:vc.transmute.world"\n' +
        "    },\n" +
        '    "issuanceDate": "2020-03-10T04:24:12.164Z",\n' +
        '    "credentialSubject": {\n' +
        '      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n' +
        '      "degree": {\n' +
        '        "type": "BachelorDegree",\n' +
        '        "name": "Bachelor of Science and Arts"\n' +
        "      }\n" +
        "    },\n" +
        '    "proof": {\n' +
        '      "type": "JsonWebSignature2020",\n' +
        '      "created": "2020-03-21T17:51:48Z",\n' +
        '      "verificationMethod": "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",\n' +
        '      "proofPurpose": "assertionMethod",\n' +
        '      "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFZERTQSJ9..OPxskX37SK0FhmYygDk-S4csY_gNhCUgSOAaXFXDTZx86CmI5nU9xkqtLWg-f4cqkigKDdMVdtIqWAvaYx2JBA"\n' +
        "    }\n" +
        "  }"
);
</script>
