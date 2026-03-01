# 🌐 Akko Cypress Automation – Checkout Flow

##  Objective

Automate the **“Purchase a New Plan”** portion of the Akko Checkout application using Cypress.

This automation suite focuses on:

- UI validation of the checkout form  
- Business rule validation  
- Backend contract validation for the registration API  

---

##  Tech Stack

- Cypress  
- JavaScript (Node.js)  
- Stripe Test Mode  
- API Contract Testing  
- Page Object Model (POM)  

---

##  Project Structure

```
akko-cypress-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── purchasePlan.cy.js
│   │   └── registrationApi.cy.js
│   │
│   ├── pages/
│   │   └── CheckoutPage.js
│   │
│   └── support/
│       └── commands.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧪 Test Coverage

### 🖥 UI Test Cases

- Register button disabled on initial load  
- Invalid promo code displays error message  
- Register remains disabled without accepting terms  

These tests validate:

- Form behavior  
- Required field validation  
- Business rule enforcement  
- Promo code error handling  

---

### 🌐 API Contract Test

- Registration endpoint returns structured error when Stripe token is invalid  

This validates:

- Backend stability  
- Proper error handling  
- Response structure integrity  
- Non-crashing behavior  

---

## 💡 Test Strategy

Stripe Elements use secure **cross-origin iframes**, which cannot be directly automated using Cypress due to browser security restrictions.

Therefore:

- UI tests validate behavior up to the Credit card details
- Payment validation is covered through API contract testing  

This ensures stable and reliable automation while respecting browser security constraints.

---

## 🚀 How To Run The Tests

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Open Cypress Test Runner

```bash
npx cypress open
```

### 3️⃣ Run in Headless Mode

```bash
npx cypress run
```

---

## 🌍 Environment

Base URL configured in `cypress.config.js`:

```
https://staging.checkout.akko.app
```

---

## 🏁 Summary

This automation suite demonstrates:

- Structured test design  
- Clean Page Object Model implementation  
- Balanced UI and API validation strategy  
- Understanding of browser security constraints  
- Stable, submission-ready Cypress setup  