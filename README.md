# Miniti

## Project structure

- `public/` - static HTML and manifest files
- `src/` - React source files
  - `components/` - shared UI components
  - `pages/` - app pages and routes
  - `Api/` - API wrapper and service exports
  - `services/` - shared service utilities
  - `state/` - Redux actions, reducers, and store
  - `Utils/` - reusable UI helpers

## Key changes

- centralized axios client in `src/services/apiClient.js`
- moved base URL to `.env.development` with `REACT_APP_API_BASE_URL`
- added ESLint and Prettier config files
- added GitHub Actions workflow at `.github/workflows/ci.yml`

## Run locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Create `.env.development` with your API URL
   ```env
   REACT_APP_API_BASE_URL=https://api.example.com/
   ```
3. Start development server
   ```bash
   npm start
   ```

## Build

```bash
npm run build
```

## Lint and format

```bash
npm run lint
npm run format
```

## Notes

- `src/Api/index.js` exports `services` for `AddressApi` and `PickupApi`
- Most API modules now send requests through `src/services/apiClient.js`
- The current app still uses React Router and Redux for page state management
