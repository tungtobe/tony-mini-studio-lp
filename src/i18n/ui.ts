export const locales = ['en', 'ja', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A value that must be provided for every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

export const languageNames: Localized = {
  en: 'English',
  ja: '日本語',
  vi: 'Tiếng Việt',
};

export const htmlLang: Localized = {
  en: 'en',
  ja: 'ja',
  vi: 'vi',
};

export function localePath(locale: Locale, hash = ''): string {
  const base = locale === defaultLocale ? '/' : `/${locale}/`;
  return hash ? `${base}#${hash}` : base;
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

const en = {
  'meta.title': 'Tony Studio: tiny apps for productive work',
  'meta.description':
    'Tony Studio builds small, focused tools that remove one tedious task from your workday. Meet Comtor-chan, Transcriber-kun and SRS.',

  'nav.apps': 'Apps',
  'nav.philosophy': 'Philosophy',
  'nav.process': 'How we build',
  'nav.cta': 'Explore apps',
  'nav.language': 'Language',
  'nav.skip': 'Skip to content',

  'hero.eyebrow': 'Tiny apps · Real productivity',
  'hero.title.lead': 'Tiny apps that give you',
  'hero.title.highlight': 'hours back.',
  'hero.subtitle':
    'Tony Studio builds small, focused tools we call mini apps. Each one removes one tedious task from your workday, and does that one job really well.',
  'hero.primary': 'Explore the apps',
  'hero.secondary': 'Why mini?',
  'hero.stat.apps': 'mini apps shipped',
  'hero.stat.languages': 'languages supported',
  'hero.stat.focus': 'job per app, done well',
  'hero.visual.label': 'A home screen of Tony Studio mini apps',

  'apps.eyebrow': 'The collection',
  'apps.title': 'Meet the mini apps',
  'apps.subtitle':
    'Every app started as a real annoyance at work. Pick the one that matches your day.',
  'apps.visit': 'Visit website',
  'apps.opensNewTab': '(opens in a new tab)',
  'apps.platforms': 'Platforms',
  'apps.status.live': 'Live',
  'apps.status.beta': 'Beta',
  'apps.status.soon': 'Coming soon',
  'apps.next.title': 'Next mini app',
  'apps.next.body':
    'Something small is brewing. Have a repetitive task you would love to see disappear?',
  'apps.next.cta': 'Suggest an idea',
  'contact.subject': 'Mini app idea for Tony Studio',
  'contact.body': "Hi Tony Studio,\n\nThe task I'd love to see disappear:\n\nHow often I do it:\n\nTools I use today:\n",

  'principles.eyebrow': 'Philosophy',
  'principles.title': 'Why mini?',
  'principles.subtitle':
    'Big suites try to do everything. We would rather do one thing so well you forget it was ever a chore.',
  'principles.focus.title': 'One job, done well',
  'principles.focus.body':
    'Each app has a single purpose. No bloated menus, no learning curve.',
  'principles.fast.title': 'Useful in seconds',
  'principles.fast.body':
    'Open it, use it, get back to work. Value on the first try, not after onboarding.',
  'principles.private.title': 'Privacy-minded',
  'principles.private.body':
    'Your work data stays yours. We prefer local processing whenever we can.',
  'principles.multilingual.title': 'Made for multilingual teams',
  'principles.multilingual.body':
    'Built by people working across English, Japanese and Vietnamese, for teams like them.',

  'process.eyebrow': 'How we build',
  'process.title': 'From annoyance to app',
  'process.step1.title': 'Spot the friction',
  'process.step1.body': 'We look for the small, repeated tasks that quietly eat hours every week.',
  'process.step2.title': 'Build the smallest fix',
  'process.step2.body': 'We ship the simplest tool that removes the pain completely.',
  'process.step3.title': 'Polish with real users',
  'process.step3.body': 'We iterate with people using it daily until it feels effortless.',

  'cta.title': 'Got a task that eats your day?',
  'cta.body':
    'The best mini apps start as someone’s small complaint. Tell us yours and it might become the next one.',
  'cta.primary': 'Share an idea',
  'cta.secondary': 'Browse apps',

  'footer.tagline': 'Tiny apps for productive work.',
  'footer.apps': 'Apps',
  'footer.rights': 'All rights reserved.',
} as const;

export type UIKey = keyof typeof en;

export const ui: Localized<Record<UIKey, string>> = {
  en,
  ja: {
    'meta.title': 'Tony Studio｜仕事を速くする小さなアプリ',
    'meta.description':
      'Tony Studio は、仕事の「ちょっと面倒」をひとつずつ解消する小さなツールをつくるスタジオです。Comtor ちゃん、Transcriber くん、SRS を紹介します。',

    'nav.apps': 'アプリ',
    'nav.philosophy': '考え方',
    'nav.process': 'つくり方',
    'nav.cta': 'アプリを見る',
    'nav.language': '言語',
    'nav.skip': '本文へスキップ',

    'hero.eyebrow': '小さなアプリ・確かな生産性',
    'hero.title.lead': '小さなアプリで、',
    'hero.title.highlight': '時間を取り戻す。',
    'hero.subtitle':
      'Tony Studio は、小さくて頼れるミニアプリをつくるスタジオです。ひとつのアプリが、仕事の中の面倒な作業をひとつだけ、確実に片づけます。',
    'hero.primary': 'アプリを見る',
    'hero.secondary': 'なぜ「ミニ」？',
    'hero.stat.apps': '個のミニアプリを公開中',
    'hero.stat.languages': '言語に対応',
    'hero.stat.focus': 'アプリにつき、ひとつの役割',
    'hero.visual.label': 'Tony Studio のミニアプリが並ぶホーム画面',

    'apps.eyebrow': 'コレクション',
    'apps.title': 'ミニアプリ一覧',
    'apps.subtitle':
      'どのアプリも、実際の仕事で感じた不便から生まれました。あなたの毎日に合うものを選んでください。',
    'apps.visit': 'サイトを見る',
    'apps.opensNewTab': '（新しいタブで開きます）',
    'apps.platforms': '対応プラットフォーム',
    'apps.status.live': '公開中',
    'apps.status.beta': 'ベータ',
    'apps.status.soon': '近日公開',
    'apps.next.title': '次のミニアプリ',
    'apps.next.body':
      '新しいアプリを準備中です。なくしたい繰り返し作業はありませんか？',
    'apps.next.cta': 'アイデアを送る',
    'contact.subject': 'Tony Studio へのミニアプリのアイデア',
    'contact.body': 'Tony Studio さん\n\nなくしたい作業：\n\n頻度：\n\n今使っているツール：\n',

    'principles.eyebrow': '考え方',
    'principles.title': 'なぜ「ミニ」なのか',
    'principles.subtitle':
      '多機能なツールはすべてをこなそうとします。私たちは、ひとつのことを面倒だったと忘れるほど上手にこなしたいと考えています。',
    'principles.focus.title': 'ひとつの役割に集中',
    'principles.focus.body':
      '各アプリの目的はひとつだけ。複雑なメニューも、覚えることもありません。',
    'principles.fast.title': '数秒で役に立つ',
    'principles.fast.body':
      '開いて、使って、仕事に戻る。初回からすぐに効果を実感できます。',
    'principles.private.title': 'プライバシーを重視',
    'principles.private.body':
      'あなたの仕事のデータはあなたのもの。可能な限りローカル処理を選びます。',
    'principles.multilingual.title': '多言語チームのために',
    'principles.multilingual.body':
      '英語・日本語・ベトナム語の現場で働くメンバーが、同じようなチームのためにつくっています。',

    'process.eyebrow': 'つくり方',
    'process.title': '「面倒」がアプリになるまで',
    'process.step1.title': '不便を見つける',
    'process.step1.body': '毎週こっそり時間を奪っている、小さな繰り返し作業を探します。',
    'process.step2.title': '最小の解決策をつくる',
    'process.step2.body': 'その不便を完全になくす、いちばんシンプルなツールを届けます。',
    'process.step3.title': '実際の利用者と磨く',
    'process.step3.body': '毎日使う人たちと改善を重ね、自然に使えるところまで仕上げます。',

    'cta.title': '時間を奪う作業、ありませんか？',
    'cta.body':
      '良いミニアプリは、誰かの小さな不満から始まります。あなたの「面倒」を教えてください。次のアプリになるかもしれません。',
    'cta.primary': 'アイデアを送る',
    'cta.secondary': 'アプリを見る',

    'footer.tagline': '仕事を速くする、小さなアプリ。',
    'footer.apps': 'アプリ',
    'footer.rights': 'All rights reserved.',
  },
  vi: {
    'meta.title': 'Tony Studio: app nhỏ cho công việc hiệu quả',
    'meta.description':
      'Tony Studio tạo ra những công cụ nhỏ gọn, mỗi công cụ loại bỏ một việc phiền phức trong ngày làm việc của bạn. Gặp gỡ Comtor-chan, Transcriber-kun và SRS.',

    'nav.apps': 'Ứng dụng',
    'nav.philosophy': 'Triết lý',
    'nav.process': 'Cách làm',
    'nav.cta': 'Xem ứng dụng',
    'nav.language': 'Ngôn ngữ',
    'nav.skip': 'Chuyển đến nội dung',

    'hero.eyebrow': 'App nhỏ · Năng suất thật',
    'hero.title.lead': 'Những app nhỏ giúp bạn',
    'hero.title.highlight': 'lấy lại hàng giờ.',
    'hero.subtitle':
      'Tony Studio là studio tạo ra những mini app nhỏ gọn, tập trung. Mỗi app loại bỏ một việc phiền phức trong ngày làm việc và làm thật tốt đúng việc đó.',
    'hero.primary': 'Khám phá ứng dụng',
    'hero.secondary': 'Vì sao lại “mini”?',
    'hero.stat.apps': 'mini app đã ra mắt',
    'hero.stat.languages': 'ngôn ngữ được hỗ trợ',
    'hero.stat.focus': 'việc cho mỗi app, làm thật tốt',
    'hero.visual.label': 'Màn hình chính với các mini app của Tony Studio',

    'apps.eyebrow': 'Bộ sưu tập',
    'apps.title': 'Các mini app',
    'apps.subtitle':
      'Mỗi app bắt đầu từ một điều phiền toái có thật trong công việc. Hãy chọn app hợp với ngày làm việc của bạn.',
    'apps.visit': 'Xem trang web',
    'apps.opensNewTab': '(mở trong tab mới)',
    'apps.platforms': 'Nền tảng',
    'apps.status.live': 'Đang hoạt động',
    'apps.status.beta': 'Beta',
    'apps.status.soon': 'Sắp ra mắt',
    'apps.next.title': 'Mini app tiếp theo',
    'apps.next.body':
      'Một app nhỏ mới đang được ấp ủ. Bạn có việc lặp đi lặp lại nào muốn biến mất không?',
    'apps.next.cta': 'Gửi ý tưởng',
    'contact.subject': 'Ý tưởng mini app cho Tony Studio',
    'contact.body': 'Chào Tony Studio,\n\nViệc mình muốn loại bỏ:\n\nTần suất làm việc này:\n\nCông cụ đang dùng:\n',

    'principles.eyebrow': 'Triết lý',
    'principles.title': 'Vì sao lại “mini”?',
    'principles.subtitle':
      'Các bộ phần mềm lớn cố làm mọi thứ. Chúng tôi muốn làm một việc thật tốt, tốt đến mức bạn quên rằng nó từng là việc phiền.',
    'principles.focus.title': 'Một việc, làm thật tốt',
    'principles.focus.body':
      'Mỗi app chỉ có một mục đích. Không menu rườm rà, không cần học cách dùng.',
    'principles.fast.title': 'Hữu ích trong vài giây',
    'principles.fast.body':
      'Mở ra, dùng, rồi quay lại làm việc. Thấy giá trị ngay lần đầu tiên.',
    'principles.private.title': 'Tôn trọng quyền riêng tư',
    'principles.private.body':
      'Dữ liệu công việc là của bạn. Chúng tôi ưu tiên xử lý cục bộ khi có thể.',
    'principles.multilingual.title': 'Dành cho đội ngũ đa ngôn ngữ',
    'principles.multilingual.body':
      'Được làm bởi những người làm việc bằng tiếng Anh, Nhật và Việt, cho những đội ngũ như vậy.',

    'process.eyebrow': 'Cách làm',
    'process.title': 'Từ phiền toái thành ứng dụng',
    'process.step1.title': 'Tìm điểm vướng',
    'process.step1.body': 'Chúng tôi tìm những việc nhỏ, lặp lại đang âm thầm lấy đi hàng giờ mỗi tuần.',
    'process.step2.title': 'Làm giải pháp nhỏ nhất',
    'process.step2.body': 'Chúng tôi ra mắt công cụ đơn giản nhất xử lý triệt để vấn đề.',
    'process.step3.title': 'Hoàn thiện cùng người dùng',
    'process.step3.body': 'Chúng tôi cải tiến cùng người dùng hằng ngày đến khi app dùng thật nhẹ nhàng.',

    'cta.title': 'Có việc nào đang “ăn” hết thời gian của bạn?',
    'cta.body':
      'Những mini app tốt nhất bắt đầu từ một lời than nhỏ. Hãy kể cho chúng tôi, biết đâu nó sẽ thành app tiếp theo.',
    'cta.primary': 'Gửi ý tưởng',
    'cta.secondary': 'Xem ứng dụng',

    'footer.tagline': 'App nhỏ cho công việc hiệu quả.',
    'footer.apps': 'Ứng dụng',
    'footer.rights': 'Bảo lưu mọi quyền.',
  },
};

export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key] ?? ui[defaultLocale][key];
}
