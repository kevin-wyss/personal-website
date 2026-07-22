import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../public/", import.meta.url);

test("publishes the homepage and both articles with clean navigation", async () => {
  const [home, aiArticle, governanceArticle, siteCss] = await Promise.all([
    readFile(new URL("site-home.html", root), "utf8"),
    readFile(new URL("article-ai-service.html", root), "utf8"),
    readFile(new URL("article-governance.html", root), "utf8"),
    readFile(new URL("sources/css/site.css", root), "utf8"),
  ]);

  assert.match(home, /<title>Kevin Wyss — Technology, AI &amp; Enterprise Software<\/title>/);
  assert.match(home, /href="\/writing\/turning-ai-into-a-service"/);
  assert.match(home, /href="\/writing\/how-to-find-value-in-enterprise-software"/);
  assert.match(aiArticle, /<title>Turning AI into a service — Kevin Wyss<\/title>/);
  assert.match(governanceArticle, /<title>How to find value in Enterprise Software — Kevin Wyss<\/title>/);
  assert.match(aiArticle, /src="\/sources\/js\/support\.js"/);
  assert.match(governanceArticle, /src="\/sources\/js\/gm-tooltips\.js"/);

  for (const page of [home, aiArticle, governanceArticle]) {
    assert.match(page, /href="\/sources\/css\/site\.css"/);
    assert.doesNotMatch(page, /<style(?:\s|>)/);
    assert.doesNotMatch(page, /\sstyle(?:-[a-z]+)?=/);
  }

  assert.match(siteCss, /--color-accent:/);
  assert.match(siteCss, /\.article-content\s*\{/);
});
