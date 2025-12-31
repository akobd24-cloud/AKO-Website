declare module '@vercel/analytics/next' {
  export interface AnalyticsProps {
    beforeSend?: (event: { type: 'pageview' | 'event'; url: string }) => { type: 'pageview' | 'event'; url: string } | null;
    debug?: boolean;
    mode?: 'auto' | 'development' | 'production';
  }
  export function Analytics(props?: AnalyticsProps): null;
}

declare module '@vercel/analytics/react' {
  export interface AnalyticsProps {
    beforeSend?: (event: { type: 'pageview' | 'event'; url: string }) => { type: 'pageview' | 'event'; url: string } | null;
    debug?: boolean;
    mode?: 'auto' | 'development' | 'production';
  }
  export function Analytics(props?: AnalyticsProps): null;
}

