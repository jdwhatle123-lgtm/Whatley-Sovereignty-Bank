# UPDATED-LOGIN-CREDENTIALS.md

> Purpose: secure record and instructions for updating login credentials used by the Whatley Sovereignty website. Do NOT store plaintext secrets in repo. Use a secrets manager or local environment variables.

## Storage & security guidelines
- Never commit credentials or `.env` files to version control.
- Use a secrets manager (GitHub Actions Secrets, Azure Key Vault, AWS Secrets Manager, HashiCorp Vault).
- Enable MFA/2FA for all accounts.
- Use strong, unique passwords and rotate regularly (e.g., every 90 days) or after suspected compromise.
- Restrict account permissions to the minimum required (principle of least privilege).
- Audit access and log credential usage.

## Template: credential record
Service | Account / Resource | Username / ID | Credential type | Storage location | Last rotated | Notes
---|---:|---|---|---|---:|---
Example: Dev server | Local dev server (npm start) | developer@example.com | API key / password | GitHub Secrets / local .env (never committed) | 2025-01-15 | Used for local dev only

Replace the example row with actual entries using the same columns. Do not paste secrets here.

## How to use environment variables locally
1. Create a local `.env` in project root (add to `.gitignore`).
2. Add variables:
    ```
    # .env (example)
    SERVER_API_KEY=your_api_key_here
    DB_PASSWORD=your_db_password_here
    ```
3. Use a dotenv loader in Node (if used):
    ```js
    // index.js
    require('dotenv').config();
    const apiKey = process.env.SERVER_API_KEY;
    ```
4. Restart the dev server (`npm start`) after changes.

## CI / Deployment
- Store secrets in the CI/CD provider's secure secrets store, reference them via environment variables in workflows or deployment configuration.
- Do not echo secrets in logs.

## Rotation procedure
1. Create new credential in target system.
2. Update secrets store (GitHub Secret / Vault / .env in secure location).
3. Deploy or restart services that consume the secret.
4. Verify functionality.
5. Revoke old credential and record rotation date in this document.

## Incident response
- Immediately revoke compromised credentials.
- Rotate affected keys/passwords.
- Review access logs and notify stakeholders.
- Update this document with actions taken and new rotation date.

## Contacts
- Repository owner: Whatley Sovereignty Admin
- Incident contact: security@example.org

(Do not store actual secrets in this file. Use the template above to reference where secrets are stored.)