# DeepSeek Weekly Digest (2026-09-08 to 2026-09-14)

> Generated on: 2026-10-01
> Research subject: DeepSeek (Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., unlisted; actual controller: founder Liang Wenfeng)
> Digest period: 2026-09-08 to 2026-09-14 (both ends inclusive, 7 days)
> Analysis framework: walker value-investing analysis framework
> Information sources: public web retrieval (DeepSeek official documentation and status page, news, industry media, broker research); key conclusions have source links at the end; out-of-period information is explicitly marked, for background reference only
> Disclaimer: this report is a value-investing research compilation and does not constitute investment advice

---

## Table of Contents

- [1. Weekly Overview](#1-weekly-overview)
- [2. Key Points of the Actual Controller's Public Statements](#2-key-points-of-the-actual-controllers-public-statements)
- [3. Corporate Culture Observations](#3-corporate-culture-observations)
- [4. Moat Change Assessment](#4-moat-change-assessment)
- [5. Business Model Change Research](#5-business-model-change-research)
- [6. Industry Competitive Landscape](#6-industry-competitive-landscape)
- [7. Core Product Update Highlights](#7-core-product-update-highlights)
- [8. Stock Market Value and Valuation Research](#8-stock-market-value-and-valuation-research)
- [9. Weekly Digest Summary (Value-Investing Perspective)](#9-weekly-digest-summary-value-investing-perspective)
- [10. Information Sources](#10-information-sources)

---

## 1. Weekly Overview

**One-sentence summary: this was a week in which DeepSeek advanced three fronts simultaneously — "model + capital + organization" — and a key juncture in the company's transition from a "research institution" to a "public company".**

- **Sep 8**: launched its largest-ever **targeted hiring drive** since founding — roughly **150 engineer roles** released at once, all in server-side development and Agent elastic-compute, **not a single AI research role**.
- **Sep 9**: Reuters reported DeepSeek has hired **CITIC Securities** to prepare a **Shanghai STAR Market IPO**, targeting submission within the year and a 2027 listing; the same day it announced a Flash-series API **price cut**.
- **Sep 10**: officially released **DeepSeek-V4.1-Flash** — a 552B MoE, brand-new Causal Encoder-Decoder asymmetric architecture, native multimodal, open-sourced under MIT license, which the company said **comprehensively surpasses its own flagship V4 Pro** on performance / cost / speed / total time.
- **Sep 10–11**: a "V4 Pro to be retired, then reversed" announcement controversy, the week's most debated trust event.
- **Sep 12**: the App began gray-testing **AI voice dialogue**, completing the full "voice input → voice output" chain.
- **Sep 14**: media reported that Hillhouse Venture (GL Ventures) partner **Yan Wentao** would become DeepSeek's **first CFO** (on duty Sep 21), ending the company's three-year CFO vacancy.

**The week's key tension**: with a "smaller, stronger, cheaper" model, DeepSeek pushed the open-source camp's cost baseline down another notch; and with an IPO rumor and a CFO arrival, it formally seated itself at the capital-market table. Yet **there was no public statement from Liang Wenfeng himself this week** — the company-level actions themselves were the execution of his "restraint + open source + engineering-first" philosophy.

| Date | Event | Nature |
|------|------|------|
| Sep 8 | Released ~**150 engineering roles** (server-side development across 6 directions + Agent elastic-compute across 2 directions), **0 AI research roles**; Beijing-majority, some Hangzhou | Organization |
| Sep 8 | Official user group seeded a beta-test model name `deepseek-v4.1-flash-expires-on-0910` ("shelf life" until 9/10) | Product teaser |
| Sep 8 (US ET) | US CISA/NSA/FBI joint advisory AA26-251A, alleging that six Chinese AI companies incl. DeepSeek engaged in "industrial-scale distillation" of US frontier models | Geopolitics/regulatory |
| Sep 9 | Reuters: has hired **CITIC Securities** to prepare a STAR Market IPO, targeting submission within the year and 2027 listing; same day China's Ministry of Commerce rebutted the US allegations | Capital |
| Sep 9 | Announced Flash-series **price cut** (effective next day, max cut ~60%) | Product/pricing |
| Sep 10 | **DeepSeek-V4.1-Flash official release** + technical report + MIT open source + API renamed `deepseek-flash` + price cut | Product (heaviest this week) |
| Sep 10 | App/web merged the fast/expert/image-recognition **three modes** into a unified "Smart Mode" | Product |
| Sep 11 | Official **reversed** the "retire V4 Pro on Sep 14" plan, changed to continue serving it with billing unchanged | Product/trust |
| Sep 12 | App gray-tested **AI voice dialogue** (four voices) | Product |
| Sep 14 | Media reported Hillhouse Venture partner **Yan Wentao** will become **first CFO** (on duty Sep 21) | Organization |

**No share-price data this week** — DeepSeek is an unlisted company; valuation discussion is in [Section 8](#8-stock-market-value-and-valuation-research).

---

## 2. Key Points of the Actual Controller's Public Statements

**Conclusion: within the period (Sep 8–14), no direct public statement by Liang Wenfeng himself or by DeepSeek executives was retrieved** (interviews, speeches, internal letters, signed articles, or social media). Confirmed via cross-referenced searches using multiple Chinese and English keyword groups. This is consistent with Liang Wenfeng's consistent style since R1 went viral in early 2025 — **long-term refusal of media interviews and rare public appearances**.

**The only "management voice" within the period was at the engineering level**: on the evening of Sep 7 (immediately before the period starts), DeepSeek Harness team lead **Cui Tianyi** posted a recruiting note, calling it an "**unprecedented 150-HC hiring requirement**", and explained the hiring logic — "anything in the computer field, once the scale grows large, creates an enormous increase in complexity… the volume of data, machines/containers, training tasks, evaluation tasks, Agent environments, users, and requests are all sharply increasing, which produces ever-greater complexity, so that the previous backend systems gradually cannot perfectly satisfy the future volume demand, and thus we need to hire large numbers of people to upgrade, maintain, and rewrite the various backend systems." (Note: Cui Tianyi is a team lead, not a company executive.)

To understand the current thinking, the two most substantial statements immediately before and after the period:

| Date | Occasion | Key points |
|---|---|---|
| 2026-07 (about 2 months before the period; transcript circulating since July) | **4-hour investor closed-door meeting transcript** (over 34,000 characters) | ① "DeepSeek has only one main line — **AGI** — everything else is strategy / byproduct"; ② **"Restraint is a strategy"** — "the more restrained you are, the more likely you are to accomplish this"; ③ open source means giving up profit, earning only "reasonable profit" (a batch of equipment recoups cost in **~10 months**); ④ **"the company's sole core interest is team stability"**; ⑤ "what our innovation lacks is not capital, but confidence, and the ability to organize high-density talent"; ⑥ technical route: CoT → Agent → continual learning → embodied intelligence. |
| 2026-09-21/22 (about 1 week after the period, relayed by The Information) | Closed-door investor meeting | ① shifting training to **domestic / Huawei Ascend chips** is one of the company's **biggest bets**, and **"must succeed"**; ② judged that Huawei chips "may catch up to NVIDIA within a few years"; ③ training a **2-trillion-parameter model** (planning 8 trillion); ④ plans to invest about **RMB 30 billion** in domestic computing. **Neither DeepSeek nor Huawei officially commented.** |

**Key-point summary**: this week Liang Wenfeng was in a "quiet period", with no incremental viewpoint output. But the company's three actions — **price cut (V4.1-Flash pricing undercutting its own flagship), open source (MIT license), engineering hiring (reinforcing platform capability)** — are direct executions of his "restraint + open source + earn through scale rather than moat" philosophy. Especially worth noting: **this week's price cut was the kind that "actively sends its own flagship into retirement"**, highly consistent with Liang Wenfeng's "earn only reasonable profit, do not maximize commercial interest" statement. The late-September leak of "the domestic-chip bet must succeed" reveals the other side of the coin: **the other half of the cost advantage is a massive capital expenditure on compute autonomy**.

> ⚠️ Reliability note: the "closed-door meeting transcript" and "investor meeting" content are **second-hand relayed by anonymous sources, not confirmed by DeepSeek officially**; specific wording and figures should be quoted with caution.

---

## 3. Corporate Culture Observations

There was no dedicated "culture event" this week, but the **Sep 8 hiring drive and the Sep 14 CFO arrival** are precisely two cross-sections for observing how DeepSeek's culture evolves under "scale-up" pressure.

### Two culture cross-sections this week

1. **Sep 8: a "counter-intuitive" hiring**
   - Released ~**150 HCs** at once, equivalent to "hiring another half a DeepSeek" (the company then had about 300 people; the V4 technical report named nearly 300 R&D members).
   - **All roles are engineering, 0 AI research roles**: server-side development engineers (LLM research platform, Agent framework components, R&D-efficiency infrastructure, DeepSeek API, online services, data engineering — six directions) + Agent elastic-compute R&D engineers (platform development, low-level systems — two directions, oriented to the **DSec** production-grade sandbox platform).
   - Hiring criteria shifted from "fresh graduates / young researchers" to **"senior engineers with 2–10 years of experience"**; workplace Beijing-majority, some Hangzhou.
   - **Interpretation**: this is not research expansion but **"lean on research, reinforce on engineering"** — DeepSeek is shifting its competitive focus from "model capability" to "API stability, inference cost, Agent workflow, enterprise integration".

2. **Sep 14: the first CFO in three years**
   - **Yan Wentao**, born 1991 (a "post-90s"), graduated from Fudan University's Department of Environmental Science and Engineering; career: Tencent Investment → H Capital → GL Ventures partner, representative investments including ByteDance, Zhipu, MiniMax, Xiaohongshu, J&T Express, etc. (he **did not invest in DeepSeek** during his time at Hillhouse).
   - This is DeepSeek's **first-ever CFO role** in its three years since founding. Media said Liang Wenfeng wanted the CFO to be a "post-90s" — consistent with his long-standing hiring preference (capability > seniority, youthful).
   - **Interpretation**: the CFO arrival + strict LP-list vetting + IPO sprint happening simultaneously marks the company's transformation from "Liang Wenfeng's DeepSeek" to "the market's DeepSeek".

### Culture portrait (continuing and evolving)

| Dimension | Manifestation |
|---|---|
| **Restrained management** | No strict KPI, no clock-punching, no forced overtime; Liang Wenfeng believes "the time a person can work at high quality per day is hard to exceed 6–8 hours; muddled judgment under overtime fatigue instead wastes precious compute resources." |
| **Extreme flatness** | Weak hierarchy, no departmental walls; cross-assignment among base-model / low-level-infra / data teams; researchers may freely use compute without layer-by-layer approval (the MLA architecture originated from a young researcher's personal-interest proposal). |
| **Open source and reasonable profit** | Insists on open source (V4.1-Flash uses MIT license); advocates "recover equipment cost in ten months"-style reasonable profit, not maximizing commercial interest. |
| **Hiring preference** | "Capability matters more than seniority, curiosity more than resume"; prefers top-university fresh graduates and young researchers; no one on the V2 team returned from overseas. |
| **Capital control** | In the first round, Liang Wenfeng contributed ~RMB 20 billion personally (the largest single contributor); external investors **enjoy only dividend rights, no voting rights and no board seats, shares locked for five years**; Liang holds a high degree of control. |
| **New tension this week** | **Scale-up challenge**: 150-person engineering hiring + CFO arrival + organization doubling — how the early culture built on idealism and high trust continues is a real challenge Liang Wenfeng himself acknowledged. |

### Talent flow

- **No new reported departures of core members were retrieved within the period.** The only confirmed senior-level talent move within the period is **Yan Wentao joining as CFO** (net inflow).
- **Known ongoing outflow (time range 2025H2–2026H1, not in this period)**: at least 5 core R&D members left — Guo Daya (R1 core researcher / main GRPO contributor) → ByteDance Seed; Luo Fuli (V2 key developer) → Xiaomi MiMo; Wang Bingxuan (first-generation LLM core author) → Tencent Hunyuan; Wei Haoran (OCR-series core author) → Baidu; Ruan Chong (multimodal core contributor) → Yuanrong Qixing. In the V4 technical report's nearly-300-author list, **10 people are marked "departed"**.
- **Outflow background**: options lacking a valuation reference, salary only industry-mid-tier, while ByteDance/Tencent/Xiaomi poached with 2–3x salary + options. **The option exit path an IPO provides is precisely one of Liang Wenfeng's core motives for going public** (Reuters' Sep 9 report said Liang Wenfeng wants the IPO funds used to strengthen incentives for core employees and researchers).

**Culture summary**: an AI-native company of "restrained management + extreme flatness + open-source faith + young local team", in the transition from a "small-but-excellent research institution" to an "engineering public company". This week's hiring and CFO arrival are the signature moves of that transition; the culture's undertone is unchanged, but **the transmission tension brought by scale-up is emerging**.

---

## 4. Moat Change Assessment

**Overall judgment: this week the moat "strengthened on economy and distribution, while being eroded on technical leadership and talent", a net mild strengthening. But the character of the moat is migrating from "model-technical leadership" to "scale economy + ecosystem lock-in + capital endurance".**

### Evidence of strengthening

1. **Cost/economy moat (strong)**
   - V4.1-Flash **cut price at launch**, cache-hit input down to RMB 0.02/million tokens (off-peak), the industry's lowest tier.
   - Artificial Analysis Intelligence Index shows V4.1-Flash reached **39.5**, the highest of DeepSeek's entire lineup (surpassing V4 Pro's 36.3), with **per-task cost of only $0.27** (V4 Pro $0.67) — "a smaller size surpassing its own flagship".
   - API business gross margin **82.9%** (first 7 months of 2026, The Information basis), a rare positive unit-economics among the open-source camp.
2. **Open-source ecosystem and distribution moat (strong)**
   - MIT license + open-sourced on Hugging Face; on release day **Tencent WorkBuddy/CodeBuddy fully integrated**.
   - **OpenRouter data**: in Sep 2026, Chinese models accounted for **61.9%** of Token share, of which domestically **DeepSeek was ~34.9%**, first; the weekly ranking (as of 9/28) **DeepSeek V4.1 Flash ranked first with 20.8T Tokens**, and first in vendor request share at 24.4%.
   - Strong developer enthusiasm for local deployment (NVIDIA DGX Spark forum discussions on EXL3 quantization deployment; vLLM already supported).
3. **Computing/capital moat (strong, but asset-heavy)**
   - **A ~1GW data center in Ulanqab**, planning to deploy **≥160,000 Huawei Ascend 950DT** chips, nominal chip investment alone **>RMB 40 billion** (media report, unconfirmed by the company).
   - Second-round financing pre-money valuation ~**RMB 500 billion**, hired CITIC Securities to prepare STAR Market IPO — ample capital ammunition.
4. **Brand**: still a symbol of China's AI "cost revolution"; on Sep 24 The Information reported its annualized revenue surpassed **$1 billion**, used by foreign media as a "turning point in China's AI commercialization" case.

### Evidence of erosion

1. **Technical leadership being caught up / undercut by cheaper rivals (medium-strong erosion)**
   - Morgan Stanley (9/10): even after the price cut, DeepSeek V4 Flash is **still not the cheapest** among mainstream lightweight models — Qwen3.8-flash output RMB 3, **GLM-5.3-flash only RMB 1.4**.
   - **Open source itself is eroding the moat**: competitors can distill, fine-tune, and even commercially use DeepSeek's weights; the technology-generation gap is hard to sustain long-term.
2. **Talent moat (clear erosion)**
   - In 2025H2–2026H1 at least 5 core R&D members left (see Section 3); this week's 150 new hires have **no AI research roles**, with the hiring focus shifting from "cultivating young researchers" to "senior engineering".
3. **Rising competitive intensity**
   - On Sep 11, Shanghai AI Lab released **Atria Dawn Preview** (744B MoE), and Moonshot AI released **Kimi K2.8 Preview**; Zhipu's GLM-5.3 series iterates continuously — the open-source track has become "weekly-update"-ized.
   - Zhipu and MiniMax, after listing, hold deep pockets to poach with high salaries.

### Weekly moat-change overview

| Moat type | This week's direction | Key basis |
|---|---|---|
| Cost/economy | **Strengthened** | V4.1-Flash price cut + AA index 39.5 + per-task cost $0.27 |
| Open-source ecosystem/distribution | **Strengthened** | MIT open source + WorkBuddy full integration + OpenRouter usage #1 |
| Computing/capital | **Strengthened (asset-heavy)** | Ulanqab 1GW/160,000 Ascend + RMB 500B valuation + IPO preparation |
| Technical leadership | **Neutral-to-eroded** | GLM-5.3-Flash / Qwen3.8-flash cheaper; open source can be distilled |
| Talent | **Eroded** | 5+ core researchers departed; hiring has no research roles |

---

## 5. Business Model Change Research

**Judgment: no structural change in the business model this week — still "free App for scale + paid API for monetization", no C-end subscription, no advertising. But this week's actions advanced clearly on two dimensions: "monetization efficiency" and "capital structure".**

### 1. Revenue model (unchanged)

- **Main revenue = developer API**: billed per token, prepaid balance, **no seat contracts, no annual-fee minimum consumption**; cache hit/miss differential pricing + peak/off-peak pricing.
- **C-end App completely free**: no subscription, no ads, no in-app purchase (vs. ChatGPT Plus / Gemini Advanced at ~$20/month). This is deliberate strategy — **use free distribution to gain scale and brand, then monetize via API**.
- **Enterprise/private deployment**: MIT-licensed open weights cover "local deployment / sovereign AI" demand; reach enterprises through integrators and cloud hosts; OpenAI/Anthropic-compatible API lowers migration friction.
- **User scale**: China MAU ~**130 million** (QuestMobile May–June 2026 basis), **third** among domestic AI-native apps, behind Doubao (~382 million) and Qwen (~167 million).

### 2. This week's pricing and monetization actions

- **Sep 9 price cut** (effective next day): cache-hit input 0.05→0.02 RMB, cache-miss 1.5→1 RMB, output 4.5→4 RMB — less than a month after peak/off-peak pricing was first introduced on Aug 17.
- Contrast: in mid-August prices were raised **2.3–4.5x**, and Liang Wenfeng said customer count did not decline after the hike. The rhythm of "**test elasticity with a hike first, then expand scale with a cut**" reflects a company testing pricing power while valuing share simultaneously.
- **Strategic implication**: the price cut further compresses industry profit margins, **pushing competition toward "scale economy" rather than "unit profit"** — exactly DeepSeek's comfort zone.

### 3. Financial data (media / research-note basis, unaudited)

| Metric | Value | Source |
|---|---|---|
| First-7-month 2026 revenue | ~**RMB 475 million** (~10x full-year 2025) | The Information / Wallstreetcn |
| First-7-month net loss | ~**RMB 715 million** | same |
| Overall gross margin | **44.6%** | same |
| API business gross margin | **82.9%** | same |
| Annualized revenue run-rate | ~**$1 billion** (Sep, more than doubled over a few months ago) | The Information 9/24, **Reuters said it could not independently verify** |
| AI infrastructure spending | ~**RMB 11 billion** | The Information |
| Compute allocation | **>70% used for model training**, inference under 30% | same |

### 4. Capital-structure change (substantive progress this week)

- **IPO preparation**: Sep 9 Reuters reported CITIC Securities was hired to prepare a STAR Market listing (the fifth listing standard, which allows unprofitable AI companies to list); targeting submission within 2026 and 2027 listing. **Not yet formally filed**; CITIC has entered due-diligence stage but has not signed a tutoring agreement.
- **CFO arrival** (reported Sep 14): first CFO in three years, marking the remediation of the financial-management system.
- **Financing rhythm**: second round in progress, pre-money valuation ~RMB 500 billion, raising ~RMB 50 billion, with Liang Wenfeng targeting completion **before end-October**.

**Business-model summary**: DeepSeek's business model is a single-engine "**open source for ecosystem, free for scale, API for revenue**". This week introduced no new engine (still no subscription, no ads), but pushed the model to greater capital leverage through **price cuts to expand API scale + initiating capitalization**. **Core hidden concern**: revenue is almost 100% API-dependent, with limited ability to withstand a price war; and how long the 82.9% API gross margin can hold under the dual squeeze of "continuing price cuts + cheaper rivals" is the key variable.

---

## 6. Industry Competitive Landscape

### 6.1 Landscape: Chinese vendors lead comprehensively on developer usage; the price war re-heats

**Structural facts (OpenRouter data, compiled by Guosen Securities on 9/29)**:
- In Sep 2026, Chinese models' Token share was **61.9%**; OpenAI 13.9%, Google 5.1%, Anthropic 3.4%.
- Domestically: **DeepSeek ~34.9%**, GLM 24.1%, Tencent 23.8% (the three ≈83% together); **the Flash tier accounts for ~52.4% of domestic Tokens** — **low-cost models are the main contributor to domestic share**.
- OpenRouter's Sep daily Token average was 18.19T, up ~17.8x from the start of the year.

**Events within and immediately around the period**:

| Date | Company | Event |
|---|---|---|
| 9/8 | **DeepSeek** | Started 150-person engineering hiring (no research roles) |
| 9/8 (US ET) | **US government** | CISA/NSA/FBI joint advisory AA26-251A alleges six Chinese AI companies incl. DeepSeek "industrial-scale distillation" of US frontier models; 9/9 China's Ministry of Commerce rebutted "groundless in fact and in law" |
| 9/9 | **DeepSeek** | Announced Flash-series price cut; Reuters reported it hired CITIC Securities for STAR Market |
| 9/10 | **DeepSeek** | Released V4.1-Flash; same day Zhipu HK shares -10.34%, MiniMax -8.98% (September cumulative -31.5% / -16.3%) |
| 9/10 | **Morgan Stanley** | Said even after the cut, DeepSeek V4 Flash is still not the cheapest among lightweight models |
| 9/11 | **Shanghai AI Lab / Moonshot AI** | Atria Dawn Preview (744B MoE, MIT) released; Kimi K2.8 Preview released |
| 9/12–13 | **Zhipu** | Started ~**$5 billion** re-financing ($2 billion placement @HK$714 + $3 billion zero-coupon convertible) |
| 9/13 | **Moonshot AI** | Rumored to have confidentially filed with the HKEX, Pre-IPO pre-money valuation rumored ~$50 billion |
| 9/16 | **ByteDance Doubao** | Doubao-Seed-2.1-pro update |

**Background (immediately outside the period)**: Aug 28 Tencent open-sourced Hy4 preview (770B/49B activated); Jul 17 Kimi K3 (2.8-trillion parameters); August saw Alibaba Qwen3.8-flash and Zhipu GLM-5.3-Flash launch — Morgan Stanley noted the latter was one of the triggers for DeepSeek's price cut.

**International side**: Sep 3 OpenAI released GPT-6 Astra; Sep 12 Anthropic CEO Amodei posted a long essay calling for "slowing the frontier pace"; Sep 30 Google released Gemini 4 "Argon". International frontier models still lead on capability, but **on developer usage and cost-performance, Chinese vendors have formed a collective advantage**.

### 6.2 DeepSeek's competitive advantages

1. **Leading cost structure**: sparse MoE (V4 series ~1.6T total parameters with only ~49B activated) + FP8 training + sparse attention + extreme KV Cache compression; API gross margin 82.9%.
2. **Open-source ecosystem and distribution**: MIT license, multi-channel via Hugging Face/Ollama/ModelScope; integrated by default into cloud vendors and Agent tools (Tencent WorkBuddy/CodeBuddy, OpenCode, Baseten).
3. **Domestic-compute binding**: Ascend/Cambricon Day-0 adaptation; self-built 1GW data center reduces NVIDIA dependence and avoids export-control risk.
4. **Brand and developer mindshare**: OpenRouter usage #1; clear "cost-performance + openness" positioning.
5. **Ample capital ammunition**: two financing rounds possibly over RMB 100 billion in total; STAR Market IPO path opened.
6. **Architecture and engineering capability**: V4.1-Flash surpasses its own flagship at a smaller size, validating the "efficiency-first" route.

### 6.3 DeepSeek's competitive disadvantages

1. **Technical differentiation eroded**: open weights are distillable/fine-tunable/commercially usable; GLM-5.3-Flash and Qwen3.8-flash are cheaper in the lightweight tier.
2. **Talent outflow**: core researchers continuously poached at high salary; hiring focus shifting to engineering, weakening frontier-research depth.
3. **Missing C-end monetization**: free App with no subscription/ads; revenue almost entirely API-dependent, limited ability to withstand price wars and cycles.
4. **Imbalance between profit and scale**: first-7-month net loss RMB 715 million, infrastructure spending RMB 11 billion, huge capital consumption.
5. **Lagging multimodal interaction**: voice is only TTS-level grayscale, behind Doubao/GPT-Live/Gemini Live; visual image-reading still weak in third-party tests.
6. **Organizational expansion risk**: rapidly doubling from <300 people, culture and management under pressure.
7. **Geopolitical and compliance**: listed in the US "distillation" allegation; friction between the domestic-chip route and overseas expansion.

---

## 7. Core Product Update Highlights

> **DeepSeek's only official core-model update within this period was the Sep 10 DeepSeek-V4.1-Flash.** R2, Coder, independent multimodal, and V4.1-Pro were not released within this period.

### 1. DeepSeek-V4.1-Flash release (Sep 10, the week's most important)

- **Positioning**: the smallest model in the new model-structure family, official slogan "stronger, faster, more accessible"; features **native multimodal visual understanding**.
- **Architecture**: **552B (552 billion) parameter MoE**, adopting a brand-new **Causal Encoder-Decoder (CED)** asymmetric structure — **processing input (prefill) activates only 8B parameters, generating output (decode) activates 16B parameters**; especially cost-efficient for "input-heavy" Agent scenarios. 40 layers (encoder/decoder 20 each), using CSA2 (Compressed Sparse Attention 2).
- **KV Cache compression**: combining CSA2 cross-layer KV reuse with **FP4 KV cache**, global KV cache reduced to **890 bytes per token**, HBM requirement down to **1/4**, SSD requirement down to **1/8** (officially, relative to first-generation models, KV Cache has shrunk 437x).
- **Specs**: supports **1M Token context**, max **384K output**; supports JSON Output, Tool Calls, Responses API, and low/high/max three reasoning-effort levels.
- **Pretraining**: multimodal corpus **45T tokens**.
- **Open source**: **MIT license**, weights released on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`), technical report PDF released with the model; the arXiv version "DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression" (arXiv:2609.19969) was submitted **Sep 17** (after the period). The weights are reportedly in 48 shards; official says large-scale self-deployment needs ~**2,000 GPUs + storage cluster** (third-party basis). vLLM already supported; NVIDIA NIM model card went live Sep 18.
- **Benchmarks (official basis)**: GPQA Diamond **90.9**, Codeforces competitive programming **3471**, Terminal-Bench 2.1 **90.6** (V4 Pro 87.9), CyberGym cybersecurity **88.1** (V4 Pro 83.3), HLE 36.8 (with tools 63.9), MathArena Apex 65.6, DeepSWE v1.1 **74.2**, NL2Repo-Bench 65.4, SEC-Bench Pro 62.8, Automation-Bench 54.8, Agents' Last Exam 31.8; multimodal side Chartography (with tools) 78.9, BabyVision (with tools) 89.6. Official says with only **1/3 total parameters and 1/4 activated parameters**, world knowledge / reasoning / coding rival V4-Pro-Base. **Weaknesses**: Terminal-Bench 3.0 only 30.0, 4.0 only 31.2, ExploitGym 15.3 — still a gap vs. giant models on expert-level / high-difficulty agentic tasks.
- **Pricing (effective Sep 10 12:00, peak/off-peak)**:

  | Item | Off-peak | Peak |
  |---|---|---|
  | Input (cache hit) | ¥0.02 / $0.003 | ¥0.04 / $0.006 |
  | Input (cache miss) | ¥1 / $0.15 | ¥2 / $0.30 |
  | Output | ¥4 / $0.60 | ¥8 / $1.20 |

  Peak is Beijing time Mon–Fri 9:00–12:00, 14:00–18:00 (UTC 01:00–04:00, 06:00–10:00); weekends and Chinese statutory holidays are all off-peak, off-peak price being half the peak. Vs. the prior V4 Flash: cache-hit input **cut 60%**, cache-miss input cut ~33%, output cut ~11%. **Concurrency caps**: `deepseek-flash` 2500, `deepseek-v4-pro` 500.
  **V4 Pro pricing unchanged**: cache hit ¥0.022–0.044 / $0.022–0.044, cache miss ¥0.66–1.32, output ¥1.98–3.96 (off-peak/peak basis per official pricing page).
- **API change**: model name changed to `deepseek-flash`; old **V4 Flash and V4 Flash Vision Exp retired** (old names temporarily routed to V4.1 Flash).
- **Ecosystem integration**: partners **WorkBuddy (incl. CodeBuddy) and OpenCode fully integrated**; Baseten added it to its model API.

### 2. The V4 Pro retirement-plan "reversal" event (Sep 10 announcement → Sep 11 reversed, the week's most controversial)

- **Original plan**: Sep 10 announcement said that from **Sep 14 Beijing-time noon**, all `deepseek-v4-pro` API requests would be **silently routed** to `deepseek-v4.1-flash` and billed at Flash rates — only **4 days** from announcement to switch, no deprecation transition period, no dual-track operation, no traffic mirroring.
- **Developer backlash**: developers protested continuously on Discord, GitHub Issues, and Chinese forums, arguing that "a model name is just a label to the vendor, but a contract to the customer" — production systems bound to V4 Pro's failure modes, prompt templates, guardrail thresholds, and cost models usually need 4–6 weeks to migrate; 4 days was criticized as "a forced downgrade disguised as an upgrade".
- **Official backtrack**: before the original deadline, DeepSeek **revoked the policy** and announced that **after Sep 14 it would continue providing V4 Pro's API service with unchanged billing**; the original changelog entry was silently revised.
- **Simultaneously**: DeepSeek-V4-Pro **GA** went live on App, Web, and API (model name `deepseek-v4-pro`, version `DeepSeek-V4-Pro-0813`), with substantially enhanced Agent capability.
- **Residual issue**: as of a third-party crawl on Sep 17, the official **news page and changelog still disagreed** (news page still said "retire/route", changelog said "continue providing") — two accounts for one fact, itself a governance blemish.
- **Investment perspective**: this was **a negative event for API stability and customer trust**; no substantial loss in the short term (timely reversal), but it exposed the tension between "fast iteration" and "production-grade commitment".

### 3. App / web: three modes merged into unified "Smart Mode" (Sep 10)

- The former **"Fast Mode / Expert Mode / Image-Recognition Mode" were merged and upgraded** into a unified "Smart Mode": the model automatically detects query complexity and allocates reasoning effort, and automatically activates vision when image input is detected.
- Significance: interaction-layer simplification, consistent with V4.1-Flash's "adaptive" capability positioning.

### 4. App gray-test of AI voice dialogue (Sep 12)

- Users granted grayscale access see **a small speaker button in the top-right of the App**, click to start real-time voice dialogue; settings added "read-aloud voices" offering **four voices**, named with ocean imagery (echoing the blue-whale brand): **Shell** (versatile, lively), **White Wave** (bright, resolute), **Starfish** (playful, sweet), **Dark Tide** (deep, mellow).
- Only small-scale grayscale; **web not yet supported**; official has not announced a full rollout schedule.
- **Limitations**: the current form is closer to **TTS read-aloud**, still some distance from true full-duplex real-time voice (talk-and-listen, interrupt anytime); ByteDance Doubao (full native full-duplex since April), OpenAI GPT-Live, and Google Gemini Live are ahead. This is DeepSeek catching up on **multimodal interaction**.

### 5. V4.1 Pro in early grayscale (after the period, late September)

- Per a Sep 28 report, V4.1 Pro has entered account-batched grayscale **Early Access**, with high-tier reasoning effort enabled by default; no formal release date. Within the period (Sep 10 announcement) official only mentioned "V4.1 Pro to follow", without a date.

### 6. Pre-release teaser via official channel (Sep 8)

- On the afternoon of Sep 8, DeepSeek seeded a beta model name **`deepseek-v4.1-flash-expires-on-0910`** in the official user group — the suffix "0910" is the "shelf life"; 48 hours later (Sep 10 12:00) the official version went live, with the beta name and price cut effective/expiring on the same day. This was the week's earliest product signal.

### 7. Leaderboards and service status

- **LMArena (third-party snapshot 9/25)**: `deepseek-v4.1-flash-max` ~**1477 ± 8 Elo** (~6630 votes), ranked ~**#30**; same leaderboard v4-pro-high 1464, v4-pro 1458.
- **Artificial Analysis**: V4.1 Flash Intelligence Index ~**39–39.5** (highest of DeepSeek's lineup), per-task cost ~**$0.27**.
- **Service status**: within this period (9/8–9/14) the official status page **showed no incident**; rolling availability (Jul–Oct 2026) V4-Pro API 99.92%, V4.1 Flash API 99.69%, chat service 99.84%. After the period, Sep 15 saw partial web/API unavailability of ~3 hours.

### 8. Product events that did **not** happen within this period (by elimination)

- **R2 / standalone R-series reasoning model**: **not released**. Multiple tracking sites and official docs show R2 was never formally released; "reasoner" was folded into V4's thinking mode (`reasoning_effort` low/high/highest), and the standalone `deepseek-reasoner` name was retired on Jul 24, 2026.
- **Standalone DeepSeek Coder update**: not found.
- **Independent new multimodal model**: not released (this week's multimodal capability is built into V4.1-Flash).
- **V4.1-Pro**: not released (grayscale only).

### 9. This week's product-line summary

| Product line | This week's status |
|---|---|
| Flagship/main model | **V4.1-Flash released** (9/10); V4 Pro GA retained (9/11 reversal of retirement) |
| Open source | V4.1-Flash **MIT-licensed open source** + technical report |
| API | Price cut + model name change (`deepseek-flash`) + Responses API |
| App/Web | Three modes merged (9/10); voice dialogue grayscale (9/12) |
| Agent platform | Harness (DSH) continuous iteration (desktop v0.2 released Sep 30, outside period) |
| Research | DSec paper (Liang Wenfeng signed, around 9/23, outside period) |

---

## 8. Stock Market Value and Valuation Research

> **Premise**: DeepSeek is **unlisted**, with no secondary-market price or market cap. This section substitutes "share-price/market-cap" research with **primary-market valuation and financing progress**.

### 8.1 Valuation and financing timeline

| Time | Event | Amount | Valuation |
|---|---|---|---|
| 2023–2026.5 | Solely owned/operated by High-Flyer Quant, no external financing | — | — |
| Apr 2026 | First opened external financing | — | Rumored ~$10 billion |
| Jun 2026 | **First external round closed** | ~**RMB 51 billion (~$7–7.5 billion)** | Post-money ~**$52 billion (~RMB 350–400 billion)** |
| Jul 2026 | Started second round | Target ~RMB 50 billion | Pre-money ~RMB 480 billion |
| Aug 26, 2026 | Reported near-complete second round | ~$7.4 billion | ~$74 billion |
| **Sep 9, 2026** | **Latest valuation cited in IPO report** | — | ~**RMB 500 billion (~$74 billion)** |
| Sep 24, 2026 | Liang Wenfeng told investors target of completing round 2 **before end-October** | RMB 50 billion | RMB 500 billion |

**First-round investors**: Liang Wenfeng personally ~RMB 20 billion (largest single contributor, ~40%), Tencent ~RMB 10 billion, CATL-linked ~RMB 5 billion, plus JD.com, NetEase, IDG, Monolith, Zhenxin Valley, Shixiang, the National AI Industry Investment Fund, etc. External investors **enjoy only dividend rights, no voting rights and no board seats, shares locked five years**.

**Second round (media basis, medium credibility)**: SMIC Juyuan, Boyu Capital, CPE Yuanfeng, Hefei state-owned platform, etc.; Tencent/CATL/IDG increasing stakes.

**Sep 8 detail**: financing allocations extremely sought-after — rumored **RMB 100 million entry requires an RMB 18 million upfront fee first, five-year lock-up, no voting rights** (media basis).

### 8.2 Valuation judgment: **high on absolute terms, relatively not expensive cross-sectionally; but information is mostly rumor and should be labeled a "rumor range"**

**Longitudinally (expensive)**:
- Second-round pre-money ~$74 billion, up over 40% from June's post-money ~$52 billion, and ~7x April's rumored $10 billion.
- Based on first-7-month 2026 revenue of RMB 475 million (~$66 million) annualized, **the P/S exceeds 1,000x**; even using The Information's September $1 billion ARR basis, **P/ARR is still ~74x**.
- First-7-month net loss RMB 715 million, not yet profitable.

**Cross-sectionally (not expensive)**:

| Company | Valuation | ARR (basis) | Notes |
|---|---|---|---|
| **DeepSeek** | ~**$74 billion** (~RMB 500 billion) | ~$1 billion | Unlisted, second-round pre-money |
| OpenAI | ~**$1.4 trillion** (pre-money, 9/30 report) | rumored >$40 billion | IPO delayed to 2027 |
| Anthropic | ~**$965 billion** (Series H post-money) | rumored >$65 billion | rumored Oct IPO |
| Moonshot AI Kimi | ~**$50 billion** | ~$1 billion | rumored confidential HKEX filing Sep 2 |
| Zhipu | ~**$49.5 billion** | ~$1.6 billion | listed on HK in Jan 2026 |
| MiniMax | ~**$13.1 billion** | ~$0.8 billion | listed on HK in Jan 2026 |

- **DeepSeek's P/ARR (~74x) is notably lower than OpenAI/Anthropic's rumored bases, close to Moonshot AI (~50x), but far higher than the already-listed Zhipu (~31x) and MiniMax (~16x)**.
- If computed on its June post-money $52 billion, P/ARR is ~52x, in the "reasonable-to-slightly-expensive" zone within China's first-tier LLM group.

**Valuation-support logic**: **scarcity (the only unlisted Chinese AGI first-tier target) + domestic-substitution narrative + listing expectation + team-stability incentive demand**, rather than current profitability.

**Key uncertainties**:
1. All ARR/revenue/gross-margin/valuation figures are **media or research-note bases, unaudited**; The Information's "$1 billion ARR" was explicitly unverifiable to Reuters.
2. Second-round financing **not publicly confirmed as complete within the period**.
3. The "post-listing market cap of RMB 1.5–2.5 trillion" analysis is market extrapolation, not a determined value.

### 8.3 Related holdings (background)

Liang Wenfeng-affiliated institutions' allocation in Unitree Robotics (688836.SH, listed Aug 19, 2026) once drew attention: DeepSeek strategic placement 933,400 shares (~RMB 141 million, 36-month lock-up); High-Flyer Quant / Jiuzhang Asset offline-subscription combined ~258,200 shares (~RMB 38.94 million). At the first-day opening price, combined floating profit was ~RMB 1.13 billion. **This is an August event, outside this digest period, listed as background reference only.**

---

## 9. Weekly Digest Summary (Value-Investing Perspective)

**This week's (2026-09-08 to 09-14) core narrative**: with **V4.1-Flash (smaller, stronger, cheaper) + proactive price cut + retaining V4 Pro + voice grayscale**, DeepSeek consolidated its "cost and distribution" moat; simultaneously, with **CITIC Securities preparing the STAR Market listing + second-round $74 billion valuation + first CFO arrival + 150-person engineering hiring**, it put itself on the fast track of capitalization. **This was a densely packed week of "product, capital, organization" three-front advancement.**

### Positive signals

1. **The cost moat remains the industry's strongest**: V4.1-Flash reaches flagship level at 1/3 parameters and 1/4 activation, cuts price at launch, API gross margin 82.9% — the "efficiency-first" route continues to be validated.
2. **Leading developer usage**: OpenRouter domestic share #1 (~34.9%), weekly Token usage #1 — solid ecosystem-distribution capability.
3. **Capitalization path opened**: STAR Market fifth standard + CITIC Securities + first CFO — financing and incentive channels are opening, directly relieving the biggest risk of "talent outflow".
4. **Correct direction of organizational remediation**: the 150-person hiring is all-in on engineering (API stability, Agent sandbox, data engineering), showing the company realizes "model leadership ≠ product reliability".

### Risk signals

1. **Technical leadership eroded by the open-source logic itself**: competitors can distill/fine-tune its weights, and GLM-5.3-Flash and Qwen3.8-flash are cheaper in the lightweight tier — **DeepSeek's "cheapest" label has been partly taken away**.
2. **The V4 Pro retirement controversy exposed a "production-grade commitment" shortfall**: the 4-day migration window triggered strong developer backlash; reversed, but brand trust was damaged.
3. **Valuation already high**: P/ARR ~74x, far above the listed Zhipu (~31x) and MiniMax (~16x), and core financial data are all unaudited.
4. **Imbalance between profit and capex**: first-7-month net loss RMB 715 million, infrastructure spending RMB 11 billion; the 1GW data center + 160,000 Ascend chips (chip investment >RMB 40 billion) are an **extremely heavy capital commitment**, whose success hinges on the delivery cadence of domestic chips.
5. **Geopolitical risk**: on Sep 8 named in the US CISA/NSA/FBI "industrial-scale distillation" allegation list; escalating US-China AI friction may affect its overseas ecosystem and chip supply.
6. **Missing C-end monetization**: no subscription, no ads, revenue 100% API-dependent, limited price-war resilience.

### Next verification points

1. **V4.1 Pro's formal release** and whether it can catch up to the international frontier on high-end capability (already in grayscale within the period).
2. **Whether the second round completes on schedule before end-October** (Liang Wenfeng's time commitment to investors).
3. **Whether the STAR Market IPO files within 2026** (CITIC still in due diligence, no tutoring agreement signed).
4. **Delivery cadence of the Ulanqab 1GW data center + Ascend 950DT** (determines whether its cost advantage and compute autonomy materialize).
5. **Whether API gross margin holds under continued price cuts** (82.9% is the moat's core quantitative metric).

---

## 10. Information Sources

**DeepSeek official / primary**
- DeepSeek research & news (V4.1-Flash release): https://www.deepseek.com/news/deepseek-v4-1-flash/ ; https://www.deepseek.com/en/news/deepseek-v4-1-flash/
- DeepSeek API changelog (2026-09-10): https://api-docs.deepseek.com/zh-cn/updates/ ; https://api-docs.deepseek.com/updates/
- DeepSeek models & pricing: https://api-docs.deepseek.com/zh-cn/quick_start/pricing/
- DeepSeek service status: https://status.deepseek.com/
- DeepSeek hiring site: https://talent.deepseek.com/
- Hugging Face weights: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- Technical report (arXiv, 9/17): https://arxiv.org/abs/2609.19969
- NVIDIA NIM model card: https://build.nvidia.com/deepseek-ai/deepseek-v4.1-flash/modelcard

**Within-period (2026-09-08 to 09-14) reports**
- 150-person hiring (09-08): https://finance.sina.com.cn/roll/2026-09-08/doc-inirauhw9231788.shtml ; https://m.thepaper.cn/newsDetail_forward_34029211
- STAR Market IPO hiring CITIC Securities (09-09, Reuters): https://finance.sina.com.cn/tech/digi/2026-09-09/doc-inirfivw8575652.shtml ; https://www.gelonghui.com/news/5308729
- V4.1-Flash release and price cut (09-10): https://ad.36kr.com/p/3977300285174021 ; https://cloud.tencent.cn/developer/article/2741287 ; https://finance.sina.com.cn/tech/digi/2026-09-10/doc-inirihny7830865.shtml
- Three-mode merge (09-10): https://next.ithome.com/archiver/1/000/602.htm
- V4 Pro continues serving (09-11): https://m.ithome.com/html/1001443.htm
- Voice dialogue grayscale (09-12): https://www.cqcb.com/news/56/2026-09-12/6218545.html ; https://36kr.com/newsflashes/3979780132436742
- CFO Yan Wentao (09-14): https://www.tmtpost.com/8140058.html ; https://36kr.com/p/3995475337465737
- CISA/NSA/FBI distillation allegation (09-08) and Commerce Ministry response (09-09): https://www.secrss.com/articles/93797 ; https://news.cctv.com/2026/09/09/ARTIKNctkycgrPrj32hNf8Eh260909.shtml
- Zhipu $5 billion re-financing (09-12/13): https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0918/2026091800399.pdf

**Competitive landscape / industry**
- Guosen Securities LLM competition tracker (09-29): https://pdf.dfcfw.com/pdf/H3_AP202609291830006235_1.pdf
- AI industry biweekly report 2026 Sep issue 1: https://pdf.dfcfw.com/pdf/H3_AP202609201829665945_1.pdf
- Morgan Stanley on DeepSeek price cut: https://hk.stockstar.com/IG2026091000015578.shtml
- OpenRouter model rankings: https://openrouter.ai/rankings
- Moonshot AI confidential filing: https://www.gelonghui.com/news/5305150

**Valuation / financing / financials**
- The Information: ARR $1 billion / second round RMB 50 billion (09-24): https://finance.sina.com.cn/tech/digi/2026-09-24/doc-inisxhpf0445442.shtml
- First-7-month revenue RMB 475 million / net loss RMB 715 million: https://wallstreetcn.com/articles/3780340
- First-round financing details: https://www.nfnews.com/content/46NdVgkDym.html (Nanfang+ "Another bombshell, Liang Wenfeng's restraint and its cost", 2026-08-06)

**Corporate culture / founder**
- 4-hour investor closed-door meeting transcript: https://www.stcn.com/article/detail/4037119.html
- Liang Wenfeng talent view and management philosophy: https://www.tmtpost.com/8058654.html ; https://ai.zol.com.cn/1220/12202022.html
- Reading DeepSeek management from the CFO choice: https://36kr.com/p/3995475337465737

**Computing**
- Ulanqab 1GW data center / 160,000 Ascend: https://m.thepaper.cn/newsDetail_forward_34082987 ; https://m.36kr.com/p/3985944726141703

---

> **Disclaimer and reliability notes**
> 1. Within this digest period **DeepSeek is unlisted**, with no secondary-market share price; Section 8's valuation data all come from primary-market financing rumors and media reports, **unconfirmed by the company or regulators**.
> 2. All financial data in this report (revenue, gross margin, loss, ARR) are **media or research-note bases, unaudited**; The Information's "$1 billion ARR" was explicitly unverifiable to Reuters.
> 3. In this research environment, direct web fetching (WebFetch) was globally blocked by security policy; all information came from search-engine-returned summaries and headlines, **and the original sources could not be opened one by one for verification**, so there is a risk of relay error. For any content marked "rumored" / "media basis" / "unconfirmed by the company", please defer to DeepSeek's official announcements and the future prospectus.
> 4. Some background information (the late-September The Information reports, the DSec paper, Harness desktop) comes from **after-period** disclosures, marked in the text, used to aid understanding of the period's state.