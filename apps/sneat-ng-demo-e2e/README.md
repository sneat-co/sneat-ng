# sneat-ng demo end-to-end tests

Run the tests with the local Nx task runner when Nx Cloud is unavailable. Check that the Angular development server's default port `4200` is free first, then run:

```sh
NX_DAEMON=false pnpm exec nx run sneat-ng-demo-e2e:e2e --runner=local
```

Nx starts the configured development server for the test and stops it when Cypress exits.
