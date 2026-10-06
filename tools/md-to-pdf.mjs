#!/usr/bin/env node
// Render a markdown file to an A4 PDF via headless Chrome.
//
//   node md-to-pdf.mjs <input.md> [output.pdf] [--font-size <pt>]
//
// --font-size sets the body text size in PDF points; every other element
// scales from it. The default is 18pt.
//
// Chrome's print-to-pdf maps CSS px to PDF points one-to-one, so the CSS is
// emitted in px with the same number as the requested point size.

import { readFileSync, writeFileSync, mkdtempSync, rmSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve, basename, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { marked } from "marked";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
].filter(Boolean);

const argv = process.argv.slice(2);
let fontSize = 18;
let htmlOut = null;
const positional = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--font-size") {
    fontSize = Number(argv[++i]);
    if (!Number.isFinite(fontSize) || fontSize <= 0) {
      console.error("--font-size expects a positive number of points");
      process.exit(1);
    }
  } else if (argv[i] === "--html") {
    htmlOut = resolve(argv[++i]);
  } else {
    positional.push(argv[i]);
  }
}

const [inputArg, outputArg] = positional;
if (!inputArg) {
  console.error("usage: node md-to-pdf.mjs <input.md> [output.pdf] [--font-size <pt>]");
  process.exit(1);
}

const inputPath = resolve(inputArg);
if (!existsSync(inputPath)) {
  console.error(`input not found: ${inputPath}`);
  process.exit(1);
}
const outputPath = outputArg
  ? resolve(outputArg)
  : join(dirname(inputPath), basename(inputPath).replace(/\.md$/i, "") + ".pdf");

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("no Chrome or Edge binary found; set CHROME_PATH to the executable");
  process.exit(1);
}

const md = readFileSync(inputPath, "utf8");
const body = marked.parse(md, { gfm: true, breaks: true });

const f = (n) => `${(fontSize * n).toFixed(2)}px`;
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>${basename(outputPath, ".pdf")}</title>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB",
                 "Noto Sans CJK SC", "Source Han Sans SC", sans-serif;
    font-size: ${f(1)};
    line-height: 1.75;
    color: #1a1a1a;
    margin: 0;
    text-align: justify;
    word-break: break-word;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.35;
    color: #111;
    page-break-after: avoid;
    break-after: avoid;
  }
  h1 { font-size: ${f(1.65)}; margin: 0 0 ${f(0.85)}; padding-bottom: ${f(0.4)}; border-bottom: 2px solid #d0d0d0; }
  h2 { font-size: ${f(1.4)};  margin: ${f(1.5)} 0 ${f(0.6)}; padding-bottom: ${f(0.25)}; border-bottom: 1px solid #e2e2e2; }
  h3 { font-size: ${f(1.18)}; margin: ${f(1.15)} 0 ${f(0.5)}; }
  h4 { font-size: ${f(1.04)}; margin: ${f(1)} 0 ${f(0.4)}; }
  h5, h6 { font-size: ${f(1)}; margin: ${f(0.9)} 0 ${f(0.35)}; }
  p { margin: 0 0 ${f(0.75)}; }
  ul, ol { margin: 0 0 ${f(0.75)}; padding-left: ${f(1.6)}; }
  li { margin: ${f(0.16)} 0; }
  li > ul, li > ol { margin: ${f(0.16)} 0; }
  a { color: #1a4f9c; text-decoration: none; }
  strong { font-weight: 700; }
  hr { border: 0; border-top: 1px solid #dcdcdc; margin: ${f(1.2)} 0; }
  blockquote {
    margin: ${f(0.75)} 0;
    padding: ${f(0.5)} ${f(0.9)};
    border-left: 4px solid #b9c6d8;
    background: #f5f7fa;
    color: #333;
  }
  blockquote p { margin: 0 0 ${f(0.35)}; }
  blockquote p:last-child { margin-bottom: 0; }
  code {
    font-family: "Cascadia Mono", Consolas, "Courier New", monospace;
    font-size: ${f(0.88)};
    background: #f0f0f0;
    padding: 0.1em 0.3em;
    border-radius: 3px;
  }
  pre {
    background: #f6f8fa;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: ${f(0.6)};
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
  pre code { background: none; padding: 0; font-size: ${f(0.85)}; }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: ${f(0.75)} 0 ${f(1)};
    font-size: ${f(0.85)};
    table-layout: fixed;
  }
  th, td {
    border: 1px solid #cfcfcf;
    padding: ${f(0.28)} ${f(0.4)};
    text-align: left;
    vertical-align: top;
    word-break: break-word;
    overflow-wrap: anywhere;
  }
  th { background: #eef2f7; font-weight: 700; }
  tr { page-break-inside: avoid; break-inside: avoid; }
</style>
</head>
<body>
${body}
</body>
</html>`;

const tmp = mkdtempSync(join(tmpdir(), "md-to-pdf-"));
const htmlPath = join(tmp, "doc.html");
const profileDir = join(tmp, "profile");
writeFileSync(htmlPath, html, "utf8");
if (htmlOut) writeFileSync(htmlOut, html, "utf8");

try {
  execFileSync(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-extensions",
      "--disable-dev-shm-usage",
      `--user-data-dir=${profileDir}`,
      "--no-pdf-header-footer",
      "--generate-pdf-document-outline",
      "--virtual-time-budget=10000",
      `--print-to-pdf=${outputPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: ["ignore", "pipe", "pipe"], timeout: 300000 }
  );
} catch (err) {
  console.error("chrome failed:", err.stderr?.toString() || err.message);
  rmSync(tmp, { recursive: true, force: true });
  process.exit(1);
}
rmSync(tmp, { recursive: true, force: true });

console.log(`${outputPath}  (font-size ${fontSize}pt)`);
