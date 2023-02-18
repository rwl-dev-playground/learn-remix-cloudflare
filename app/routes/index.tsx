import { json, type LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ context }) => {
  const { X_API_KEY } = context;
  const res = await fetch("https://sampi.deno.dev/api", {
    method: "POST",
    body: JSON.stringify({ user_id: "200" }),
    headers: {
      "X-API-KEY": X_API_KEY as string,
    },
  });
  return json<{
    code: string;
    message: string;
    contents: {
      text: string;
    };
  }>(await res.json());
};

export default function Index() {
  const testdata = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <p>{testdata.contents.text}</p>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
