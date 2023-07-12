import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "portfoliositearthur";
const FB_CLIENT_EMAIL = "firebase-adminsdk-8q1u3@portfoliositearthur.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChkgwHRFokgvnF\nzpXBAgYIu2h4SNhevoyuB+m+zVqAws23bOvIKF5TTsAB18v+Gf2O9rXZx57Nz9zE\nWKSHLNV0FrZK3fsvV+iBEDBLbXOykA147C3kERK6dSN6ChcJcOpb2xqs0R3Ps8YQ\njfHrpx489QpIQUk/n99WBVYEOmKYeJFcCl6fKlCczUtofk2mFchqwE9nGHJi+kC6\nmOGQupBnCTaHgAaS03T3uY02kQ6a9OIBPUPNnjNwmM+8aLMJ7ffIRaFhhK/Z5Wzk\nCJlP2ECz80ahjUsQ9aCRvQDce9/QkJKy7VGHzo9awjG/tVWQ7HjM+proOeXHIrw4\nCmQgv08fAgMBAAECggEAAq1jCNRE3XU2Dt85dQvAwKdiihh7HG3Z2jY2c5JCRaO0\nvFgD7Hq2MjADI7DeelHx4uNpofe1rIwE0fKrs6dXzCWXJv9AJPFJO/6lIadpJss1\nk6fvknOxsDSpzW1yqS5141StlRNI+ALEP8CAGz/RIkoSPed2F+ikHlGrywE89MaH\nK2C8puvAaNQ8bMP/0UcqrmNrW/WWq3IeYHr6I3rDsY6d5yHiD6/LIq1oVBkMx/w9\noc5R75Pd6LW9Y1gEbhXhpS4N/sf3oSMmnG1AxDsIFk+KBcV0emdeqDzqyRzKdKfz\njhSRNwHJa9lJIuRO0PV30fR4dEDtPx+UcnrM79ozLQKBgQDYamkCNASAloqWKt6P\n4MclSHPK0zfwhhESxreB1FWi+i8ZE5rCDzMcubvNiH36JcbuSPEgYfogVc920PK8\ngsClyE71Jt8N5TSV+z4eGSxc3D8qwo62nGeXLg0kuxEQmjT7mjuM0BQa9rw9dWNW\n1UIY9e+56/3zpYebv2v2jscXYwKBgQC/H4fLNwdTQJwAgxIbryEsRFDr7hoXTb9g\n9yXPNVeilTfco/Zoc9rzB6la5yxFI7Ht06o3ndekOCDSAT/DnoZ8L+kVHNjNVYLE\np8tiYC4OsAxZ+aSlLkIYDWnrmnQZZAzRJvSaHHVvgmgLhMXO/v7eh9/cu/JQIcJW\nVVAVWnNMFQKBgQC7o++uSFnLADvjHgJg73zb16kGKALtmeB9zixX9jnWGGPzsyrQ\nrYsckfHCsGDCHjUQb9AZyrmrhZtfIqYESr4sP7QuHOjzTFM+41slj6AGV7SxJ4XD\n0XKEAxrESSnvojTkHgMaAWQdSOdHxls+c6NerwaOxo4mzdP5d4xtd7gpjwKBgQCU\nDMm1SpBbFk6COwY4+cW5s8X3rP77FFfutiTMyWZ0ZCDcwwpqyWxPHJ089JyfhlIb\nh/5wjM3xwSTzaNJLJ67H3pkwqKLtFJNy4QQ01Yp4CDnZLQA0kIvUc/eb8Y6D6LPh\nBMsv4mG6GouceKJ+gZtPKHPqWpEPL8eJ9xZNJD7yLQKBgDb5XQYzQEli+4Mwaec6\nZPGIBEROAhLA4F2M5qehP5tefUqvYKRanrs441tbExqSKEAtWFVjCL69jyhweUjA\n87yuJu9HM2oRB2sIgEyHI+2R/ez9OZbsDmKF/okEZJBlU0aTK7gQvZS4ZU2w9SWy\nfE5imTEGzDMx1ht/XZpzjjOX\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
