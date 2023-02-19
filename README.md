# Learn Remix Cloudflare

## 本リポジトリの目的
Cloudflare Pages上でRemixを動作させ、APIの取得が隠蔽できるかどうか確認する

自作APIをAPI単体で運用しているが、その関係でAPIキーが常にDevToolsで確認できる状態になっている。  
幸いデータベースの読み出ししか現状ではサポートしていないが、書き込みもサポートした場合の被害は想定できない。ドメインを制限したとしてもPostmanなどからのアクセスは防げず、露出しているキーを元にアクセスが出来てしまう。

上記の対策として、SSRで外部APIのデータ取得を隠蔽することにした。  
DenoのFreshでもいいのだが、忘れないためにフロントエンドはできるだけNode.jsにしている。

## 本リポジトリの達成目標
- [x] Remixで外部API取得をし、やり取りが隠蔽されていることを確認する
- [x] RemixをCloudflare Pages上で動作させる
- [ ] Remix上でChakra UIを動作させる

## 参考資料
- [Remix | Data Loading](https://remix.run/docs/en/v1/guides/data-loading)
- [Cloudflare PagesでNode.jsのバージョンを指定する | DevelopersIO](https://dev.classmethod.jp/articles/cloudflare-pages-node-version/)
- [Environment variables · Cloudflare Workers docs](https://developers.cloudflare.com/workers/platform/environment-variables)
- [Remix + CloudFlare Pagesの構成でローカル開発時に環境変数を使うために--bindingする | Crudzoo](https://crudzoo.com/blog/remix-cloudflare)
- [remix.run - How to use environment variables in remix run deployed on cloudflare pages - Stack Overflow](https://stackoverflow.com/questions/71114951/how-to-use-environment-variables-in-remix-run-deployed-on-cloudflare-pages)
- [Cloudflare Workers の wrangler.toml に環境変数を書かないで管理する](https://zenn.dev/mr_ozin/articles/645502f4a621d6)
- [Remix - Chakra UI](https://chakra-ui.com/getting-started/remix-guide)
