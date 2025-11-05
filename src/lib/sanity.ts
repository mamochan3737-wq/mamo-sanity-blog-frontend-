import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'jtss7wub',
  dataset: 'production',
  apiVersion: '2024-01-01', // use a UTC date in YYYY-MM-DD format
  useCdn: true, // `false` if you want to ensure fresh data
});
