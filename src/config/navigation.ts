export interface NavItem {
  key: string;
  to: string;
  translationKey: string;
}

export const navigationItems: NavItem[] = [
  { key: 'home', to: 'hero', translationKey: 'nav.home' },
  { key: 'services', to: 'services', translationKey: 'nav.services' },
  { key: 'plans', to: 'plans', translationKey: 'nav.plans' },
  { key: 'about', to: 'about', translationKey: 'nav.about' },
  { key: 'contact', to: 'contact', translationKey: 'nav.contact' },
];
