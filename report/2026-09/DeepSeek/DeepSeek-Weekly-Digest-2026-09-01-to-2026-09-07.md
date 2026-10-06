# DeepSeek Weekly Digest (2026-09-01 to 2026-09-07)

> Generated on: 2026-10-01
> Research subject: DeepSeek (Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., unlisted; founder / actual controller: Liang Wenfeng)
> Digest period: 2026-09-01 to 2026-09-07 (both ends inclusive)
> Information sources: public web retrieval (news, broker research, official status pages and API docs, third-party data platforms); key conclusions have source links at the end.

---

## Table of Contents

- [1. Weekly Overview](#1-weekly-overview)
- [2. Key Points of the Actual Controller's Public Statements](#2-key-points-of-the-actual-controllers-public-statements)
- [3. Corporate Culture Observations](#3-corporate-culture-observations)
- [4. Core Product Update Highlights](#4-core-product-update-highlights)
- [5. Moat Change Assessment](#5-moat-change-assessment)
- [6. Stock Market Value and Valuation Research](#6-stock-market-value-and-valuation-research)
- [7. Business Model Change Research](#7-business-model-change-research)
- [8. Industry Competitive Landscape](#8-industry-competitive-landscape)
- [9. Weekly Digest Summary (Value-Investing Perspective)](#9-weekly-digest-summary-value-investing-perspective)
- [10. Information Sources](#10-information-sources)

---

## 1. Weekly Overview

**One-sentence summary: this was a "quiet build-up week" for DeepSeek — no model releases, no official announcements, zero founder statements — yet within a single week, two main threads surfaced — "compute autonomy (160,000 Huawei Ascend chips)" and "organizational expansion (150 engineering positions)" — laying the groundwork for the mid-September V4.1-Flash release and the STAR Market IPO sprint.**

The key to this week lies in the tension between **"what did not happen" and "what was exposed"**: DeepSeek officially had **no model, product, API, or paper releases** between 9/1 and 9/7 (the official changelog is completely blank between the 8/21 V4-Flash-Vision-Exp and the 9/10 V4.1-Flash); but the two pieces of news exposed this week point respectively to the company's two lifelines over the next two years — **compute shifting from NVIDIA to Huawei Ascend**, and **the organization moving from a "small walled garden" to industrial scale**.

| Date | Event | Nature |
|------|------|------|
| Sep 1 | WeChat Pay's AI-dedicated card connected to **DeepSeek Harness and OpenClaw** (announced 8/31, English-media coverage 9/1); same day Jiemian News disclosed: first-round financing ~RMB 51 billion, second round planned ~RMB 50 billion, pre-money valuation ~RMB 500 billion; first-7-month revenue ~RMB 475 million, API gross margin 82.9% | Ecosystem/capital |
| Sep 2 | **Web/API partial outage ~31 minutes** (05:54–06:25 UTC, official status page listing, affecting V4 Pro API and chat services); same day Moonshot AI (Kimi) reported to have **secretly filed with the HKEX** | Operations/competition |
| Sep 3 | Media declared "**the Token price war is over**, pricing is beginning to reflect model capability"; same day NVIDIA announced a **USD 12.93 billion acquisition of Hugging Face** | Industry |
| Sep 4 | **Bloomberg**: DeepSeek plans to deploy **at least 160,000 Huawei Ascend 950DT** chips at its Ulanqab, Inner Mongolia data center, **for inference only**, with training still on NVIDIA; nominal order ~USD 2.56 billion, planned at gigawatt scale | Compute (heaviest this week) |
| Sep 4 | Caijing reported: DeepSeek investment allocations being frantically pursued, **RMB 100 million entry requires an RMB 18 million upfront fee (18%) first**, plus 35% backend carried interest, **five-year lock-up, no voting rights** | Capital |
| Sep 7 | **Harness team lead Cui Tianyi** publicly opened hiring, releasing ~**150 HCs** at once (server-side development across 6 directions + Agent elastic-compute across 2 directions), Beijing-majority, some Hangzhou | Organization |

**No share-price data this week** — DeepSeek is an unlisted company; valuation discussion is in [Section 6](#6-stock-market-value-and-valuation-research).

---

## 2. Key Points of the Actual Controller's Public Statements

### Background on the actual controller

DeepSeek's actual controller is **Liang Wenfeng** (founder of High-Flyer Quant, born 1985, bachelor's and master's from Zhejiang University). He is simultaneously the company's **largest single contributor**: in the June 2026 first round of ~RMB 51 billion, Liang personally contributed about **RMB 20 billion**. The company's external financing structure sits in a **limited partnership managed by Liang Wenfeng**; most external investors have **no voting rights and no board seats**, sharing financial returns only by contribution ratio — this is the key to understanding DeepSeek's governance structure: **capital came in, but control was not diluted.**

It must be specifically noted that Liang Wenfeng **has no personal X (Twitter) account**; the only officially recognized X account of DeepSeek is @deepseek_ai, plus the WeChat official account "DeepSeek" and the Xiaohongshu account "@DeepSeek". The "statements" circulating under his name online are mostly fake accounts or fan creations.

### Within the period (9/1–9/7): Liang Wenfeng himself made **zero public statements**

Confirmed through multi-source cross-referenced searches, **Liang Wenfeng made no public statements in any form within this period** — no internal letter, no open letter, no interview, no speech, no signed article, no signed technical paper, no staff-all-hands speech. This itself is important information: compared with the July rhythm of the "4-hour investor closed-door meeting transcript" leaking and the dense exposure of July-11-style internal letters, **the first week of September was a week of deliberate silence for Liang Wenfeng.**

### The only "management voice" within the period: Cui Tianyi's recruiting post (evening of Sep 7)

Harness team lead **Cui Tianyi** (joined DeepSeek in March 2026 to lead the newly formed Harness team) posted publicly on social media, releasing ~150 HCs at once. Key points and verbatim quotes carried by media:

- **"An unprecedented 150-HC hiring requirement"** — framed as "long-termist, large-scale investment".
- **"There are many new directions, new systems, new demands to build"**; "anything in the computer field, once the scale grows large, creates a huge increase in complexity."
- **None of the positions are AI research roles**; all go to backend engineering: server-side development (LLM research platform, Agent framework components, R&D-efficiency infrastructure, DeepSeek API, online services, data engineering — six directions) and Agent elastic-compute R&D (platform development & maintenance, low-level tuning, oriented to the DSec sandbox platform).
- On the Agent elastic-compute positions specifically: "**Many of these things no one has done before; there is no ready-made answer to copy.**"
- Wants candidates who "**really learn and understand the underlying technology, rather than staying at the level of trying out AI products.**"

> **Note**: Cui Tianyi is a technical team lead, not a CEO/CFO-level executive. **No statement from the CEO or CFO level was seen within the period** (first CFO Yan Wentao had not yet arrived — his news first appeared 9/14, official start 9/21, both outside this period).

### "Historical statements" repeatedly quoted within the period (background, all outside the period)

Although outside this period, the market still heavily quoted the following when interpreting DeepSeek this week, forming the backdrop for understanding its strategy:

- **July 2026 · 4-hour investor closed-door meeting transcript** (leaked and widely circulated): "**Restraint is a strategy**"; DeepSeek does not seek to maximize commercial interests, earning only "reasonable profit" — "buy a batch of servers back, roughly 10 months to recover equipment cost is enough"; "**team stability is the core, sole, non-concessionable interest**"; the strongest future model will still likely be open-sourced.
- **Late July 2026 · internal speech**: AI's self-iteration will lead everyone to a **singularity**.
- **Outside period, 9/19**: Liang Wenfeng appeared as the final author on the DSec (Agent training sandbox infrastructure) paper, with 130+ authors — continuing his consistent "last-author" style.

---

## 3. Corporate Culture Observations

Synthesizing this period's disclosures with background information, DeepSeek's current corporate culture can be summarized as a combination of **"extreme engineering-ization + long-termism + anti-scale-worship"**, and the 9/7 recruiting post is this week's most direct cultural snapshot:

1. **Engineer culture outweighs researcher culture**: all 150 positions this time are **not a single AI research role** — all backend, API, Agent infrastructure engineering. This is the opposite of the outside imagination of an "AI lab = genius-researcher club" — DeepSeek's organizational center of gravity is shifting from "making models" to "**bearing scale**". Cui Tianyi's phrasing is blunt: it's not that the model fails, it's that "once scale grows, complexity increases enormously", and the existing backend systems need to be "upgraded, maintained, or even rewritten".

2. **"Anti-scale-worship" amid scale expansion**: total headcount is about 300 (research and engineering ~270, per the V4 technical report); hiring 150 at once is equivalent to "**hiring another half a DeepSeek**". Yet the hiring tone still emphasizes "really learn the underlying technology, rather than staying at the level of trying out AI products" — expanding while trying to preserve technical density. This continues the June 2026 pronouncement that "every department's scale at least doubles".

3. **"Restraint" as strategy rather than slogan**: from Liang Wenfeng's July internal formulation — earn only "reasonable profit", single-machine cost 10-month payback is enough. This value system is confirmed by August–September pricing behavior: 8/17 large hikes (V4-Pro peak output +350%, cache-hit input +1100%), 8/23 changing weekends all day to off-peak prices, 9/10 cutting again — **repeatedly calibrating between "wanting profit" and "wanting scale"**, rather than pursuing profit maximization one-sidedly.

4. **Extreme secrecy and low external expression**: founder makes zero statements, company issues no announcements, major moves (V4.1-Flash, IPO, chip orders) are almost all **first exposed by third-party media** with official confirmation after the fact or no response at all. This is an organizational temperament of "letting products speak, not PR".

5. **Organizational discipline coexists with talent flow**: on one hand emphasizing "team stability is the sole core interest" and retaining people with high salaries and options (researcher/Agent-Infra positions 60–90k·16-salary, incl. stock options); on the other hand, in 2025H2–2026H1 core R&D members did flow out to ByteDance, Tencent, Xiaomi, etc. (outside-period background) — **"stability" is a goal, not an established fact**.

---

## 4. Core Product Update Highlights

### Within this period: **no product releases**

This is the most important fact to emphasize this week. Checking DeepSeek's official changelog (api-docs.deepseek.com/updates) and the official "Research & News" page:

- The official changelog sequence is: 2026-04-24 (V4 preview) → 2026-07-31 (V4-Flash public beta) → **2026-08-13 (V4-Pro GA + price adjustment)** → 2026-08-21 (V4-Flash-Vision-Exp) → **2026-09-10 (V4.1-Flash)**.
- **There is no entry between 8/21 and 9/10.** Within this period, **no** model release, **no** API pricing change, **no** endpoint onboarding/offboarding, **no** context-length adjustment official announcement.
- **No new DeepSeek-signed paper was retrieved within this period** (the DSec paper was submitted 9/19, outside this period).

### Product-related actions actually occurring within this period

| Date | Action | Notes |
|------|------|------|
| Sep 1 | WeChat Pay AI-dedicated card connected to **DeepSeek Harness and OpenClaw** | Announced 8/31, English-media coverage 9/1. After user authorization, the full "recommend → order → pay" flow can complete in-conversation, and 700+ Pay Skills on Skillhub can be called for a fee. This is a step for Harness from "tool" toward "transaction entry" |
| Sep 2 | **Web/API partial outage ~31 minutes** | 05:54–06:25 UTC, official status page marks resolved; affected components include V4 Pro API and chat services. This week's only official operational event |
| Sep 2 | Third-party platform B.AI ends V4 Flash free access | Billed from 9/3 17:00 (SGT) at 50% of official price (additional 50% off during idle hours) |

### Product nodes immediately outside / easily confused (**all outside this period**)

| Date | Event |
|------|-------|
| Sep 8 | **V4.1-Flash 48-hour grayscale**: official user group released a temporary model `deepseek-v4.1-flash-expires-on-0910`, claiming "performance/cost/speed/total time comprehensively surpass V4 Pro", asking whether it can fully replace the live V4 Pro |
| Sep 9 | Official Flash-series price cut announced (max ~60% cut); exposed that CITIC Securities hired to prepare STAR Market IPO |
| **Sep 10** | **V4.1-Flash official release**: 552B MoE, brand-new Causal Encoder-Decoder asymmetric architecture (prefill activates ~8B, decode ~16B), 1M context, max output 384K, **native multimodal vision understanding**, MIT open source; KV Cache compressed to 1/4 HBM usage, 1/8 SSD. Benchmarks: GPQA Diamond 90.9, Codeforces 3471, Terminal-Bench 2.1 90.6, HLE (with tools) 63.9 |
| Sep 30 | Harness desktop v0.2 release; open-sourcing the full infrastructure component set for Huawei Ascend (TileLang Ascend version, DeepGEMM, DeepEP, FlashMLA, etc.), **benchmarked against NVIDIA CUDA** |

> **Conclusion**: this week is **a gap week in DeepSeek's product line**; all product highlights concentrate at 9/8–9/10 and after. This digest strictly lists them as outside-period, for trend reference only.

---

## 5. Moat Change Assessment

**Conclusion: this week the moat overall tilted "strengthened", and it strengthened DeepSeek's scarcest dimension — compute autonomy; but it also exposed a moat being eroded — the C-end entry.**

### Strengthening factors

1. **Compute autonomy: from "adapting to domestic" to "betting big on domestic" (this week's strongest signal)**
   On 9/4 Bloomberg reported DeepSeek plans to deploy **at least 160,000 Huawei Ascend 950DT** in Ulanqab, Inner Mongolia, at **gigawatt scale**. If landed, this would be **one of the largest known domestic AI chip clusters**. The deeper meaning is the **division of use**: this batch of chips **only does inference; training still uses NVIDIA** — showing DeepSeek has decoupled "inference cost" from "training capability", using domestic chips to solve scale-cost and NVIDIA to protect the intelligence ceiling. Combined with the 9/30 (outside period) open-sourcing of the full Ascend low-level component set benchmarked against CUDA, this is **a vertical-integration path from chip to compiler**.

2. **The cost-structure moat further consolidated**
   Ascend 950DT unit price ~RMB 111,000 per chip (vs. NVIDIA's comparable product), plus DeepSeek's self-developed operator libraries and the TileLang compiler, pointing to "**unit token cost continuing to fall**". This is the lifeline for the MaaS model to survive the price war, and the source of its 82.9% API gross margin (disclosed within this period).

3. **Still-improving conversion rate of the open-source ecosystem**
   Within the period (9/2), the CICC research note gave a key judgment: open-source model call volume is trending up, and by 2027 global open-source model calls will account for **50%–70%** of total token volume. Background data: DeepSeek's token share on OpenRouter doubled from 9% to 18% in 2026 Jan–Jun; Harness (DHS) after open-sourcing had over 190,000 cumulative GitHub Stars. **Open source is not being freeloaded off — it is being converted into call share and brand.**

4. **Industrial re-skilling of organizational capability**
   The 9/7 150-person hiring is essentially **b补 infrastructure for scale**. When "data volume, machine/container count, training and evaluation tasks, Agent environments, users, and requests" all grow exponentially at once, the ability to bear scale is itself a moat — exactly where many "technically strong but engineering-weak" lab-type companies stumble.

### Eroded / pressured factors

1. **The C-end entry is being lost (the clearest crack)**
   DeepSeek App MAU fell from **129.8 million** in June 2026 to **94.17 million** in July, -21.1% YoY, dropping to **third** among domestic AI-native apps (behind ByteDance Doubao 382 million, Alibaba Qwen 167 million). **The substance of the entry battle is a traffic battle** — ByteDance can route Douyin traffic to Doubao; DeepSeek has no proprietary traffic pool. This contrasts sharply with the "open source for share" B-end strategy: **the stronger the B-end, the weaker the C-end.**

2. **Open source is a double-edged sword: pricing power is not in its own hands**
   Open weights bought call share and brand, but also means anyone can deploy and anyone can bid. The 8/17 large hikes followed by 9/9's 60% cut — this "raise then cut" flip-flop is itself a market signal of "**wanting to collect money but unable to**".

3. **Geopolitical ceiling (outside period, 9/8)**
   The US CISA/NSA/FBI joint advisory named DeepSeek and other Chinese AI companies for "industrial-scale knowledge distillation"; the FY2026 National Defense Authorization Act bars it from US defense and intelligence systems. The overseas enterprise-market ceiling is drawn by geopolitical lines (this is a 9/8 item, immediately outside the period, listed as trend reference).

4. **Hidden risk in the technology route**
   V4's parameter scale reaches 1.6 trillion using "FP4+FP8" mixed precision rather than industry FP32, trading precision for cost; in the same period its Coding capability faces strong challenge from Moonshot AI and Zhipu (outside-period data).

---

## 6. Stock Market Value and Valuation Research

### Important premise: DeepSeek is an **unlisted company**

DeepSeek **has no stock and no secondary-market market value**. This section discusses its **primary-market valuation and implied market value**, with comparable-company benchmarks. Note: **there was no financing close or substantive IPO announcement within the period**; the following valuations are all "in-progress rumor-level figures", never officially confirmed by the company.

### Valuation coordinates (as of this period)

| Time | Event | Figure |
|------|-------|--------|
| 2026-06-16 | **First-round financing close** | Raised ~**RMB 50–51 billion** (~USD 7.4 billion), post-money valuation over **RMB 350 billion** (~USD 50–52 billion). Liang Wenfeng personally ~RMB 20 billion (largest single contributor) |
| 2026-08-26/27 | **Second round near-complete (rumor)** | Planned ~**RMB 50 billion** (~USD 7.4 billion), **pre-money ~RMB 500 billion (~USD 74 billion)**. New industry parties include Shixi Capital, SMIC Juyuan, Boyu Capital, CPE Yuanfeng, Hefei state-owned fund; existing shareholders Tencent, CATL, IDG, Monolith, Shixiang, Zhenxin Valley follow on |
| 2026-09-03 | **Third-party estimate (within period)** | Swiss Securities' "DeepSeek AMC" factsheet gives an indicative market valuation of ~**USD 51 billion**, **-2.5%** vs. the prior round's implied (~USD 52 billion) |
| 2026-09-04 | **Allocations in demand (within period)** | Caijing: RMB 100 million entry requires an **RMB 18 million upfront fee (18%)** first, plus **35% backend carry**, **five-year lock-up, no voting rights**. For comparison, a typical fund manager's annual management fee is ~2% of AUM |
| 2026-09-07 | **Comparable company (within period)** | Moonshot AI completed share restructuring; latest round **post-money USD 35 billion**; Pre-IPO valuation seen up to **USD 50 billion** |

> **Implied market-value basis**: at second-round pre-money ~RMB 500 billion (~USD 74 billion), DeepSeek's implied value has entered the **global AI first tier** (second only to OpenAI and Anthropic). From first-round post-money RMB 350 billion to second-round pre-money RMB 500 billion, **the valuation rose another ~43% in three months**.

### Fundamentals (disclosed within the period)

| Metric | Value | Basis |
|--------|-------|-------|
| 2026 Jan–Jul revenue | ~**RMB 475 million** | ~**10x** full-year 2025 |
| Overall gross margin | **44.6%** | media citing The Information |
| **API business gross margin** | **82.9%** | same, among the highest tier of global frontier labs |
| 2026 Jan–Jul compute investment | ~**RMB 11 billion** | full-year 2025 ~RMB 1.2 billion |
| Net loss (Jan–Jul) | ~**RMB 715 million** | loss ratio notably narrowed relative to revenue |
| ARR | ~**USD 500 million** | within-period basis (outside 9/24 revised up to ~USD 1 billion) |

### Valuation judgment: **on the high side, but "cheap" relative to domestic comparables**

**Horizontal comparison (the most valuable discovery of this week's valuation research):**

| Company | Valuation/MV | Revenue basis | Multiple |
|---------|--------------|---------------|----------|
| **DeepSeek** | ~USD 74 billion (second-round pre-money) | ARR ~USD 500 million | **~148x** |
| Zhipu (02513.HK, 9/10) | ~HK$381.35 billion | H1 revenue RMB 954 million | PS ~**831x**; MV/ARR ~**354x** |
| MiniMax (9/10) | ~HK$101.98 billion | H1 revenue USD 117 million | PS ~**430x**; MV/ARR ~**113x** |
| OpenAI | ~USD 1.4 trillion | annualized ~USD 70 billion | ~**20x** |
| Anthropic | ~USD 965 billion (May Series H) | annualized >USD 65 billion | ~**15x** |
| Moonshot AI | USD 35–50 billion | — | — |

**Three judgments:**

1. **Relative to domestic HK-listed comparables (Zhipu 354x, MiniMax 113x), DeepSeek's 148x is not expensive**, even mid-range. This explains a seemingly paradoxical phenomenon: **DeepSeek is frantically pursued in the primary market (18% upfront fee + 35% carry + 5-year lock-up + no voting rights and still can't get in), while Zhipu and MiniMax bear valuation pressure in the secondary market** — the primary market is buying a "pre-listing discount + liquidity premium".

2. **Relative to global leaders (OpenAI 20x, Anthropic 15x), DeepSeek's 148x is an order of magnitude more expensive.** The difference stems from revenue scale, not valuation logic: OpenAI's annualized revenue is USD 70 billion, DeepSeek only USD 500 million. **DeepSeek's high multiple is essentially the mathematical result of "extremely low base + extremely high growth", not a different valuation system.**

3. **The margin of safety comes from "narrowing loss ratio" rather than "cheap valuation"**: Jan–Jul revenue RMB 475 million with net loss of only RMB 715 million, while compute investment over the same period was RMB 11 billion — **the massive capex was not fully expensed**, and API gross margin is as high as 82.9%. If ARR truly doubles from USD 500 million to USD 1 billion within a few months as reported outside the period, then the "valuation digestion" speed may be faster than the market expects. But **all this rests on the assumption of "sustained growth"** — once growth slows, 148x instantly becomes an unsupportable number.

### Listing path (outside period, trend reference)

- **9/9 Reuters**: DeepSeek has hired **CITIC Securities** to prepare a **Shanghai STAR Market** IPO, planning to start the process within the year (SCMP says CITIC is one of four underwriters).
- Market rumor of a **2027 listing**, with post-listing market value possibly reaching **RMB 1.5–2.5 trillion** (rumor, unverified).
- **9/14 rumor, 9/21 arrival**: first CFO **Yan Wentao** (former GL Ventures partner) officially onboard, seen as "completing the capitalization team".
- Background: Zhipu and MiniMax already listed on HK in January 2026; Moonshot AI has secretly filed with the HKEX — **China's LLM companies are collectively marching to the capital market**.

> **Value-investor perspective**: DeepSeek is currently **not investable** (no public-market access); its primary-market valuation has already front-run a fairly long period of growth expectations, with harsh terms of five-year lock-up and no voting rights attached. The real observation window is **the STAR Market IPO pricing** — that will be the first time the public market prices it. **Before that, any "how much is DeepSeek worth" figure is only a mixture of liquidity premium and scarcity premium, not a value judgment.**

---

## 7. Business Model Change Research

**Conclusion: no directional change in the business model this week, but the two bottom supports — "cost" and "entry" — both changed importantly, in opposite directions.**

DeepSeek's business model can be summarized as a three-stage **"open source for share, API for revenue, low cost for pricing room"**: open source under MIT license to win developer ecosystem and call share → convert share into revenue via API/open platform → use an extreme cost structure (domestic chips + self-developed operators + peak/off-peak scheduling) to support price competitiveness.

### Three actions this week that reinforced this model

1. **Cost end: 160,000 Ascend chips → the model's foundation reinforced**
   The 9/4 chip order points directly at "**inference cost**". Inference cost is MaaS's marginal cost, and marginal cost determines the floor of the price war. Moving inference from NVIDIA to Ascend is equivalent to **stocking ammunition for future price cuts**. Outside the period (9/7 report), DeepSeek explicitly stated: "after the Ascend 950 super-node ships at scale in H2, Pro prices will be substantially cut" — **cost reduction is explicitly planned as a price weapon**.

2. **Entry end: WeChat Pay AI-dedicated card → from "selling tokens" to "selling transactions"**
   9/1 (8/31 announcement) WeChat Pay's AI-dedicated card connected to Harness and OpenClaw, enabling a closed-loop "recommend → order → pay" flow in conversation, with paid access to 700+ Pay Skills. This is an advanced form of MaaS commercialization — **from selling model calls to selling end-to-end task results**. Once the payment loop works, the Agent business model upgrades from "per-token billing" to "per-GMV/task billing", with a totally different ceiling.

3. **Pricing end: market validation of the peak/off-peak mechanism**
   The 8/17 peak/off-peak pricing (peak = weekdays 9:00–12:00, 14:00–18:00, everything else half price), 8/23 weekends all day at off-peak, 9/9 another 60% cut — this "use price to schedule compute demand" mechanism essentially productizes **compute-utilization management**. The 9/3 media framing "**the Token price war is over, pricing begins to reflect model capability**" corroborates this logic from the industry side.

### Model risks exposed this week

1. **C-end entry shrinking**: App MAU fell from June's 129.8 million to July's 94.17 million (-21.1%). MaaS's B-end revenue needs C-end brand and data feedback; a lost entry is a long-term concern.
2. **Heavy capex highly dependent on financing**: Jan–Jul compute investment RMB 11 billion vs. revenue RMB 475 million — **investment is 23x revenue**. 160,000 chips (nominal ~USD 2.56 billion) mean an even larger capex commitment. This determines that DeepSeek **must keep financing and must list** — the "we don't lack money" narrative is being replaced by the "we must have money" reality.
3. **Structural tension between open source and monetization**: open weights move pricing power outward — the August–September price flip-flops are the clear evidence.

---

## 8. Industry Competitive Landscape

### This period's most distinctive feature: **intensive international releases, collective "silence" from domestic vendors**

Within the period (9/1–9/7) a rare time dislocation occurred — **four overseas companies released flagships within four consecutive days, while domestic leading vendors were almost collectively silent**:

| Date | Player | Action |
|------|--------|--------|
| 9/1 | **Anthropic** | Released Claude Fable 5.1 and Mythos 5.1 (same base; Mythos is a lightly-guarded version for approved users); cache-read price cut 75% to $0.25/million tokens |
| 9/1 | **Alibaba Cloud** | Lowered Qwen3-VL-Rerank billing (text 0.7→0.5 RMB, multimodal 1.8→0.5 RMB/million tokens), second price change in a week |
| 9/2 | **Google** | Gemini 3.8 Flash (1M context, $0.75/$3.75) + Gemini 3.8 Flash Cyber (for trusted defenders only) |
| 9/2 | **Meta** | Flagship Muse Spark 1.3, ~20% fewer tool calls, ~25% fewer tokens, $1.25/$4.25 |
| 9/2 | **Alibaba** | Released qwen3.8-max-0902 snapshot; open-sourced qwen3.8-2.4t-a95b |
| 9/2 | **Moonshot AI** | Reported to have **secretly filed with the HKEX**, starting a HK IPO |
| 9/3 | **OpenAI** | Released GPT-6 Astra, the first model listed at the "Critical" cybersecurity capability level, $10/$50 |
| 9/3 | **NVIDIA** | **Announced a USD 12.93 billion acquisition of Hugging Face** (expected close H1 2027) — **the entry of the open-source ecosystem fell into a hardware giant's hands** |
| 9/7 | **iFlytek** | Spark X2.5 (MoE 293B-A30B, trained and inferred on all-domestic compute) |

> **Domestic leading vendors had a relatively blank "flagship release" window within this period**: GLM-5.3 was 8/19, GLM-5.3-Flash 8/26, Kimi K2.8 Preview 9/11, Baidu ERNIE X1.1 9/9, Doubao Seed 2.1 9/15, MiniMax M3.1-Flash-Preview 9/28 — **all outside this period**. Domestic-side events within the period were mostly **price cuts, platform migration, filings, and judicial-document** type.

### DeepSeek's competitive position (within-period data)

**Call volume (OpenRouter, 8/31–9/6, published 9/7)**: global weekly total **115 trillion tokens**; China **56.72 trillion** (+2.83%), **surpassing the US for the 19th consecutive week** (US 16.54 trillion, -3.1%). Top five weekly call volumes:

| Rank | Model | Weekly call volume |
|------|-------|--------------------|
| 1 | Tencent Hunyuan Hy4 preview | 14.7 trillion (+379%) |
| 2 | GPT-5.6 Luna | 12.9 trillion |
| 3 | Zhipu GLM-5.3 Flash | 12.4 trillion |
| 4 | **DeepSeek-V4-Flash-0731** | **12.4 trillion** |
| 5 | DeepSeek-V4-Flash-0423 | 5.19 trillion |

**DeepSeek's two versions combined ~17.6 trillion, still first-tier among single vendors**, but the top spot is being pressured by Tencent Hunyuan (+379%) and GPT-5.6 Luna. (Outside the period, in the week of 9/14, OpenAI overtook DeepSeek with 23.6% text-request share vs. 22.6%, ending DeepSeek's five-week streak at the top.)

### DeepSeek's competitive advantages

1. **Cost structure (the hardest)**: domestic chips + self-developed operator libraries + peak/off-peak scheduling + 82.9% API gross margin — among the most cost-efficient of global frontier labs. Stanford's 2026 AI Index shows the performance gap between Chinese and US leading models is only 2.7% — **performance gap is tiny, cost gap is huge**; this is DeepSeek's sharpest weapon.
2. **Leadership in the open-source ecosystem**: OpenRouter share doubled in half a year (9%→18%); Harness over 190,000 GitHub Stars; CICC judges open-source model share will reach 50%–70% of global token volume by 2027, and DeepSeek is the biggest beneficiary of this trend.
3. **Organizational efficiency**: ~300 people making first-tier global models, per-capita output far exceeding peers.
4. **Forerunner in compute autonomy**: 160,000 Ascend 950DT + gigawatt data center + open-sourced full Ascend component set, holding the lead on the certain "domestic substitution" main line.

### DeepSeek's competitive disadvantages

1. **C-end entry lost**: MAU down to domestic third (behind Doubao, Qwen), and there is no proprietary traffic pool.
2. **Pricing power constrained by open source**: open weights → pricing power moves outward → August–September price flip-flops.
3. **Geopolitical ceiling**: US policy limits its entry into Western government and enterprise markets.
4. **Commercialization short board**: insufficient ToB large-customer delivery experience; organizational scale clearly behind giants.
5. **Talent outflow**: core R&D members flowing to ByteDance, Tencent, Xiaomi, etc.

---

## 9. Weekly Digest Summary (Value-Investing Perspective)

**One sentence**: this is DeepSeek's "**quiet build-up week**" — zero product releases, zero founder statements, but the two pieces of news — "160,000 Huawei Ascend" and "150 engineering positions" — correspond respectively to the **compute autonomy** and **organizational industrialization** lifelines of the company over the next two years, and are the prelude to the mid-September V4.1-Flash release and the STAR Market IPO sprint.

**The bulls would say**: the 160,000 Ascend order exposed this week is the strongest signal of moat reinforcement — DeepSeek is taking the "inference cost" lifeline of MaaS back from NVIDIA, and with the 82.9% API gross margin and the doubling open-source share, its "low cost + open source for share" flywheel is self-reinforcing; relative to Zhipu (354x ARR) and MiniMax (113x ARR), 148x is even relatively attractive; the STAR Market listing will open a public-market access.

**The bears would say**: C-end MAU dropped 21% in a quarter to domestic third, the entry is being lost; open source means pricing power isn't in its own hands, and the August raise/September cut flip-flops are evidence of "wanting to collect money but unable to"; Jan–Jul compute investment RMB 11 billion vs. revenue RMB 475 million, 23x revenue, and 160,000 chips mean an even larger capex commitment — **"not lacking money" is becoming "must have money"**; 148x ARR is an order of magnitude more expensive than OpenAI (20x) and Anthropic (15x), and the margin of safety comes from the single assumption of "growth must continue".

**The value investor's actual situation**: DeepSeek is **currently not investable** — an unlisted company, with primary-market terms of 18% upfront fee, 35% carry, five-year lock-up, and no voting rights attached, essentially "buying an unpriced asset at extremely high cost". What is truly worth waiting for is **the STAR Market IPO pricing** — that will be the public market's first pricing of it.

**Key tracking signals** (for reuse in subsequent digests):
1. **Call volume and share after the V4.1-Flash release** (whether it retakes the OpenRouter top spot);
2. **The actual delivery progress of the 160,000 Ascend chips** and the timing of Pro price-cut realization;
3. **Second-round financing close** (whether pre-money RMB 500 billion holds) and STAR Market IPO tutoring filing, underwriter announcement;
4. **The capitalization rhythm after CFO Yan Wentao's arrival**;
5. **Whether App MAU stops declining** (the C-end entry is the largest structural crack);
6. **Ascend 950DT capacity** (Huawei's 2026 production is expected to be only several hundred thousand units, delivery may take over a year — the largest constraint on the order landing).

---

## 10. Information Sources

**This week's events (within 2026-09-01 to 2026-09-07)**

- [Sina Finance / Bloomberg Businessweek: DeepSeek plans to deploy at least 160,000 Huawei AI chips to power a new data center (2026-09-04)](https://finance.sina.com.cn/roll/2026-09-04/doc-iniqskus1199708.shtml)
- [The Edge Singapore (reprinting Bloomberg): DeepSeek plans big Huawei AI chip order to power new data centre (2026-09-04)](https://www.theedgesingapore.com/news/tech/deepseek-plans-big-huawei-ai-chip-order-power-new-data-centre--bloomberg)
- [EET-China: Huawei AI chips land a massive order! (2026-09-07)](https://www.eet-china.com/mp/a523055.html)
- [TechNode: DeepSeek reportedly plans 160,000-chip Huawei cluster in Inner Mongolia (2026-09-07)](https://technode.com/2026/09/07/deepseek-huawei-ascend-950dt-chips-inner-mongolia/)
- [Tencent News: 160,000 Ascend 950DT placed: domestic AI compute clusters enter the "gigawatt era" (2026-09-06)](https://news.qq.com/rain/a/20260906A0612L00)
- [10jqka / Sina Finance: Caijing — How sought-after are DeepSeek investment allocations? RMB 100 million entry first collects RMB 18 million upfront fee, five-year lock-up, no voting rights (2026-09-04)](http://news.10jqka.com.cn/20260904/c679597002.shtml)
- [South+/Yicai: DeepSeek again hiring at scale (2026-09-08; event occurred evening of 09-07)](https://www.nfnews.com/content/834p1EaD3d.html)
- [Sina Finance: DeepSeek's largest-ever hiring, expanding by 150 engineers (2026-09-08)](https://finance.sina.com.cn/jjxw/2026-09-08/doc-inirehkh5804791.shtml)
- [Zhidx: DeepSeek urgently hiring 150 people, Agent proficiency a hard requirement](https://m.zhidx.com/p/591756.html)
- [Yicai Global: Chinese AI unicorn DeepSeek is on the hunt for 150 engineers (2026-09-08)](https://www.yicaiglobal.com/news/chinese-ai-unicorn-deepseek-is-on-the-hunt-for-150-engineers-in-fresh-hiring-drive)
- [TechNode: WeChat Pay expands AI AgentPay Card to DeepSeek Harness and OpenClaw (2026-09-01)](https://technode.com/2026/09/01/wechat-pay-ai-agentpay-card-deepseek-openclaw/)
- [DeepSeek official status page: DeepSeek Web/API partially unavailable (2026-09-02)](https://status.deepseek.com/incidents/6927183076287)
- [Jiemian News: Why does the upgraded DeepSeek always like to "deliberate"? (2026-09-01, incl. first/second-round financing and first-7-month operating data)](https://www.jiemian.com/article/15038971.html)
- [Sina Finance / Opinion Real Estate: DeepSeek ends the Token price war, V4-Flash pricing below 1% of GPT-4 (2026-09-03)](https://finance.sina.com.cn/stock/estate/integration/2026-09-03/doc-iniqpqxu4265144.shtml)
- [CITIC Securities research (2026-09-01): continue to be bullish on the domestic-AI-industry-chain opportunity led by DeepSeek](http://finance.sina.cn/7x24/2026-09-01/detail-iniqhmwh1558284.d.html)
- [Swiss Securities PCC Ltd.: DeepSeek AMC factsheet (indicative valuation ~USD 51 billion as of 2026-09-03)](https://swiss-securities.com/factsheet/deepseek)
- [Cqcb / NBD: China's AI LLM call volume leads for 19 consecutive weeks (2026-09-07, OpenRouter 8/31–9/6 data)](https://www.cqcb.com/news/56/2026-09-07/6214835.html)

**Industry competition (within period)**

- [36Kr: AI giants begin "rolling" again, Google and Meta both act (2026-09-02)](https://m.36kr.com/p/3967349130796296)
- [STCN: Over USD 12.9 billion! NVIDIA again makes a move to acquire Hugging Face (2026-09-03)](https://stcn.com/article/detail/4171675.html)
- [NVIDIA official blog: NVIDIA to acquire Hugging Face](https://blogs.nvidia.cn/blog/nvidia-to-acquire-hugging-face/)
- [Gelonghui: Moonshot AI reported to have secretly filed with the HKEX (2026-09-03)](https://www.gelonghui.com/news/5305150)
- [CNR: iFlytek Spark X2.5 officially released (2026-09-07)](http://www.cnr.cn/ah/kjjr/20260907/t20260907_527806967.shtml)
- [Guangzhou Daily: Alibaba Cloud adjusts LLM pricing twice in a week (2026-09-01)](http://news.dayoo.com/finance/202609/01/171077_54998668.htm)
- [Guoyuan Securities: AI industry biweekly report (Sep 2026 issue 1)](https://pdf.dfcfw.com/pdf/H3_AP202609201829665945_1.pdf)
- [Stockstar: A million-card gap, orders booked three years out! Domestic compute in a "chip scramble" (2026-09-01)](http://finance.stockstar.com/IG2026090100020869.shtml)

**Corporate governance, culture and historical statements (background)**

- [GMW: After going viral, DeepSeek publicly denies rumor for the first time (Liang Wenfeng has no personal X account, 2025-02-07)](https://m.gmw.cn/toutiao/2025-02/07/content_1303964140.htm)
- [21 Jingji: Liang Wenfeng's 4-hour investor meeting remarks leaked — why doesn't DeepSeek make a "more profitable" company? (2026-07-23)](https://m.21jingji.com/article/20260723/herald/70239d184b630bd9a2c7c93d7e749201.html)
- [South+: content of Liang Wenfeng's 4-hour closed-door meeting exposed](https://www.nfnews.com/content/5385dMl26B.html)
- [China Newsweek: Another bombshell, Liang Wenfeng's restraint and its cost (2026-08-06)](http://m.toutiao.com/group/7670517534848516659/)
- [STCN: DeepSeek launches large-scale hiring, plans to at least double the size of every department (2026-06)](https://www.stcn.com/article/detail/3981317.html)
- [China News: A million-yuan annual salary upon graduation, the big factories' talent war (2026-07-09, core talent-flow background)](http://www.chinanews.com.cn/sh/2026/07-09/10655823.shtml)

**Product and pricing (incl. outside-period comparison)**

- [DeepSeek official: Introducing DeepSeek-V4.1-Flash (2026-09-10, outside period)](https://www.deepseek.com/en/news/deepseek-v4-1-flash/)
- [DeepSeek API Docs: Changelog](https://api-docs.deepseek.com/zh-cn/updates/)
- [DeepSeek API Docs: Models & Pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)
- [36Kr: DeepSeek V4.1 Flash, first giving the market 48 hours (2026-09-09, outside period)](https://m.36kr.com/p/3975987596449411)
- [CLS: DeepSeek dual-track, V4.1 Flash releasing tomorrow, STAR Market IPO preparation in parallel (2026-09-09, outside period)](https://www.cls.cn/detail/2478606)
- [Wallstreetcn: DeepSeek announces API price hikes, from Aug 17 peak prices up to RMB 27 (2026-08-13, outside period)](https://wallstreetcn.com/articles/3779377)
- [South Metropolis Daily: DeepSeek raising prices next week! V4 Pro peak hike up to 11x (2026-08-13, outside period)](https://www.nfnews.com/content/WyjqGEwko0.html)
- [arXiv: DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale (submitted 2026-09-19, outside period)](https://arxiv.org/html/2609.22978v1)

**Valuation, financing and IPO (incl. outside-period comparison)**

- [Sina Finance: DeepSeek completes first-round financing, multiple A-share companies indirectly hold stakes (2026-06-16, outside period)](https://finance.sina.com.cn/jjxw/2026-06-16/doc-inicrcpn6177112.shtml)
- [Sina Finance: DeepSeek preparing second round, valuation hitting USD 74 billion (2026-08-27, outside period)](https://finance.sina.com.cn/roll/2026-08-27/doc-inipvfec4883293.shtml)
- [Sina Finance: DeepSeek reportedly planning STAR Market listing, hiring CITIC Securities to prepare IPO (2026-09-09, outside period)](https://finance.sina.com.cn/tech/digi/2026-09-09/doc-inirfivw8575652.shtml)
- [Eastmoney: DeepSeek reportedly planning STAR Market listing, hiring CITIC Securities (2026-09-09, outside period)](https://finance.eastmoney.com/a/202609093869264162.html)
- [Wallstreetcn: DeepSeek's new CFO Yan Wentao about to arrive (2026-09-14, outside period)](https://wallstreetcn.com/articles/3782284)
- [Sina Finance: Exec puzzle completed! Yan Wentao officially joins DeepSeek as CFO (2026-09-23, outside period)](https://finance.sina.com.cn/roll/2026-09-23/doc-inisusym1363879.shtml)
- [Gelonghui: DeepSeek sprinting to STAR Market — from "not lacking money" to a trillion-yuan unicorn](https://www.gelonghui.com/news/5308729)
- [Jiemian News: After the interim reports, are Zhipu's and MiniMax's share prices justified? (2026-09-03, within-period comparables)](https://www.jiemian.com/article/15046549.html)
- [Sina Finance: Moonshot AI completes share restructuring, Kimi's latest round post-money valuation USD 35 billion (2026-09-07, within-period comparable)](https://finance.sina.com.cn/stock/estate/integration/2026-09-07/doc-iniqykzy9601319.shtml)
- [Sina Finance: DeepSeek's first-7-month revenue RMB 475 million, 9x full-2025 (2026-08-26, outside period)](https://finance.sina.com.cn/roll/2026-08-26/doc-iniprums2424521.shtml)

> **Information-gap and basis notes:**
> ① **Within this period DeepSeek had no official model, product, API, or paper release, and founder Liang Wenfeng made zero public statements** — this is the most important conclusion of this digest, and all product/statement-related content is explicitly marked "outside period".
> ② The 160,000 Huawei Ascend chip order comes from Bloomberg anonymous sources, **not publicly confirmed by DeepSeek or Huawei**; the order amount has multiple versions (USD 2.56 billion, RMB 18 billion, RMB 40 billion); this digest uses Bloomberg's basis and marks it unverified.
> ③ The second-round "pre-money RMB 500 billion / raise ~RMB 50 billion" remains **rumor-level within the period, not closed**, and the company has not responded; Swiss Securities' USD 51 billion is a third-party indicative estimate, not the company's own basis.
> ④ ARR data has two bases — USD 500 million (within period) and USD 1 billion (outside 9/24, The Information); this digest computes valuation multiples on the within-period basis and notes the difference.
> ⑤ Some dates have source divergence: the Huawei chip order is 9/4 per Bloomberg but 9/7 per some Chinese media; GPT-6 Astra is 9/3 per most sources but 9/4 per a few; Gemini 3.8 Flash is 9/2 per most but 9/1 per a few. This digest adopts the majority-source dates.
> ⑥ This report does not constitute investment advice.