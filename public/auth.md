# LifeWise auth.md

Welcome to the LifeWise Agent Authentication and Registration Discovery protocol.

This document enables autonomous AI agents to discover authentication requirements, registration endpoints, and flow metadata for the LifeWise Family Operating System API.

## Audience

This specification is intended for AI agents, multi-agent frameworks, and automated client software accessing the LifeWise resource servers.

## OAuth Discovery Endpoints

- OAuth Protected Resource Metadata (RFC 9728): https://www.lifewiseee.com/.well-known/oauth-protected-resource
- OAuth Authorization Server Metadata (RFC 8414): https://www.lifewiseee.com/.well-known/oauth-authorization-server
- OpenID Connect Discovery: https://www.lifewiseee.com/.well-known/openid-configuration
- API Catalog (RFC 9727): https://www.lifewiseee.com/.well-known/api-catalog

## Resource Server Information

- Resource: https://www.lifewiseee.com
- Authorization Servers: https://www.lifewiseee.com
- Scopes Supported: openid, profile, email, lifewise.family.read, lifewise.family.write, lifewise.bills.read, lifewise.medicine.read
- Bearer Methods Supported: header

## Agent Registration & Provisioning Methods

LifeWise supports three standard registration and credential claim flows for AI agents:

### 1. Anonymous Agent Flow
Allows autonomous exploration and public information queries (features, plans, documentation).
- identity_types_supported: ["anonymous"]
- anonymous.credential_types_supported: ["bearer_token"]
- register_uri: https://www.lifewiseee.com/api/agent/register
- claim_uri: https://www.lifewiseee.com/api/agent/claim

### 2. Verified Email Flow
Allows agents operating on behalf of a verified human email account.
- identity_assertion.assertion_types_supported: ["verified_email"]
- credential_types_supported: ["bearer_token"]
- claim_uri: https://www.lifewiseee.com/api/agent/claim

### 3. ID-JAG (Identity Assertion) Flow
Allows cryptographic identity assertions and federated agent tokens.
- identity_types_supported: ["identity_assertion"]
- identity_assertion.assertion_types_supported: ["urn:ietf:params:oauth:token-type:id-jag"]
- credential_types_supported: ["bearer_token"]
- register_uri: https://www.lifewiseee.com/api/agent/register
- revocation_uri: https://www.lifewiseee.com/api/agent/revoke
- events_supported: ["revocation"]

## Machine-Readable Agent Auth Metadata

```json
{
  "agent_auth": {
    "skill": "https://www.lifewiseee.com/auth.md",
    "register_uri": "https://www.lifewiseee.com/api/agent/register",
    "methods": [
      {
        "type": "anonymous",
        "identity_types_supported": ["anonymous"],
        "credential_types_supported": ["bearer_token"],
        "claim_uri": "https://www.lifewiseee.com/api/agent/claim"
      },
      {
        "type": "verified_email",
        "assertion_types_supported": ["verified_email"],
        "credential_types_supported": ["bearer_token"],
        "claim_uri": "https://www.lifewiseee.com/api/agent/claim"
      },
      {
        "type": "identity_assertion",
        "identity_types_supported": ["identity_assertion"],
        "assertion_types_supported": ["urn:ietf:params:oauth:token-type:id-jag"],
        "credential_types_supported": ["bearer_token"],
        "revocation_uri": "https://www.lifewiseee.com/api/agent/revoke",
        "events_supported": ["revocation"]
      }
    ]
  }
}
```

## Credential Use

All authenticated requests to LifeWise API endpoints must include the bearer token in the HTTP Authorization header:
```http
Authorization: Bearer <agent_token>
```
