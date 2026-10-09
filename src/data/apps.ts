/**
 * Mini app registry: the single source of truth for every app shown on the landing page.
 *
 * To add a new mini app:
 *   1. Drop its square icon (PNG/WebP, ≥ 256×256) into `src/assets/apps/`.
 *   2. Import it below and append a new entry to `apps`.
 *   3. Fill in every locale (TypeScript will error if one is missing).
 *
 * The hero dock, the app grid, the stats and the footer all read from this list,
 * and the grid reflows automatically, so no layout code needs to change.
 */
import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';

import comtorChanIcon from '../assets/apps/comtor-chan.png';
import transcriberKunIcon from '../assets/apps/transcriber-kun.png';
import srsIcon from '../assets/apps/srs.png';

export type AppStatus = 'live' | 'beta' | 'soon';

export interface MiniApp {
  /** Stable, URL-safe id. */
  id: string;
  name: Localized;
  url: string;
  icon: ImageMetadata;
  status: AppStatus;
  /** Short platform labels, e.g. "Web", "macOS". */
  platforms: string[];
  /** Brand color used for the card's accent glow and highlights (any CSS color). */
  accent: string;
  /** One-line value proposition. */
  tagline: Localized;
  /** Two or three sentences. */
  description: Localized;
  /** Up to 3 short bullets. */
  features: Localized<string[]>;
}

export const apps: MiniApp[] = [
  {
    id: 'comtor-chan',
    name: { en: 'Comtor-chan', ja: 'Comtor ちゃん', vi: 'Comtor-chan' },
    url: 'https://comtor-chan.vercel.app/',
    icon: comtorChanIcon,
    status: 'live',
    platforms: ['Web'],
    accent: '#1d4ed8',
    tagline: {
      en: 'Excel translation between Vietnamese and Japanese.',
      ja: 'ベトナム語⇄日本語の Excel 翻訳アシスタント。',
      vi: 'Trợ lý AI dịch Excel Việt ⇄ Nhật.',
    },
    description: {
      en: 'An AI assistant for BrSEs and comtors that translates entire Excel files while keeping every cell, color and layout exactly where it was.',
      ja: 'BrSE・コミュニケーター向けの AI アシスタント。セル・色・レイアウトをそのままに、Excel ファイルをまるごと翻訳します。',
      vi: 'Trợ lý AI dành cho BrSE và Comtor: dịch toàn bộ file Excel mà vẫn giữ nguyên từng ô, màu sắc và bố cục.',
    },
    features: {
      en: ['Keeps 100% of the original formatting', 'Smart glossary for project terms', 'Built for VN ⇄ JP workflows'],
      ja: ['元の書式を 100% 保持', 'プロジェクト用語のスマート用語集', 'ベトナム⇄日本の業務に最適化'],
      vi: ['Giữ nguyên 100% định dạng gốc', 'Glossary thông minh cho thuật ngữ dự án', 'Tối ưu cho quy trình Việt ⇄ Nhật'],
    },
  },
  {
    id: 'transcriber-kun',
    name: { en: 'Transcriber-kun', ja: 'Transcriber くん', vi: 'Transcriber-kun' },
    url: 'https://transcriber-kun.vercel.app/',
    icon: transcriberKunIcon,
    status: 'live',
    platforms: ['macOS', 'Windows', 'Linux'],
    accent: '#0f766e',
    tagline: {
      en: 'Live meeting transcripts and instant minutes.',
      ja: '会議をリアルタイムで文字起こし、議事録まで一瞬で。',
      vi: 'Bắt từng keyword, tạo memo họp tức thì.',
    },
    description: {
      en: 'A desktop app that transcribes any meeting as it happens (Meet, Teams, Zoom or in person) and turns it into clear minutes with action items.',
      ja: 'Meet・Teams・Zoom、対面の会議もリアルタイムで文字起こし。アクションアイテム付きの議事録に自動でまとめるデスクトップアプリです。',
      vi: 'Ứng dụng desktop chép lời mọi cuộc họp theo thời gian thực (Meet, Teams, Zoom hay họp trực tiếp) và tự tạo biên bản kèm action item.',
    },
    features: {
      en: ['Live transcript with keyword highlights', 'Offline mode with local Whisper', 'VI · EN · JA, even mixed in one sentence'],
      ja: ['キーワードを強調するライブ文字起こし', 'ローカル Whisper でオフライン処理', '越・英・日の混在した発話にも対応'],
      vi: ['Transcript trực tiếp, highlight keyword', 'Chế độ offline với Whisper cục bộ', 'Việt · Anh · Nhật, kể cả câu trộn lẫn'],
    },
  },
  {
    id: 'srs',
    name: { en: 'SRS', ja: 'SRS', vi: 'SRS' },
    url: 'https://landing.srs.relipa.vn/',
    icon: srsIcon,
    status: 'live',
    platforms: ['Web'],
    accent: '#0284c7',
    tagline: {
      en: 'Review specs together with your client.',
      ja: 'クライアントと一緒に仕様書をレビュー。',
      vi: 'Review đặc tả cùng khách hàng.',
    },
    description: {
      en: 'Spec Review System: share Markdown specs and mockups with clients, collect comments right on the document, and compare revisions block by block.',
      ja: 'Spec Review System。Markdown の仕様書やモックアップをクライアントと共有し、ドキュメント上で直接コメントを集め、リビジョン間の差分をブロック単位で比較できます。',
      vi: 'Spec Review System: chia sẻ tài liệu đặc tả Markdown và mockup với khách hàng, nhận comment ngay trên tài liệu và so sánh các bản revision theo từng khối nội dung.',
    },
    features: {
      en: ['Comment directly on Markdown specs', 'Block-level diff between revisions', 'Scoped access for each client'],
      ja: ['Markdown 仕様書に直接コメント', 'リビジョン間のブロック単位差分', 'クライアントごとに閲覧範囲を設定'],
      vi: ['Comment trực tiếp trên tài liệu Markdown', 'So sánh revision theo từng khối', 'Phân quyền xem theo từng khách hàng'],
    },
  },
];
