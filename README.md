# Numerology Report Generator

An elegant and user-friendly app that generates personalized numerology reports based on user input.

## User Journeys

1. [Sign Up](docs/journeys/sign-up.md) - Create a new account to start generating reports.
2. [Log In](docs/journeys/log-in.md) - Access your account to manage and view your reports.
3. [Generate Report](docs/journeys/generate-report.md) - Input your details to receive a personalized numerology report.
4. [View Reports](docs/journeys/view-reports.md) - Browse through your generated numerology reports.
5. [Send Report via Email](docs/journeys/send-report-email.md) - Share your numerology report through email.

## External Services

- **Supabase**: Used for authentication to manage user accounts securely.
- **Resend**: Handles sending emails with numerology reports to users.
- **Sentry**: Provides error logging and monitoring for both frontend and backend.
- **Drizzle ORM**: Manages database interactions with CockroachDB.
- **Progressier**: Adds PWA functionalities to the app, enabling offline support and installability.

## Environment Variables

All necessary environment variables are listed in the [.env](./.env) file.

- `COCKROACH_DB_URL`: URL for the CockroachDB database.
- `NPM_TOKEN`: Token for accessing private npm packages.
- `VITE_PUBLIC_APP_ID`: Public app identifier for Supabase and other services.
- `VITE_PUBLIC_APP_ENV`: Environment of the app (e.g., production, development).
- `VITE_PUBLIC_SENTRY_DSN`: DSN for Sentry error logging.
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`: Website ID for Umami analytics.
- `RESEND_API_KEY`: API key for Resend email service.

## Design Details

### Color Palette

- **Primary**: #4F46E5 (Indigo)
- **Secondary**: #EC4899 (Pink)
- **Accent**: #10B981 (Green)

### Fonts

- **Primary Font**: Inter, sans-serif

### Other Design Elements

- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices.
- **Accessibility**: Proper labels, focus states, and contrast ratios for better accessibility.
- **Smooth Transitions**: Enhancements for interactive elements like buttons and forms.

## Documentation

Detailed instructions for each user journey are available in the `docs/journeys/` directory.
