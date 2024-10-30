# Ideaflow

**Ideaflow** is a collaborative platform designed to empower users to pitch their startup ideas, view others' innovative projects, and connect with like-minded entrepreneurs. Built with modern web technologies, Ideaflow offers a seamless and secure experience through GitHub authentication, interactive editing tools, and real-time error tracking.

[GitHub Repository](https://github.com/ankitkr-04/ideaflow)

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Pitch & Discover**: Users can pitch their startups or innovative ideas, view, and interact with ideas from other users.
- **GitHub Authentication**: Secure authentication using [Auth.js](https://authjs.dev/) with GitHub as the identity provider.
- **Interactive Editor**: Pitch ideas with enhanced formatting using [UIW Editor](https://uiwjs.github.io/react-md-editor/).
- **Schema-Driven Data**: Managed content and data validation with [Sanity](https://www.sanity.io/) and [GROQ](https://www.sanity.io/docs/groq).
- **Real-Time Error Tracking**: [Sentry](https://sentry.io/) integration for error monitoring.
- **Modern UI Components**: Built with [ShadCN](https://shadcn.dev/) and fully validated using [Zod](https://zod.dev/).
- **Next.js 15 (Canary)**: Leveraging the latest Next.js features and optimizations.

---

## Tech Stack

| Tech           | Description                                              |
|----------------|----------------------------------------------------------|
| **Next.js 15 Canary** | React framework for server-side rendering, API routes, and static site generation. |
| **Sanity**     | Headless CMS for content and schema management.          |
| **GROQ**       | Query language for fetching data from Sanity.            |
| **ShadCN**     | Component library offering ready-to-use UI components.   |
| **Zod**        | TypeScript-first schema validation library.              |
| **UIW Editor** | Markdown editor for structured pitch submissions.        |
| **Auth.js**    | Authentication library with GitHub integration.          |
| **Sentry**     | Error tracking and monitoring.                           |

---

## Getting Started

### Prerequisites
- **Node.js**: Version 20 or above
- **NPM v10.5.2**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitkr-04/ideaflow
   cd ideaflow
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application in development mode:
   ```bash
   npm run dev
   ```
4. Access the application at http://localhost:3000.

## Environment Variables

To configure `ideaflow`, create a `.env.local` file at the root of your project and add the following variables:

```plaintext
AUTH_SECRET="<your-auth-secret>"
AUTH_GITHUB_ID="<your-github-client-id>"
AUTH_GITHUB_SECRET="<your-github-client-secret>"
NEXT_PUBLIC_SANITY_PROJECT_ID="<your-sanity-project-id>"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="vX"
SANITY_WRITE_TOKEN="<your-sanity-write-token>"
```
> **Note:** For security, avoid hardcoding sensitive information in the code. Use .env for local development and securely manage environment variables in your deployment environment.

## Usage

1. **Sign Up / Log In**: Use GitHub to securely log in and create an account on Ideaflow.
2. **Pitch Your Idea**: Use the UIW Editor to format and submit your startup idea.
3. **Browse & Discover**: Explore other users’ pitches and find new ideas.
4. **Error Tracking**: Sentry integration monitors errors and ensures a smooth user experience.

---

## Contributing

We welcome contributions! To get involved:

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Commit and push your changes.
4. Open a Pull Request.

Please ensure your code follows project standards and passes linting checks.

---

## License

Ideaflow is licensed under the MIT License. See `LICENSE` for more information.

---

## Contact

For questions or feedback, please reach out to [ak0182274@gmail.com](mailto:ak0182274@gmail.com).

