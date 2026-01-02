import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'low-budget-plots-vizag',
  loadComponent: () =>
    import('./pages/ourservices/ourservices.component')
      .then(m => m.LandingComponent),
  data: { seoKey: 'lowBudgetPlots' }
},
{
  path: 'affordable-flats-visakhapatnam',
  loadComponent: () =>
    import('./pages/ourservices/ourservices.component')
      .then(m => m.LandingComponent),
  data: { seoKey: 'affordableFlats' }
},
{
  path: 'budget-lands-near-vizag',
  loadComponent: () =>
    import('./pages/ourservices/ourservices.component')
      .then(m => m.LandingComponent),
  data: { seoKey: 'budgetLands' }
}
];
