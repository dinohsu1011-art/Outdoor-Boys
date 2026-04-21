# Outdoor Boys — Project Architecture

**Version:** v1
**Last updated:** 2026-04-21
**Owner:** Dino

This doc defines where things live and how the four of us collaborate. The goal is simple: anyone should be able to find any document in under 30 seconds, and know what their top 3 tasks are at all times.

---

## Stack at a glance

| Purpose | Tool | Why |
|---|---|---|
| Documents, research, media | **Google Drive (Shared Drive)** | Everyone already uses it, free, mobile-friendly, handles photos/video |
| Task tracking, budget, decisions | **Google Sheets** (one master file) | Zero learning curve, Apple and Luke can use without training |
| Day-to-day comms | **LINE** (existing group) | Already in place |
| Weekly sync | **Google Meet**, 30 min, Sundays | Free, in-browser, records if needed |
| Code / website / version-controlled docs | **GitHub — dinohsu1011-art/Outdoor-Boys** (public) | Dino owns; most founders don't touch it |
| Plan-of-record docs | **Markdown in `/docs` of the repo**, mirrored to Drive | Version history matters for regulatory and scope docs |

**Rule:** one source of truth per artifact. If it's in Drive, it's not also in LINE. Link to the Drive doc.

---

## Google Drive — Shared Drive structure

Create a **Shared Drive** (not a regular folder) titled `Outdoor Boys`. Shared Drives survive if a founder leaves; personal-folder sharing does not.

```
Outdoor Boys/
├── 00_Admin/
│   ├── Founders Agreement/
│   ├── Company Registration/
│   └── Banking & Accounting/
├── 01_Regulatory/
│   ├── Water Activity Regs (水域遊憩活動管理辦法)/
│   ├── Guide Certifications/
│   ├── Travel Agency License/
│   └── Insurance/
├── 02_Scope_Roadmap/
├── 03_Market_Research/
│   ├── Competitors/
│   ├── Customer Personas/
│   └── Pricing Research/
├── 04_Operations/
│   ├── Routes/
│   ├── Gear Lists/
│   └── Safety SOPs/
├── 05_Marketing_Brand/
│   ├── Naming & Logo/
│   ├── Photos_Video/
│   ├── Website Copy/
│   └── Social Content/
├── 06_Finance/
│   ├── Budget/
│   ├── Pricing Models/
│   └── Receipts/
├── 07_Customers/               # activate in Q3 once we start booking
│   ├── Waivers/
│   └── Booking Records/
└── 08_Meetings/
    ├── Weekly Sync Notes/
    └── External Meetings/       # lawyer, accountant, vendors
```

**Naming convention for files inside folders:**
- `YYYY-MM-DD Topic — owner initials` (e.g. `2026-04-21 Regulatory Research v1 — DH`)
- Version at the end only if the doc is iterated: `v1`, `v2`, `v3`. Never `final`, `FINAL_FINAL`, `real_final`.

**Access:** all four of us are Content Managers on the Shared Drive. No one is a Manager except Dino (to prevent accidental member removal).

---

## Master Tracker (Google Sheets)

One spreadsheet: **`Outdoor Boys — Tracker`**, lives at the root of the Shared Drive. Tabs:

### Tab 1 — `Tasks`
Columns:
- **Task** — short verb phrase ("Research 溯溪 guide cert costs")
- **Owner** — Dino / Duncan / Luke / Apple
- **Workstream** — Regulatory / Ops / Marketing / Finance / Admin
- **Status** — Not started / In progress / Blocked / Done
- **Priority** — P0 (blocker) / P1 / P2
- **Due** — date
- **Created** — date
- **Notes / link** — link to Drive doc if relevant

Filter views per person so each founder can open their own task list in one click.

### Tab 2 — `Weekly Sync`
One row per week. Columns: Week of | Attendees | Wins | Blockers | Decisions | Next actions. Fed from the Sunday meeting.

### Tab 3 — `Budget`
- Top section: NT$100k allocation (see Scope & Roadmap doc for the split).
- Below: ongoing spend log — Date | Category | Vendor | Amount | Paid by | Reimbursed? | Receipt link.

### Tab 4 — `Decisions Log`
Date | Decision | Context | Owner | Reversible? | Link. Avoids re-litigating settled questions.

### Tab 5 — `Research Log`
A library of every useful source anyone finds. Date | Topic | Source (URL) | Key takeaway | Found by.

---

## Comms protocol (LINE)

Keep the existing group. Add these conventions:

1. **Decisions** — anything agreed in LINE gets copied to the Decisions Log tab. No decisions disappear into scrollback.
2. **Tasks** — if a task is assigned in LINE, the owner adds it to the Tasks tab the same day. Otherwise it didn't happen.
3. **Long threads** — anything longer than ~10 messages becomes a Doc. Link the doc in LINE, continue the discussion there.
4. **Quiet hours** — no expectation of responses 11pm–8am TW time (accounting for Duncan on PT time: typical overlap is TW 9am–12pm = PT 6pm–9pm previous day).

---

## Weekly sync

- **When:** Sundays, 30 min, 9pm TW / 6am PT (Duncan early morning — rotate if needed).
- **Agenda (fixed):**
  1. Wins since last week (5 min)
  2. Blockers + help needed (10 min)
  3. Decisions to make this week (10 min)
  4. Next actions — confirm Tasks tab is up to date (5 min)
- **Note-taker** rotates weekly. Notes go to Tab 2 + `08_Meetings/Weekly Sync Notes/`.

---

## GitHub repo — what goes there

The `Outdoor-Boys` repo is for things that benefit from version control:
- **`/docs`** — plan-of-record docs (this file, regulatory research, scope & roadmap, competitive scan). These are also mirrored to Drive for easy viewing, but the repo copy is canonical.
- **Future: `/web`** — marketing site + booking flow, once we scope it in Q3.
- **`README.md`** — one-paragraph company description + link to the Drive.

Luke, Apple, Duncan do not need to use GitHub. Dino pushes updates; the team reads on Drive.

---

## Onboarding checklist (for each founder, Day 1)

- [ ] Added to Shared Drive as Content Manager
- [ ] Bookmark the Tracker spreadsheet
- [ ] Added to LINE group (already done)
- [ ] Read this doc + the Scope & Roadmap doc
- [ ] Own at least 1 task in the Tasks tab
- [ ] Confirm Sunday sync time works

---

## Changelog

- **v1 (2026-04-21)** — initial architecture. Google Drive + Sheets + LINE + GitHub repo for code/docs.
