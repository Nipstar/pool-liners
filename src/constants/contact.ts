export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE || '07442986034',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@bespoke-pool-liners.co.uk',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Romsey, Hampshire, UK',
} as const;

export const BUSINESS_HOURS = {
  weekdays: 'Mon-Fri 8am-6pm',
  saturday: 'Sat 9am-1pm',
  sunday: 'Closed',
} as const;

export const RESPONSE_TIME = 'Within 24 hours' as const;
