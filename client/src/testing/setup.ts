import '@testing-library/jest-dom/vitest';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
      en: {
        translation: {
          nav: {
            dashboard: 'Dashboard',
            schedule: 'Schedule',
            courses: 'Courses',
            gradebook: 'Gradebook',
            performance: 'Performance',
            announcement: 'Announcement',
            logout: 'Logout'
          },
          dashboard: {
            examsTime: 'EXAMS TIME',
            announcements: 'Announcements',
            whatIsDue: 'What is due'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

