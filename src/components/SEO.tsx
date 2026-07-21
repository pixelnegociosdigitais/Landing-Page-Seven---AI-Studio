interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
}

export default function SEO({ title, description, type = 'website', image }: SEOProps) {
  // Safe no-op to allow pages to call <SEO /> without duplicating/competing with RouteMeta
  return null;
}
