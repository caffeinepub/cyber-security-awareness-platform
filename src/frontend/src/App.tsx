import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OnlineSafetyPage from './pages/OnlineSafetyPage';
import DigitalWellbeingPage from './pages/DigitalWellbeingPage';
import GovernmentInitiativesPage from './pages/GovernmentInitiativesPage';
import SecurityMeasuresPage from './pages/SecurityMeasuresPage';
import ComplaintMechanismsPage from './pages/ComplaintMechanismsPage';
import ResourcesPage from './pages/ResourcesPage';
import { LanguageProvider } from './contexts/LanguageContext';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const onlineSafetyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/online-safety',
  component: OnlineSafetyPage,
});

const digitalWellbeingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/digital-wellbeing',
  component: DigitalWellbeingPage,
});

const governmentInitiativesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/government-initiatives',
  component: GovernmentInitiativesPage,
});

const securityMeasuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/security-measures',
  component: SecurityMeasuresPage,
});

const complaintMechanismsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/complaint-mechanisms',
  component: ComplaintMechanismsPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  onlineSafetyRoute,
  digitalWellbeingRoute,
  governmentInitiativesRoute,
  securityMeasuresRoute,
  complaintMechanismsRoute,
  resourcesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
