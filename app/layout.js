import './globals.css';

export const metadata = {
  title: 'Dear Sunshine | 영어 발달놀이 & 북클럽',
  description: '놀이하고, 노래하고, 그림책을 만나며 영어가 자연스럽게 일상이 되는 곳. Dear Sunshine 영어 발달놀이 & 북클럽.',
  metadataBase: new URL('https://dearsunshine.co.kr'),
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
