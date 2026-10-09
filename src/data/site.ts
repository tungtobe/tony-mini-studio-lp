import { useTranslations, type Locale } from '../i18n/ui';

/** Studio-wide settings. Edit here rather than in components. */
export const site = {
  name: 'Tony Studio',
  /** Where "Share an idea" / "Suggest an idea" buttons send mail. */
  contactEmail: 'tung.tobe@gmail.com',
  githubUrl: 'https://github.com/tungtobe',
};

/** mailto: link with a localized subject and a short idea template pre-filled. */
export function ideaMailto(locale: Locale): string {
  const t = useTranslations(locale);
  const params = [`subject=${encodeURIComponent(t('contact.subject'))}`, `body=${encodeURIComponent(t('contact.body'))}`];
  return `mailto:${site.contactEmail}?${params.join('&')}`;
}
