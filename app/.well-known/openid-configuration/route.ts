import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    issuer: "https://www.lifewiseee.com",
    authorization_endpoint: "https://www.lifewiseee.com/oauth/authorize",
    token_endpoint: "https://www.lifewiseee.com/api/oauth/token",
    userinfo_endpoint: "https://www.lifewiseee.com/api/oauth/userinfo",
    jwks_uri: "https://www.lifewiseee.com/.well-known/jwks.json",
    registration_endpoint: "https://www.lifewiseee.com/api/agent/register",
    scopes_supported: [
      "openid",
      "profile",
      "email",
      "lifewise.family.read",
      "lifewise.family.write",
      "lifewise.bills.read",
      "lifewise.medicine.read"
    ],
    response_types_supported: ["code", "token", "id_token"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"],
    agent_auth: {
      skill: "https://www.lifewiseee.com/auth.md",
      auth_md: "https://www.lifewiseee.com/auth.md",
      register_uri: "https://www.lifewiseee.com/api/agent/register",
      registration_endpoint: "https://www.lifewiseee.com/api/agent/register",
      identity_types_supported: ["identity_assertion", "anonymous"],
      identity_assertion: {
        assertion_types_supported: [
          "urn:ietf:params:oauth:token-type:id-jag",
          "verified_email"
        ],
        credential_types_supported: ["bearer", "bearer_token"],
        claim_uri: "https://www.lifewiseee.com/api/agent/claim",
        revocation_uri: "https://www.lifewiseee.com/api/agent/revoke",
        events_supported: ["revocation"]
      },
      anonymous: {
        credential_types_supported: ["bearer", "bearer_token"],
        claim_uri: "https://www.lifewiseee.com/api/agent/claim"
      }
    }
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
