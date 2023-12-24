/**
 * Deployment steps
 * Test, optimize, build and deployment.
 */

// 1. Test code: Test our code so that there are no errors.
// 2. Optimize code: Lazy loading etc.
// 2.1. Load a certain chunks of code only when it's needed.
// 2.2. When we use SPA, we build a big JS code bundle, and that code should be downloaded for every visitor.
// 2.3. We wanna split our code (our bundle) in a groups of small bundle for each route.
// 2.4. React.lazy(() => import("pathOfPage")) allows us to load a script when it's needed.
// 3. Build our app for prod: Execute a script which bundle and minified our code.
// 4. Deployment: Upload our code in a real server.
// 5. Configure our server: Configuration our hosting provider.
