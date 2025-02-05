import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/app") {
      router.push("/app");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>シンプルブラウザメモ帳 - 簡単・安全なオンラインメモアプリ</title>
        <meta name="description" content="世界一シンプルなブラウザメモ帳。インストール不要、無料で使えるオンラインメモアプリ。テキストを安全に保存し、いつでもどこでもアクセスできます。アイデア出し、TODO管理、議事録作成に最適。" />
        <meta name="keywords" content="メモ帳, ブラウザメモ, オンラインメモ, 無料メモ, 簡単メモ, テキストエディタ, シンプルメモ, 安全メモ, アイデア出し, TODO管理, 議事録" />
        <meta name="og:title" content="シンプルブラウザメモ帳 - 簡単・安全なオンラインメモアプリ" />
        <meta name="og:description" content="世界一シンプルなブラウザメモ帳。インストール不要、無料で使えるオンラインメモアプリ。テキストを安全に保存し、いつでもどこでもアクセスできます。アイデア出し、TODO管理、議事録作成に最適。" />
        <meta name="og:url" content="https://your-domain.com" /> {/* 実際のドメインに置き換えてください */}
        <meta name="og:image" content="/og-image.png" /> {/* OGイメージへのパスを置き換えてください */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">シンプルブラウザメモ帳</h1>
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          アイデアがひらめいた瞬間、TODOリストを整理したい時、会議の議事録をサッと記録したい時。
          シンプルブラウザメモ帳は、あなたの思考を邪魔することなく、必要な情報をすぐに書き留められる、世界一シンプルなメモ帳です。
          <br />
          インストール不要、ブラウザだけで手軽に利用できます。
        </p>

        <div className="flex justify-center mb-8">
          <Link href={'/app'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            メモを始める
          </Link>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">シンプルブラウザメモ帳の特徴</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>瞬時に起動:</strong> ブラウザを開くだけ。アプリの起動を待つ必要はありません。</li>
            <li><strong>直感的な操作:</strong> シンプルなインターフェースで、誰でもすぐに使いこなせます。</li>
            <li><strong>完全無料:</strong> 広告表示も一切なし。ストレスなくご利用いただけます。</li>
            <li><strong>プライバシー重視:</strong> メモはローカルストレージに保存。あなたのデータはあなたのものです。</li>
            <li><strong>マルチデバイス対応:</strong> ブラウザがあれば、PC、スマホ、タブレット、どこでもアクセス可能。</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">こんな時に便利</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>ブレインストーミング:</strong> 思いついたアイデアをどんどん書き出す。</li>
            <li><strong>タスク管理:</strong> 今日やるべきことをリストアップして、進捗を管理。</li>
            <li><strong>議事録作成:</strong> 会議の内容をリアルタイムで記録。</li>
            <li><strong>旅行の計画:</strong> 行きたい場所、やりたいことをリストアップ。</li>
            <li><strong>ちょっとした計算:</strong> 簡単な計算もメモ帳上でサッと実行。</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">よくある質問</h2>
          <dl className="text-gray-700">
            <dt className="font-semibold">Q: メモはどこに保存されますか？</dt>
            <dd className="mb-2">A: メモはブラウザのローカルストレージに保存されます。他の人に共有されることはありません。</dd>
            <dt className="font-semibold">Q: 複数のデバイスでメモを共有できますか？</dt>
            <dd className="mb-2">A: 現在はローカルストレージのみの保存のため、デバイス間での共有はできません。今後のアップデートでクラウド連携を検討しています。</dd>
            <dt className="font-semibold">Q: 広告は表示されますか？</dt>
            <dd className="mb-2">A: いいえ、広告は一切表示されません。快適にご利用いただけます。</dd>
          </dl>
        </section>

        <footer className="mt-12 text-center text-gray-500">
          &copy; {new Date().getFullYear()} シンプルブラウザメモ帳. All rights reserved.
        </footer>
      </div>
    </>
  )
}
