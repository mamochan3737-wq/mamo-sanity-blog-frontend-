import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ふわっと主婦のAI副業日記～バイブコーディング～
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300">
              ブログ
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">
              プロフィール
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
