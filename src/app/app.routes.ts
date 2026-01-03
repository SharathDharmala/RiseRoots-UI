import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/ourservices/ourservices.component').then((m) => m.LandingComponent),
    data: { section: 'services' }, // ✅ ADD THIS
  },

  {
    path: 'real-estate',
    data: { section: 'real-estate' }, // ✅ ADD THIS
    children: [
      { path: '', redirectTo: 'open-plots', pathMatch: 'full' },

      {
        path: 'open-plots',
        loadComponent: () =>
          import('./pages/real-estate/real-estate.component').then((m) => m.RealEstateComponent),
        data: { category: 'plots' },
      },
      {
        path: 'residential-flats',
        loadComponent: () =>
          import('./pages/real-estate/real-estate.component').then((m) => m.RealEstateComponent),
        data: { category: 'flats' },
      },
      {
        path: 'farm-lands',
        loadComponent: () =>
          import('./pages/real-estate/real-estate.component').then((m) => m.RealEstateComponent),
        data: { category: 'farmLands' },
      },
    ],
  },

  /* SEO routes (already correct) */
  {
    path: 'low-budget-plots-vizag',
    loadComponent: () =>
      import('./pages/ourservices/ourservices.component').then((m) => m.LandingComponent),
    data: { seoKey: 'lowBudgetPlots', section: 'services' },
  },
  {
    path: 'affordable-flats-visakhapatnam',
    loadComponent: () =>
      import('./pages/ourservices/ourservices.component').then((m) => m.LandingComponent),
    data: { seoKey: 'affordableFlats', section: 'services' },
  },
  {
    path: 'budget-lands-near-vizag',
    loadComponent: () =>
      import('./pages/ourservices/ourservices.component').then((m) => m.LandingComponent),
    data: { seoKey: 'budgetLands', section: 'services' },
  },

  {
    path: '',
    redirectTo: 'low-budget-plots-vizag',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'low-budget-plots-vizag',
  },
];
