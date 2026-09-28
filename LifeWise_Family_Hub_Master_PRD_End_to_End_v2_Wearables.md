# **LIFEWISE** 

## **Family Hub  Existing UI Upgrade + New Feature PRD** 

##### **Developer + AI Builder Master Specification** 

End-to-end UI, UX, navigation, business logic, data, sync, permissions, states and acceptance criteria 

|**Document**|**Value**|
|---|---|
|Product|LifeWise  Family Operating System|
|Primary surface|Family Hub (per-member modules + a few family-wide tools)|
|Base UI|Existing Family Hub / member-card UI|
|Shipped member modules (Add Member picker)|Medicines, Stock, Appointments, Health, Emergency (SOS), Diet, Fitness, Wellness, Bills, Subscriptions, Family Money, Insurance & Documents, Digital Keys, Routine, Tasks, Check-in, **Work & Shifts**, Travel & Visits, Study, Custom, Vehicles, Home Maintenance, Family Location (**22 module keys** in `FAMILY_FEATURES`)|
|Family-wide from a member module (not Hub cards)|Insurance coverage glance · Family Trips / travel readiness|
|Family-wide on Hub|Family Money (combined khata). Auto-add payments lives **inside** Family Money only  no extra Hub card.|
|Platforms|iOS + Android (Expo). Web companion exists; store payments are native-only (RevenueCat).|
|Architecture baseline|React Native Expo + Node.js + MongoDB + FCM / local pushes. Store compiles: Codemagic local EAS. Admin: Amplify. API: Lightsail.|
|Payments|RevenueCat only. Plans: `free` / `starter` / `family` / `pro`. No free trial (removed). Entitlement IDs must match PlanId lowercase.|
|Package|`com.lifewise`|
|Document status|Living spec  updated **24 September 2026** (full code audit: 22 shipped features added §39–§52)|
|Supersedes|v2 Wearables draft that listed only Ledger + Location as “new”|

---

### **0. Change log (this revision)**

|Date|What landed in the product (must stay in this PRD)|
|---|---|
|2026-09-21|**Work & Shifts** (`work`) added to Add Member **Daily** group. Manual clock + away prompt (Break / Working outside / Shift over / Snooze once) + Test preset (radius 100 m, dwell 1, grace 3, prompt 10) + CSV share + Home Quick Reach “Work Hours”. OS background geofence auto clock is **Phase next**  do not claim full auto fence until shipped. See **§37**.|
|2026-09-21|**Family Money  Auto Payment Capture** (§38). Inside Family Money only (no new Hub card). Engine + Needs your OK + settings + **Android GPay/PhonePe/Paytm/BHIM NotificationListener** (`lifewise-payment-capture`) + clipboard/paste. UPI identity map for Papa↔Aarav transfers. **No SMS.** Default Needs OK until D1.|
|2026-09-21|Health: faster Apple Health / Health Connect sync, hourly history merge, gender/age normal-range alerts into Family Hub notifications.|
|2026-09-21|Admin Deploy status board; TestFlight/Play crash gate fail-open; AAB Gradle module fix.|
|2026-09-18|Member dashboard module cards: **+ only when the module is empty**. If the member already has records, the trailing control is a **> chevron** (tap the card to open the list). Plus is ~2–3px smaller (32×32). **Alert/orange styling is only for real alerts** (unpaid bills, pending tasks, unacknowledged emergency, low stock)  not merely because data exists.|
|2026-09-18|Page loaders: full-page spinners are **centered** with **“Loading {page}…”** in primary/accent (`PageLoading` / `LoadingIndicator` large). Compact in-button loaders stay icon-only.|
|2026-09-18|Caregiver invites: client still gates `caregiversPerMember` (pending invites count as a slot). **Server invite now enforces the same limit.** Empty/pending caregiver placeholder icons use **primary/accent**, not gray. Incoming invite list empty icon matches.|
|2026-09-18|Home ring and Reports total-spending score use **one formula** (`lib/life-score.ts`): official backend `lifeScore` when present, else month-to-date budget remaining 50% + bills paid 30% + leaks 20%. Integer 0–100. Reports no longer mixes the date filter or medicines into this number.|
|2026-09-18|Record view sheets (documents, travel, vehicles, and any sheet with ≥3 actions or a hero): actions are **full-width stacked rows**, same language as the subscription detail  no leftover wrapping chips in empty space.|
|2026-09-17|Insurance coverage + Family Trips **removed from Family Hub**. They open from the **Insurance & Documents** and **Travel & Visits** modules (same picker as Add Member).|
|2026-09-17|Family Location: live **battery %** (icon matches level / charging), low-battery **push** (warning ≤25%, low ≤15%, critical ≤10%), map **car / bike / walk** pin that **glides at reported speed** with heading. Hub list shows battery chip.|
|2026-09-12|Free Family trial removed. Free-plan limits apply from first launch.|
|Ongoing|Full Add Member catalog (**22 module keys** including Work & Shifts) is built. Wearables still go through Apple Health / Health Connect first (section 28).|
|2026-09-24|**Code-audit PRD sync.** 22 shipped features that had no PRD section are now documented: WiseAI (§39), Voice Reminder (§40), Smart Capture (§41), Auto-Fetch & Passive Ingestion (§42), Family Notes (§43), Countdown Cards & Live Transit (§44), Safety Net Funds (§45), Bank Statement Import (§46), Calendar View (§47), App Lock (§48), Multi-Currency (§49), Trip Planner & Booking Board (§50), Referral System (§51), Life Memory (§52), Detail Assist (§53), Airline Check-in (§54), Apple Wallet Pass (§55), Family Automation Engine (§56), Food Nutrition (§57), Doc Import / DigiLocker (§58), Notification Settings & Sounds (§59), Admin Panel & Service Monitor (§60). Bottom tab names corrected. Statement import upgraded from Phase 3 to Shipped.|



### **1. Purpose & Non-Negotiable Direction** 

Do NOT rebuild LifeWise as a new application. Preserve the existing visual language and navigation. Family Hub remains the hero feature. New features must plug into the existing member-card and Manage Member Dashboard architecture. 

- Keep the current Family Hub title, member cards, rounded cards, module icons, Manage action and bottom navigation. 

- Redesign only where required to support additional modules and deeper flows. 

- Do not create duplicate modules that solve the same job. 

- Every feature must have a complete happy path, loading state, empty state, error state, permission state and offline behavior. 

- Every family-level action must respect member permissions and caregiver relationships. 

- All new data must sync to the backend and, where family sharing is enabled, update authorized clients in real time. 

- The UI must stay simple even when the backend logic is deep. 

### **2. Source Baseline: What Already Exists** 

The supplied LifeWise PRD defines LifeWise as a family operating system where health, finances, reminders, documents and routines are managed from one place. Family Hub is explicitly the hero feature, and every module is attached to a family member. 

- Existing Family Hub: scrollable member cards, settings, add-member FAB, dynamic module icons and Manage action. 

- Existing member dashboard: Overview, Reminders, Health, Documents, Modules and Settings. 

- Existing Medicine module: medicine name, dosage, timing, frequency, start/end date, reminder, snooze and notes. 

- Existing Health Monitoring: BP, sugar, weight and additional vitals. 

- Existing Bill Management: utility/recurring bills, due dates, amount, payment method and reminders. 

- Existing Daily Routine: timed routines, recurrence, reminder toggle and completion tracking. 

- Existing Expense Tracking: categories, budget limits, quick add, date, payment mode, recurring expense, spending limits, reports and receipt photo. 

- Existing Reminders engine: centralized reminders, FCM notifications, caregiver notifications, mark done, snooze, missed state and real-time sync. 

- Existing Insights: spending overview, bills tracker, health summary, family activity, monthly reports and money-leak detection. 

LifeWise Family Hub  Implementation PRD 

- Existing architecture: React Native Expo, Redux Toolkit/RTK Query, React Navigation, Node/Express, MongoDB/Mongoose, Firebase Auth/FCM, Socket.io, S3 and OCR. 

Source: supplied LifeWise PRD. Key references: Family Hub and module selection; member card and dashboard; expense tracking; bills; reminders; insights; architecture. 

### **3. Existing vs New vs Redesigned**

|**Area**|**Status (shipped app)**|**Action / rule**|
|---|---|---|
|Family Hub list|Shipped|Member cards + **one** family-wide card: Family Money. Do **not** put Insurance coverage or Family Trips on the Hub.|
|Add Member / Edit modules|Shipped|Grouped: Care, Money, Daily, Home. Minimum one module. Plan limit `modulesPerMember`.|
|Medicines + Stock|Shipped|Keep; stock drives refill alerts.|
|Appointments|Shipped|Doctor visits & follow-ups.|
|Health Monitoring + wearables|Shipped + upgrade path|Manual vitals + Apple Health / Health Connect (section 28).|
|Emergency Hub (SOS)|Shipped|SOS circle, Medical ID, crash auto-SOS from Location, insurance Quick Card on emergency screen.|
|Bill Management|Shipped|Stays separate from Family Money.|
|Daily Routine / Tasks / Check-in|Shipped|Feed central reminders.|
|Subscriptions|Shipped|OTT / renewals per member.|
|Family Money (Ledger)|Shipped|User-facing name is **Family Money**, not Khatabook. Hub card + per-member ledger.|
|Insurance & Documents|Shipped|Vault + **Insurance Quick Card** + **family coverage glance** (own policy vs floater vs gap). Coverage is **inside this module**, not on Hub.|
|Digital Keys|Shipped|Wifi, gate codes, household secrets.|
|Travel & Visits|Shipped|Per-member visits **and** **Family Trips** readiness (passport, visa, insurance, meds). Trips live **inside this module**, not on Hub.|
|Diet / Fitness / Wellness / Study / Custom|Shipped|Per-member trackers.|
|Vehicles / Home Maintenance|Shipped|RC, insurance, PUC; AMC / appliance reminders.|
|Family Location|Shipped + 2026-09 upgrade|Consent map, safe places, geofence reminders, history, ETA, crash, SOS, **battery monitor**, **speed-matched vehicle pin**.|
|Work & Shifts|Shipped (MVP) + Phase next|Add Member **Daily**. Manual clock, away prompt, Test preset, CSV, Home Work Hours. Background OS geofence auto clock = Phase next (§37).|
|Family Money Auto-add|Shipped (engine + Android notif)|**Inside** Family Money only. Needs your OK + settings. Android GPay/PhonePe/Paytm/BHIM listener + paste/clipboard. No SMS. Default Needs OK until D1 (§38).|
|Caregiver invites|Shipped|Header on Hub; scoped permissions per member.|
|Insights / WiseAI / Home money|Shipped (app-wide)|Stay out of Hub overload; Hub stays member-first. WiseAI = full chat assistant (§39).|
|Store / Admin release|Ops, not Hub UI|Android closed → production, iOS TestFlight → review → live via Admin Stores + Codemagic. Not a Family Hub module.|
|Voice Reminder / Voice Expense|Shipped|Speech-to-text expense, bill, task, reminder entry (§40).|
|Smart Capture (Universal OCR)|Shipped|Camera → server OCR → prefill any add form. Module-parameterised (§41).|
|Auto-Fetch Inbox & Passive Ingest|Shipped|Gmail, clipboard, share-sheet → classify → confirm chip → commit (§42).|
|Family Notes|Shipped (standalone screen)|Collaborative per-member notes with categories, colors, pinning (§43). **Not** in Add Member module catalog  standalone screen.|
|Countdown Cards & Live Transit|Shipped|Live event timers, flight/train status, lock-screen sticky notifications (§44).|
|Safety Net Funds|Shipped (inside Family Money)|Shared savings pools: contribute, withdraw, approve. Links to Family Ledger (§45).|
|Bank Statement Import|Shipped|PDF/CSV upload → server parse → review → bulk import (§46). Previously listed as Phase 3.|
|Calendar View|Shipped|Unified week/month/quarter/year timeline across bills, reminders, family events (§47).|
|App Lock (biometric)|Shipped|Fingerprint / face gate via `expo-local-authentication`; device PIN fallback (§48).|
|Multi-Currency|Shipped (display only)|All amounts stored INR; display currency converts at render. Frankfurter exchange rates (§49).|
|Trip Planner & Booking Board|Shipped|Destination DB, visa info, booking deep links (§50).|
|Referral System|Shipped|Referral codes, points ledger, perks (extra vault/safe place/geofence slots) (§51).|
|Life Memory|Shipped|Spending insight cards from financial data (§52).|
|Detail Assist|Shipped|Contextual next-steps on record view sheets  stats, tips, actions (§53).|
|Airline Check-in links|Shipped|IATA-keyed web check-in URLs + PNR param for travel (§54).|
|Apple Wallet Pass import|Shipped (server)|.pkpass → pass.json → structured travel fields (§55).|
|Family Automation Engine|Shipped|Proactive nudges: due bills, fitness stalls, health gaps, spend jumps, weekly digest (§56).|
|Food Nutrition lookup|Shipped|Offline kcal lookup from meal notes for diet cards (§57).|
|Doc Import / DigiLocker|Shipped|Import panel for vault documents (§58).|
|Notification Settings & Sounds|Shipped|Granular notification control + custom sounds per category (§59).|
|Admin Panel (Next.js) + Service Monitor|Shipped (ops)|Deploy status, analytics, campaigns, config vault, WebAuthn, service probes (§60).|



### **4. Naming Decision** 

Replace the user-facing name “Khatabook” (and keep “Family Ledger” as the *internal* object name) with:

**Family Money**  shared khata, splits and settlements.

Keep “Bill Management” separate.

|**Module**|**Meaning**|**Example**|
|---|---|---|
|Bill Management|What needs to bepaid and when?|Electricity₹2,400 due 15 Sep.|
|FamilyLedger|Where did familymoney go and whopaid?|Dadpaid ₹2,400 electricityfor Family.|



Rule: A bill is an obligation. A ledger transaction is a financial event. When a bill is marked Paid, it may create a linked ledger transaction, but the two records remain separate. 

### **5. Family Hub  Final Information Architecture**

Family Hub  
├── Header: Live map shortcut (if any member exists) · Caregiver invites · Add member  
├── Family Money (family-wide khata  **only** extra Hub card besides members)  
├── Member cards (tap → member dashboard / module list)  
│   ├── Care: Medicines, Stock, Appointments, Health, Emergency, Diet, Fitness, Wellness  
│   ├── Money: Bills, Subscriptions, Family Money, Insurance & Documents, Digital Keys  
│   ├── Daily: Routine, Tasks, Check-in, Work & Shifts, Travel & Visits, Study, Custom  
│   └── Home: Vehicles, Home Maintenance, Family Location  
└── Bottom tabs (app): Home · Family · Reminders · Reports · Settings  

**Must not appear as Hub cards**

- Insurance coverage → `Insurance & Documents` → “Family coverage at a glance”  
- Family Trips / travel readiness → `Travel & Visits` → Family Trips  

**User-facing names**

|Internal / old name|Show in UI|
|---|---|
|Family Ledger / Khatabook|Family Money|
|Insurance vault + coverage|Insurance & Documents|
|Travel readiness|Family Trips (inside Travel & Visits)|

#### **6. Family Hub UI Redesign** 

- Header: Family Hub + existing subtitle; keep the current + and member-add controls. 

- Member Card: avatar, member name, relation, selected module icons, managed-module count, caregiver/managed-by row and Manage. 

- Module icons are dynamic: never show a default icon for an unselected module. 

- New modules use the same icon-card visual language as existing modules. 

- Add a compact Hub card **only** for Family Money. Insurance coverage and Family Trips belong on their member modules, not the Hub list.

- Do not turn the Family Hub into a dashboard overloaded with charts. The member card remains the primary object.

#### **7. Add / Manage Feature Flow** 

Family Hub 

- → Ruchit 

- → Manage 

- → Modules 

- → + Add Feature 

- → Select Features 

- → Continue 

- → Setup only selected modules 

- → Save 

- → Member Card refreshes module icons 

Backend saves module configuration 

- → 

→ Family sync event emitted 

- Module selection is multi-select. 

- Minimum one module for a new member. 

- When editing an existing member, previously selected modules are checked. 

- Removing a module hides it from the member card but should not immediately destroy historical data. 

- Soft-disable the module; allow re-enable without losing history. 

- Step 3 must be dynamically generated from selected modules, not a fixed form. 

LifeWise Family Hub  Implementation PRD 

### **8. Family Ledger  Complete Specification** 

Purpose: provide a simple family-level money record without turning the UI into accounting software. 

#### **8.1 Core objects** 

|**Object**|**Required felds**|
|---|---|
|Transaction|id, family_id, member_id, amount, category, paid_by, expense_for,<br>payment_method,date,note,receipt,created_by|
|Contribution|member_id,amount,date,source,note|
|Split|transaction_id,member_id,share_amount,status|
|Balance|member_id,owed_to/owed_by,amount,calculated_at|
|Budget|family_id/member_id,category,limit, period|
|Bill Link|bill_id,transaction_id, paid_at|



#### **8.2 Add Expense UI** 

Family Ledger 

- → + 

- → Add Expense 

Amount Category Paid by Expense for Payment Method Date Note Receipt (optional) 

[Save Expense] 

- Amount: required, positive number, localized currency. 

- Category: Food, Groceries, Transport, Shopping, Medical, Education, Entertainment, Utilities, Other. 

- Paid by: default current user; selectable among authorized family members. 

- Expense for: Family, current member, another member, or selected members. 

- Payment Method: Cash, UPI, Card, Net Banking, Other. 

- Date: defaults today; editable. 

- Receipt: optional camera/gallery attachment. 

- Recurring Expense: optional toggle; if enabled, configure frequency and end condition. 

#### **8.3 Family Ledger screens** 

|**Screen**|**Content**|
|---|---|
|Overview|Monthlytotal,budget usage,contributions,recent transactions.|
|Transactions|All familytransactions with member/category/date flters.|
|Contributions|<br>How much each familymemberpaid into shared familyspending.|
|Balances|Optional settlement view showingwho is owed and bywhom.|
|Reports|Categoryspend,member spend,month comparison,export.|



#### **8.4 Real-life example** 

Dad pays ₹10,000 groceries 

- → Paid by: Dad 

- → For: Family 

- → Category: Groceries 

Ruchit pays ₹2,000 dinner 

LifeWise Family Hub  Implementation PRD 

→ Paid by: Ruchit 

- → For: Family 

Family Ledger: Dad contributed ₹10,000 Ruchit contributed ₹2,000 Family spending = ₹12,000 

#### **8.5 Important rule: Ledger ≠ Bank Sync**

- Primary entry method remains **manual Add Expense**.
- Family Sync means authorized family members see changes without refresh.
- Bank/UPI import must **not** be required for the core ledger to work.
- **Auto Payment Capture (§38)** is an optional, consent-based add-on **inside Family Money**:
  - Until open decision **D1** is approved: every captured payment goes to **Needs your OK** before posting.
  - After D1: payers may opt in to **Auto-add with Undo** (24 h) for high-confidence signals only.
  - Statement/PDF/AA imports (**shipped**  see §46) enter a Review queue before posting. AA reconcile remains Phase 3.
- Raw bank/UPI message text is **never** stored or uploaded. Only structured fields + hashes.

#### **8.6 Auto-add payments & Needs your OK (shipped Phase 1  see §38)**

| Screen | Placement |
|---|---|
| Auto-add settings | Family Money → flash / settings control |
| Needs your OK (badge n) | Family Money header |
| Paste / Share OCR ingest | Needs your OK (iPhone honest path) |

**Must not:** new Hub card, new Add Member module key, new bottom tab.

### **9. Bill Management  Keep Separate but Connected** 

Bills 

   - → Add Bill → Bill details 

   - → Due-date reminder 

   - → User pays externally 

   - → Mark Paid 

   - → Optional “Add to Family Ledger” 

   - → Linked transaction created 

   - → Bill status = PAID 

- Bill fields: bill type, bill name, account number optional, due date, approximate amount, payment method, reminder days, day-of reminder. 

- Paid history stays in Bill Management. 

- Ledger records the financial event. 

- Never duplicate the same payment automatically without a bill-to-ledger link ID. 

- If a user marks a bill paid, show confirmation: “Add ₹2,400 to Family Ledger?” with Yes / No. 

- If Yes, create linked ledger transaction and preserve bill_id. 

### **10. Health Monitoring  Existing UI + Major Upgrade** 

Preserve the existing Health Monitoring screen: title, member name, + button and horizontal metric filters. Fix missing translation labels and expand the metric set. 

#### **10.1 Recommended tabs** 

All | Blood Pressure | Blood Sugar | Weight | Heart Rate | Oxygen | Steps | Sleep | Activity | Water 

#### **10.2 Data sources** 

|**Platform**|**Source**|**Behavior**|
|---|---|---|
|iOS|Apple Health / HealthKit|User grants granular permissions; LifeWise<br>readspermitted health/ftness data.|
|Android|Health Connect|<br>User grants read permissions;<br>background/historical access is requested<br>onlywhen needed.|
|Any|Manual|User can manually log readings if sync is<br>unavailable or denied.|



LifeWise Family Hub  Implementation PRD 

#### **10.3 Sync flow** 

Health Monitoring 

   - → Connect Health 

   - → Explain permissions 

   - → System permission screen 

   - → Permission result 

   - → Initial sync 

   - → Normalize records 

   - → Store source + timestamp 

   - → Update member dashboard 

   - → Emit family health update where sharing is allowed 

   - → Schedule relevant reminders/alerts 

- Do not request every permission on first launch. Request data types in context. 

- Show source beside each reading: Apple Health, Health Connect, Manual. 

- Store source_record_id when available to support de-duplication. 

- Normalize units before storage/display. 

- Deduplicate by source + record identifier + timestamp/value when needed. 

- Manual entries must never be overwritten by automatic sync. 

- Health data sharing to caregivers must be separately permissioned from HealthKit/Health Connect access. 

- Do not present a LifeWise-generated medical diagnosis. Show trends and configurable alerts with safe wording. 

#### **10.4 iOS implementation requirements** 

- Enable HealthKit capability and required usage descriptions. 

- Request granular read/write permissions only for supported types. 

- Use HealthKit background delivery/observer queries where appropriate; iOS controls delivery timing. 

- Handle limited historical access and denied permissions gracefully. 

Official Apple references used for this specification: HealthKit authorization, configuration and background delivery documentation. 

#### **10.5 Android implementation requirements** 

- Use Health Connect APIs and declare requested data permissions. 

- Request only required permissions. 

- Handle foreground and background reads separately. 

- If historical/background access is needed, request the corresponding Health Connect permissions. 

- Handle sync interruptions and continue on the next foreground/background opportunity. 

Official Android references used for this specification: Health Connect data types, permissions, raw reads and sync documentation. 

### **11. Family Location  Module (shipped + 2026-09 upgrade)**

Purpose: consent-based family visibility  not covert tracking. This phone’s GPS may only share **Self**. Other members share from **their** phone.

#### **11.1 Setup**

Family Hub → member → Family Location → Enable sharing (Self only) → OS location permission → who can view → duration → optional Safe Places and geofence reminders.

#### **11.2 Main UI**

- Family Pulse map (all sharing members) and per-member map.
- Member list: last update, presence (at place / en route / ETA home), **battery % chip** when known.
- Safe Places: Home, Work, School, College, Hospital, Pharmacy, Doctor, Temple, Relative, Custom. Alerts only if enabled.
- Geofence reminders: arrive / leave / stay; local notification on this phone.
- Today’s route / history: plan-capped (free trail is short; longer history is paid).
- Route / ETA between you and a member or a searched place.
- Pause / stop sharing in one tap. Paused must not look like a live pin.
- Live Drive card when speed ≥ ~1.5 km/h: mode + km/h. Follow camera optional.

#### **11.3 Live vehicle pin (must)**

When a member is moving and another member (or Self) watches the map:

|Speed (approx.)|Mode|Map icon|
|---|---|---|
|< 1.5 km/h|Stationary|Initial / avatar pin|
|1.5–8 km/h|Walking|Walk|
|8–35 km/h|Riding|Bicycle|
|≥ 35 km/h|Driving|Car|

- Pin **glides** between GPS samples. Duration = distance ÷ reported speed (cap ~10s), linear  not a teleport.
- Icon **rotates** with heading (shortest turn, not the long way around).
- Map tiles **slide at the same duration** when follow is on (navigation-style), not an instant recenter jump.
- Speed badge `XX km/h` on the pin.
- GPS on this device also stores speed/heading from the OS when present; otherwise derive from trail.

#### **11.4 Battery monitoring (must)**

- Store `batteryPct` 0–100 and `charging` on the last location point. **Do not drop % on the next GPS fix** if the OS did not send a new reading.
- UI: always show **Battery monitoring** with a matching icon (`full` / `half` / `dead` / `charging`) and the **same number as the sharing phone**. Never a dead icon with no %.
- If % unknown: “Waiting for this phone’s battery %”  not a fake 0%.
- Low-battery **push + inbox** (free, not paywalled), once per member per tier per UTC hour:

|Tier|Threshold|
|---|---|
|Warning|≤ 25%|
|Low|≤ 15%|
|Critical|≤ 10%|

- Read battery from the device (`expo-battery` **as a library**, not an Expo config plugin). App start must not crash if the native module is missing (web / Expo Go). Dev/release builds show live %.

#### **11.5 Safety (must, not paywalled)**

- Crash heuristic: sustained high speed then a hard stop → banner + optional auto-SOS to emergency contacts.
- SOS opens Emergency Hub. Battery, crash, SOS stay available on Free for the family circle.

#### **11.6 Location data model (extend 11.3)**

|Field|Purpose|
|---|---|
|member_id|Owner of the share.|
|latitude / longitude|Last fix.|
|accuracy_m|GPS accuracy.|
|captured_at / received_at|Device vs ingest time.|
|speed_kmph / heading_degrees / movement_mode|Live Drive.|
|battery_pct / charging|Battery monitor + alerts.|
|sharing_enabled / paused / viewers / share_until|Consent.|
|safe_places[] / trail[] / visits[]|Places, history, arrivals.|
|source|ios / android.|

Retention: prune trail to plan `locationHistoryDays`. Do not keep precise points forever.

#### **11.7 Battery / privacy rules**

- Do not promise a fixed poll interval; OS scheduling is adaptive. Foreground watch is ~8s / 20m when intelligence is on.
- Rationale **before** the system location prompt.
- Stop sharing in one tap. This phone cannot share another member’s live location.

### **12. Member Dashboard  Final Layout** 

Ruchit Self • 26 yr 

[Health compliance] [Next reminder] 

Tabs: 

Overview | Reminders | Health | Documents | Modules | Settings 

###### Overview 

- Today's reminders 

- Health summary 

- Upcoming bills 

- Family Ledger summary 

- Location status 

- Recent family activity 

Modules 

- Medicines 

- Health Monitoring 

- Bill Management 

- Daily Routine 

LifeWise Family Hub  Implementation PRD 

- Family Ledger - Family Location 

- Only modules assigned to the member appear in the Modules tab. 

- Overview cards are compact and tappable. 

- Each card navigates directly to the related module.

- **Trailing control (must):** if the module already has records, show a **> chevron** (open the list). If it has **no** records and the user can add, show a **+** (about 32×32, ~2–3px smaller than the old 36). Never show + and > together. Alert/orange fill is **only** for real alerts: unpaid bills, pending tasks, unacknowledged emergency, low stock. Data-without-alert stays the normal card.

- **Record view sheets** (passport, tickets, vehicles, bills, appointments, travel, and any similar detail): match the subscription detail language. Full-page / hero / 3+ actions use **stacked full-width action rows**, not wrapping leftover chips. 

### **13. Navigation Map** 

Bottom Navigation Home Family Reminders Reports Settings 

Family Hub 

→ Member Card → Manage 

→ Member Dashboard → Overview → Reminders → Health → Documents 

- → Modules 

- → Settings 

Modules 

→ Medicines 

- → Health Monitoring 

- → Bill Management 

- → Daily Routine 

- → Family Ledger 

- → Family Location 

Do not add separate bottom tabs for Family Ledger or Location. They belong inside Family Hub/member context, keeping the global navigation stable. 

### **14. Central Reminders Integration** 

- Every module that has a reminder produces a standard Reminder record. 

- Medicine reminders, bill reminders and routine reminders continue using the existing engine. 

- Family Ledger does not create reminders for every expense. It only creates reminders for configured recurring expenses or user-requested follow-ups. 

- Location may create arrival/departure alerts, but these are event alerts, not generic reminders. 

- All reminders flow to the existing Reminders tab. 

### **15. Insights Integration** 

|**Existing Insight**|**Upgrade**|
|---|---|
|SpendingOverview|Include FamilyLedger totals and member contributions. **Home ring and Reports total-spending score must be the same integer 0–100** (`lib/life-score.ts`): official backend `lifeScore` if present, else month-to-date budget remaining 50% + bills paid 30% + leaks 20%. Do not score Reports off the date-filter window or medicines-taken.|
|Bills Tracker|Keepbill obligations separate;show linkedpaid amount.<br>|
|Health Summary|Add synced ftness/vitals source and latest sync time.|



LifeWise Family Hub  Implementation PRD 

|FamilyActivity|
|---|
|MonthlyReports|
|MoneyLeak|



|Add ledger and locationpermission events where appropriate.|
|---|
|Add familyledger and contribution sections.|
|Use ledger/expense historyas an input;never auto-cancel anything.|



### **16. Real-Time Sync Architecture** 

Client 

- ↓ REST API 

- Backend 

- ↓ MongoDB 

- Family Socket Room ↓ 

Authorized family clients 

Example: 

Ruchit saves expense 

- → POST transaction 

- → DB commit 

- → server emits LEDGER_TRANSACTION_CREATED 

- → family room receives event 

- → authorized clients update Redux cache 

- → UI refreshes without reload 

|**Event**|**Recipients**|
|---|---|
|LEDGER_TRANSACTION_CREATED|Authorized familymembers|
|LEDGER_TRANSACTION_UPDATED|Authorized familymembers|
|LEDGER_TRANSACTION_DELETED|Authorized familymembers|
|HEALTH_READING_SYNCED|Member +permitted caregivers|
|LOCATION_UPDATED|Onlyauthorized viewers|
|LOCATION_SHARING_CHANGED|Afected member/viewers|
|BILL_MARKED_PAID|<br>Authorized familymembers|



### **17. Offline & Failure Handling** 

- Cache last-fetched family data locally. 

- Allow manual ledger entry offline; mark as Pending Sync. 

- Queue offline mutations and retry when connectivity returns. 

- Prevent duplicate transaction creation with client-generated idempotency keys. 

- Show an offline banner. 

- For health sync failures, show source-specific retry state. 

- For location permission denial, keep module available with a clear Enable Location CTA. 

- For HealthKit/Health Connect denial, keep manual logging available. 

- For bill OCR failure, fall back to manual form. 

- For WebSocket failure, use REST refresh/polling fallback as defined by backend. 

### **18. API Expansion** 

|**Method**|**Endpoint**|**Purpose**|
|---|---|---|
|GET|/family/members/:id/ledger|List member/familyledger entries.|
|POST|/family/members/:id/ledger|Create transaction.|
|PUT|/family/ledger/:transactionId|Update transaction.|
|DELETE|/family/ledger/:transactionId|Soft/delete transactionperpolicy.|
|GET|/family/:familyId/ledger/summary|Totals,contributions,budgets.|



LifeWise Family Hub  Implementation PRD 

|GET|/family/:familyId/ledger/reports|Reports and date flters.|
|---|---|---|
|POST|/family/members/:id/health/sync|<br>Accept normalized health sync batch.|
|GET|/family/members/:id/health/history|Health history.|
|POST|/family/members/:id/location/share|Update sharing permissions.|
|GET|/family/:familyId/location|Authorized current locations.|
|POST|/family/members/:id/location/point|Store current location ifpolicy permits.|
|POST|/bills/:billId/mark-paid|Mark bill paid and optionally link/create<br>ledger transaction.|



### **19. Database Expansion** 

|**Collection**|**Key felds**|
|---|---|
|family_members|family_id, profle,relation,active_modules,caregivers|
|module_confgs|member_id,module_type,enabled,settings|
|ledger_transactions|family_id, member_id, amount, category, paid_by, expense_for,<br>payment_method,date,receipt,source,bill_id|
|ledger_splits|transaction_id,member_id,share_amount,status|
|ledger_budgets|family_id/member_id,category,limit, period|
|health_records|member_id, type, normalized_value, unit, source,<br>source_record_id,recorded_at|
|health_sync_state|member_id, platform, permission_state, last_sync_at, cursor/token<br>if supported|
|location_shares|member_id,sharing_enabled,viewers,safe_places|
|location_points|member_id,lat,lng,accuracy,captured_at,received_at|
|bills|member_id, bill_type, name, due_date, amount, status, paid_at,<br>linked_transaction_id|



### **20. Permissions Matrix** 

|**Action**|**Member**|**Manager/Caregiver**|**Family**|
|---|---|---|---|
|View own health|Yes|Ifpermitted|No bydefault|
|Logown health|Yes|Ifpermitted|No|
|View location|Own +permitted|If viewer|No bydefault|
|Pause own location|Yes|No override|No|
|Add familyexpense|If ledgerpermission|If ledgerpermission|Authorized only|
|Edit another member's expense|No bydefault|If manager|No|
|Mark billpaid|Ifpermitted|Ifpermitted|Authorized only|
|Manage modules|If familymanager|Ifpermitted|No|



### **21. UI States  Must Be Designed** 

|**State**|**Required UI**|
|---|---|
|Empty|Illustration/icon + useful CTA;never blank screen.|
|Loading<br>|`PageLoading`: brand spinner + **“Loading {page}…”** in primary/accent, **centered** on the page. Compact in-button loaders stay icon-only. Never a spinner with no copy on a full page.|
|Ofline|Banner +queued/pendingstatus.|
|Permission denied|Explain why+ Enable/RetryCTA.|
|No syncyet|“Not connected” + Connect CTA.|
|Syncing|Subtle “Syncing…” indicator.|
|Synced|“Synced 2 min ago” or equivalent.|
|Error|Human-readable message + Retry.|
|Deleted/disabled module|Historical datapreserved;module marked inactive.|



LifeWise Family Hub  Implementation PRD 

### **22. Critical Bugs / UI Fixes From Current Screens** 

- Fix raw localization keys visible in Health Monitoring, e.g. familyHealth.metric.heart_rate and cholesterol. Add proper English labels and translations. 

- Ensure the horizontal metric filter is scrollable and does not clip text. 

- Empty Health Monitoring text must be dynamic: it should not always say only BP/sugar/weight once additional metrics are supported. 

- Show source and last-sync timestamp when health data is connected. 

- Keep card spacing and bottom navigation consistent with the existing screenshots. 

- Do not display module icons that the member has not selected. 

- When a module is newly added, the member card count and icons update immediately after save. 

- When a module is disabled, preserve its historical data but remove the active shortcut. 

### **23. AI Builder / Developer Master Prompt** 

Paste the following instruction into the AI coding/building tool before asking it to implement the feature: 

You are modifying an EXISTING React Native Expo LifeWise app. Do not rebuild the app from scratch. Preserve the existing Family Hub UI, member-card visual style, bottom navigation, colors, spacing and navigation patterns visible in the supplied screenshots. 

Implement Family Hub as a modular feature system. 

###### EXISTING / SHIPPED MODULES:

All keys in `lib/family-features.ts` (section 33). Do not show Coming soon for those keys.

###### FAMILY-WIDE (not Hub cards):

- Insurance coverage glance  from Insurance & Documents only.
- Family Trips  from Travel & Visits only.
- Family Money  allowed as the single extra Hub card.

###### LOCATION (must):

- Consent, Self-only GPS on this phone, pause/stop, safe places, geofences, history caps, ETA.
- Battery % + charging on the point; matching icon; low-battery push 25/15/10.
- Walk / bike / car pin; glide duration = distance/speed; heading; camera glide when following.
- Crash + SOS not paywalled. Never add `expo-battery` to Expo config `plugins`.

###### UPGRADE:

- Health Monitoring with Apple Health on iOS and Health Connect on Android (section 28).
- Insights with family money data.
- RevenueCat entitlements `starter` / `family` / `pro`. No trial.

- Real-time family synchronization for authorized data. 

FAMILY MONEY: Family Hub → Family Money card **or** Member → Family Money. Add Expense: Amount, Category, Paid By, Expense For, Payment Method, Date, Note, optional Receipt. Bill Management stays separate. Paid bill may create one linked ledger event  never duplicates.

###### HEALTH:
Keep Health Monitoring UI; HealthKit / Health Connect; granular permissions; source + timestamp; manual log if denied. No medical diagnosis.

###### LOCATION:
Follow section 11 in full (battery, vehicle glide, crash/SOS, Self-only share). Do not silently track.

###### MODULE ARCHITECTURE:
Member card icons show ONLY selected modules. Catalog = `FAMILY_FEATURES`. Setup is generated from selection. Disable preserves history.

###### REAL-TIME:
Prefer existing family sync + local Hub inbox for location/insurance/trips. REST fallback. Do not assume Socket.io is the only path if the shipped app uses poll + local push.

###### QUALITY: 

Every screen needs loading, empty, error, offline and permission states. Prevent duplicate mutations with idempotency. 

Use accessible labels and touch targets. 

Do not introduce a new bottom navigation tab for every feature. 

Keep Family Hub as the single source of truth for family-member management. 

Before coding, inspect the existing routes, components, Redux slices, API services and database models. Reuse existing components wherever possible. 

Do not create duplicate navigation or duplicate data models. 

Implement one feature end-to-end before moving to the next. After implementation, verify the complete navigation and mutation flow. 

### **24. End-to-End Acceptance Checklist** 

- ☐ Existing Family Hub opens with current visual design. 

- ☐ Existing Ruchit/member card still works. 

- ☐ Manage opens member dashboard. 

- ☐ Module list shows only enabled modules. 

- ☐ Family Ledger can be added to an existing member. 

- ☐ Family Ledger Add Expense saves a real backend record. 

- ☐ Expense appears immediately in Transactions. 

- ☐ Authorized family clients receive the ledger update in real time. 

- ☐ Bill Management remains separate. 

- ☐ Marking a bill paid can create one linked ledger transaction. 

- ☐ Health Monitoring still supports manual logging. 

- ☐ iOS HealthKit connection flow works with permission denial handled. 

- ☐ Android Health Connect connection flow works with permission denial handled. 

- ☐ Health sync displays source and last sync. 

- ☐ Health data is deduplicated. 

- ☐ Family Location requires explicit sharing permission (Self only on this phone).

- ☐ Location viewers / pause hide future updates.

- ☐ Map pin uses walk / bike / car from speed; glides at reported speed; heading rotates.

- ☐ Battery card shows the sharing member’s live % (or waiting)  never a dead icon with no number.

- ☐ Low battery fires a local push at 25 / 15 / 10% (deduped per hour per tier).

- ☐ Crash / SOS remain available without a paid gate.

- ☐ Insurance coverage and Family Trips are **not** on Family Hub; they open from Insurance and Travel modules.

- ☐ Add Member lists all shipped modules in Care / Money / Daily / Home groups.

- ☐ Offline ledger action queues and later syncs.

- ☐ Duplicate offline retries do not create duplicate records. 

- ☐ Insights includes family spending. 

- ☐ Raw translation keys are removed. 

- ☐ All loading/empty/error/offline states are implemented. 

- ☐ Removing a module does not delete its historical data. 

LifeWise Family Hub  Implementation PRD 

- ☐ App navigation has no dead ends. 

- ☐ All API endpoints validate family membership and permissions. 

- ☐ Sensitive health/location data is never exposed to unauthorized family members. 

### **25. Recommended Implementation Order** 

|**Phase**|**Build**|
|---|---|
|1|Fix existing Family Hub + localization bugs + module dynamic<br>rendering.|
|2|FamilyLedger database/API/UI + manual Add Expense.<br>|
|3|Bill ↔ Ledger linkedpayment fow.<br>|
|4|FamilyLedger real-time sync + oflinequeue.|
|5|Health Monitoringsource abstraction + manual data normalization.|
|6|iOS HealthKit integration.|
|7|Android Health Connect integration.|
|8|FamilyLocationpermissions + map+ sharing.|
|9|Insights integration + reports.|
|10|FullQA, permissions,ofline,edge cases and securityaudit.|



### **26. Important Scope Notes** 

- The supplied PRD explicitly defines Expense Tracking, Bill Management, Health Monitoring, Family Hub, Reminders, Insights and real-time architecture. This document preserves those concepts and expands the requested Family Ledger and Family Location modules. 

- The Family Ledger is a proposed redesign/extension of the existing Expense Tracking experience; it is not a claim that the original PRD already contains all Family Ledger behavior. 

- Family Location is a new feature requested in this working session and is therefore specified here as an extension, not as an existing PRD feature. 

- HealthKit and Health Connect implementation details in this document are based on current official platform documentation and must be validated against the exact SDK/API versions used by the project before release. 

- Exact map provider, location retention period, bank/UPI integrations and advanced settlement automation are intentionally left as implementation decisions unless separately approved. 

### **27. Official Platform References** 

##### Apple HealthKit: https://developer.apple.com/documentation/healthkit/ 

Apple HealthKit authorization: https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data 

Apple HealthKit background delivery: https://developer.apple.com/documentation/healthkit/executing-observer-queries 

Android Health Connect data types: https://developer.android.com/health-and-fitness/health-connect/data-types 

Android Health Connect sync: https://developer.android.com/health-and-fitness/health-connect/sync-data 

Android Health Connect permissions/write: https://developer.android.com/health-and-fitness/health-connect/write-data 

LifeWise Family Hub  Implementation PRD 

### **28. NEW REQUIRED SECTION  Wearables & Fitness Device Sync** 

**Important correction/clarification:** The earlier version already covered Apple Health/HealthKit and Android Health Connect, but it did not explicitly document the full wearable/device-source layer. This section makes that requirement explicit. 

#### **28.1 Product Requirement** 

LifeWise Health Monitoring must not be limited to manual readings. The production design must support health and fitness data arriving through the platform health hub and, where commercially/technically required, direct vendor integrations. The user should be able to connect a compatible watch, fitness band, ring, scale or other supported health device through the appropriate ecosystem and see the resulting data in LifeWise. 

#### **28.2 Preferred data architecture** 

Use a two-layer integration strategy rather than building a separate connector for every consumer device: 

- iOS: LifeWise → HealthKit → compatible device/app sources → normalized LifeWise health store. 

- Android: LifeWise → Health Connect → compatible health/fitness apps and device sources → normalized LifeWise health store. 

- Add direct vendor APIs only when a required device/vendor cannot provide the needed data through HealthKit/Health Connect, or when richer vendor-specific data is a product requirement. 

#### **28.3 iOS device ecosystem** 

Apple documents HealthKit as the central repository for health and fitness data on iPhone and Apple Watch, and says HealthKit also works with compatible third-party apps and connected health/fitness devices. Users control access through granular permissions. Therefore, the LifeWise UI should treat HealthKit as the main iOS gateway. 

- Apple Watch → HealthKit → LifeWise. 

- Compatible third-party fitness/health app → HealthKit → LifeWise. 

- Compatible Bluetooth LE health device → its app/HealthKit path → LifeWise. 

- Manual reading remains available when a source or permission is unavailable. 

#### **28.4 Android device ecosystem** 

Health Connect is the primary Android gateway for a mobile-first LifeWise implementation. It provides a standardized, permission-controlled on-device health and fitness data layer. Not every connected app supports every data type, so the UI must show availability per metric. 

- Supported watch/band/app → Health Connect → LifeWise. 

- Samsung Galaxy Watch → Samsung Health → Health Connect → LifeWise. Samsung documents this indirect path. 

- Other Android fitness ecosystems can be supported when they publish data into Health Connect. 

- Use direct vendor integration only where the desired data cannot be obtained through Health Connect or where a commercial partner/API is approved. 

#### **28.5 Direct vendor integrations  optional but architected** 

The backend must be designed so a vendor connector can be added without changing the LifeWise health UI or normalized health schema. 

|Source|Primary path|Direct API requirement|Notes|
|---|---|---|---|
|Apple Watch|HealthKit|No for standard HealthKit<br>data|Use HealthKit permissions<br>andqueries.|
|Samsung Galaxy Watch|Samsung Health → Health<br>Connect|Usually no|Galaxy Watch data reaches<br>Health Connect via Samsung<br>Health when synced.<br>|
|Garmin|Garmin Connect|Yes when using Garmin<br>direct APIs|Garmin ofers<br>Health/Activity APIs;<br>commercial use mayrequire|



LifeWise Family Hub  Implementation PRD 

||||licensing.|
|---|---|---|---|
|Fitbit / Google device<br>ecosystem|Health Connect where<br>supported; Google Health<br>API for cloud/device<br>integrations|Depends on data<br>requirement|Do not build new Google Fit<br>REST dependency; current<br>Android guidance points<br>developers to Health<br>Connect/Google Health API.|
|Generic BLE devices|HealthKit / Health Connect /<br>compatible companion app|Only if needed|Support as an ecosystem<br>source rather than promising<br>everyBLE device directly.|



#### **28.6 Device Connection UI** 

Health Monitoring → Connect Device / Connect Health 

→ Choose platform source 

iOS Apple Health ↓ Select Health permissions ↓ Show available sources/devices 

↓ Initial sync 

Android Health Connect ↓ Select data permissions 

↓ Show available connected apps/sources 

↓ Initial sync 

Optional: Connect another provider 

#### **28.7 “Connected Sources” screen** 

- Apple Health  Connected 

- Health Connect  Connected 

- Samsung Health  Available through Health Connect 

- Garmin  Connect account (only when direct connector is enabled) 

- Other sources  Detected through platform health hub 

Each source card should show: connection status, last sync, metrics available, permission/manage action, and disconnect action. 

#### **28.8 User experience for a smartwatch** 

User wears smartwatch 

- → Watch records heart rate / steps / sleep / workout 

- → Watch companion ecosystem receives data 

- → Platform health store receives data 

- → LifeWise sync worker detects new/changed records 

- → Normalize units + timestamps + source 

LifeWise Family Hub  Implementation PRD 

→ Deduplicate 

→ Save health record 

→ Update member dashboard 

→ Update authorized family view 

→ Trigger configured threshold/health notification if applicable 

→ Show last sync status 

#### **28.9 Data contract for every synced health record** 

- member_id 

- metric_type 

- value / structured value 

- unit 

- source_platform (ios_healthkit / android_health_connect / vendor_api / manual) 

- source_app or device name when available 

- source_record_id when available 

- recorded_at 

- received_at 

- sync_batch_id 

- quality/status 

#### **28.10 Metrics to expose when actually available** 

The UI should be capability-driven. Do not show a metric as available simply because the app supports its visualization. Only show metrics supplied by the connected source or manually entered by the user. 

- Heart rate / resting heart rate 

- Heart-rate variability where provided 

- Blood pressure systolic/diastolic where provided 

- Blood oxygen saturation where provided 

- Body temperature where provided 

- Weight / body mass 

- Steps 

- Distance 

- Active energy / calories 

- Workouts / exercise sessions 

- Sleep 

- Respiratory rate where provided 

- Hydration / water where provided by a source 

- Blood glucose where supported and permitted 

#### **28.11 Real-time vs eventual sync  product wording** 

Do not promise that every wearable metric will appear literally every second. Actual update timing depends on the device, companion app, platform, permissions, battery policy and background execution rules. The UI should say “Last synced …” and provide “Sync now” where a foreground refresh is possible. 

#### **28.12 Family sharing of synced health data** 

Wearable source → Member's HealthKit / Health Connect 

→ LifeWise private health store 

→ Member chooses family-sharing permission 

→ Authorized caregiver/family clients receive permitted summary/trend data 

→ Unauthorized members receive no data 

LifeWise Family Hub  Implementation PRD 

Connecting a device to HealthKit/Health Connect does not automatically grant every family member access. Platform permission and LifeWise family-sharing permission are separate layers. 

#### **28.13 Sync settings UI** 

|Setting|Required behavior|
|---|---|
|Automatic sync|ON/OFF;default ON after successful connection.|
|Data types|Granular enable/disable per metric where the platform<br>permits.|
|Background refresh|Explain that OS/device controls timing; do not guarantee<br>fxed intervals.|
|Last sync|Show timestampand source.|
|Sync now|Foreground refresh/reconcile when supported.|
|Disconnect|Stop new imports; preserve already imported LifeWise<br>historyunless user deletes it.|
|Delete imported data|Provide a clear local/account data deletion path according<br>toprivacy policy.|



#### **28.14 Failure states that must be implemented** 

- Health source not available on device. 

- Health Connect unavailable/outdated. 

- Health permission denied or limited. 

- Source app installed but not writing the selected metric. 

- Wearable disconnected from its companion app. 

- No new data since last sync. 

- Background sync delayed by OS/battery policy. 

- Direct vendor token expired. 

- Duplicate records from multiple sources. 

- Source metric is unsupported by LifeWise. 

#### **28.15 Direct-integration roadmap** 

1. Phase A: HealthKit + Health Connect + manual entry. 

2. Phase B: Verify high-demand source ecosystems and add direct connectors only where necessary. 

3. Phase C: Garmin/direct vendor integrations if the product needs data unavailable through platform hubs and the commercial/API requirements are approved. 

#### **28.16 Developer acceptance criteria  wearables** 

☐ A user can connect Apple Health on iOS from Health Monitoring. 

☐ A user can connect Health Connect on Android from Health Monitoring. 

☐ If Apple Watch or another compatible source is writing data into HealthKit, LifeWise can read the permitted supported metrics. 

☐ If Galaxy Watch data is available through Samsung Health + Health Connect, LifeWise can read the permitted supported metrics. 

☐ The app detects source/metric availability before displaying a connected metric. 

☐ Every imported record retains source and timestamp metadata. 

☐ Imported data is deduplicated. 

☐ Manual data and imported data coexist without silent overwrite. 

☐ Family sharing is controlled separately from platform health permission. 

LifeWise Family Hub  Implementation PRD 

☐ Last-sync state is always visible when a source is connected. 

☐ A source can be disconnected without deleting LifeWise history. 

☐ A failed/delayed source does not blank the entire Health Monitoring screen. 

☐ The normalized backend schema supports future direct vendor connectors without redesigning the UI. 

#### **28.17 Sources verified for this section** 

Apple HealthKit overview / authorization / data types: https://developer.apple.com/documentation/healthkit/ 

Apple HealthKit authorization: https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data 

Apple HealthKit data types: https://developer.apple.com/documentation/healthkit/healthkit-data-types 

Apple HealthKit configuration: https://developer.apple.com/documentation/healthkit/configuring-healthkit-access Apple Health security and device access: https://support.apple.com/en-in/guide/security/sec88be9900f/web 

Android Health Connect overview: https://developer.android.com/health-and-fitness/health-connect 

Android Health Connect setup: https://developer.android.com/health-and-fitness/health-connect/get-started 

Android Health Connect synchronization: https://developer.android.com/health-and-fitness/health-connect/sync-data 

Android Health Connect publishing requirements: https://developer.android.com/health-and-fitness/health-connect/publish 

Samsung Health + Health Connect FAQ: https://developer.samsung.com/health/health-connect-faq.html 

Garmin Health API: https://developer.garmin.com/gc-developer-program/health-api/ 

Garmin Activity API: https://developer.garmin.com/gc-developer-program/activity-api/ 

Android 2026 migration guidance for Google Fit → Health Connect / Google Health API: https://developer.android.com/healthand-fitness/health-connect/migration/fit 

### **29. Final Answer to the Wearable Requirement**

YES  the product includes smartwatch, fitness-band, ring and compatible health-device sync. The scalable path is **not** “connect every watch directly.” Connect **Apple Health / Health Connect first**, then add vendor connectors where needed. Health Monitoring UI stays one surface.

---

### **30. Insurance & Documents + coverage glance (shipped)**

**Job:** Keep policies, IDs and emergency insurance facts on the **member**, not as a second Hub product.

**Add Member:** module key `insurance`  “Coverage glance, Quick Cards & documents.”

**Screens**

1. Member document vault (policy, passport, visa, ID, custom). Account-wide document cap by plan.
2. **Insurance Quick Card** (insurance type only): policy number, 24×7 helpline, preferred hospital, renewal. Used from Emergency Hub.
3. **Family coverage at a glance** (opened from the member Insurance screen, not Hub): each member Covered (own policy) / Floater / Expiring / Gap.

**Rules**

- Helpline + hospital are the high-value emergency fields.
- Coverage is a **read model** over vault documents + Quick Card fields  do not force a second upload for the glance.
- Renewals feed Family Hub reminder projection (`kind: insurance`) with 30 / 7 / 1 day nudges.
- **View sheet:** passport / ID / policy detail uses `RecordDetailSheet` with stacked full-width actions (Scan attach, DigiLocker, Edit)  same as subscription detail, not wrapping chips.

---

### **31. Travel & Visits + Family Trips (shipped)**

**Job:** Per-member visits **and** a household trip checklist, without duplicating Document Vault or Medicines.

**Add Member:** module key `travel`.

**Per member:** upcoming / past visits (doctor, family, travel). Open a visit/ticket in `RecordDetailSheet` (full-page, stacked actions: check-in / edit / delete / scan)  same view language as subscriptions and documents.

**Family Trips** (from Travel module, not Hub):

- Plan trip: dates, destination, traveling member ids.
- Readiness: passport, visa, insurance, medicine supply  **reuse** vault + medicines. No duplicate uploads.
- Status: ready vs open issues per traveler.

Reminders use existing travel projection; trip push `type: family-travel` opens `/family-travel/trips/[tripId]`.

---

### **32. Emergency Hub (shipped)**

- SOS circle, Medical ID, bystander fields, missed-medicine path.
- Insurance Quick Card on the emergency screen when present (helpline tap-to-call).
- Location crash can auto-open SOS / notify contacts. Do not paywall SOS or crash.

---

### **33. Remaining shipped member modules (catalog)**

These are **built** in Add Member. Each has its own route under `app/family-*`.

|Key|User label|What it does|
|---|---|---|
|medicines|Medicine Tracking|Doses, schedule, adherence, caregiver mark-done.|
|stock|Medication Stock|Refill / low-stock.|
|appointments|Doctor Appointments|Visit reminders.|
|health|Health Monitoring|Manual vitals + HealthKit / Health Connect (28).|
|emergency|Emergency Hub (SOS)|Section 32.|
|diet|Diet & Food|Meal / diet type.|
|fitness|Fitness Tracking|Workouts / streaks.|
|wellness|Mental Health & Wellness|Mood + self-care reminders.|
|bills|Bill Management|Due bills; separate from Family Money (section 4).|
|subscriptions|Subscription Tracking|OTT / renewals.|
|expenses|Family Money|Shared khata, splits, settle. Hub card + member ledger. **Auto-add / Needs your OK inside this module only (§38).**|
|insurance|Insurance & Documents|Section 30.|
|digitalKeys|Digital Keys|Wifi / gate / household secrets.|
|routine|Daily Routine|Wake / sleep / walk.|
|tasks|Reminder Tasks|Custom tasks.|
|checkin|Call & Check-in|Call reminders + I’m OK.|
|work|Work & Shifts|Job site, clock in/out, away prompt, hours, CSV. §37.|
|travel|Travel & Visits|Section 31.|
|study|Study & Education|Homework / exams.|
|custom|Custom Feature|Named tracker the family defines.|
|vehicles|Assets & Vehicles|RC, vehicle insurance, PUC, EMI / service.|
|homeMaintenance|Home Maintenance|AMC / appliance / service.|
|location|Family Location|Section 11.|

**Plan gates (do not invent new ones here):** family member count, modules per member, documents, location live members, safe places, reminder geofences, history days, Live Drive for extended family (immediate family stays free). Store prices always from RevenueCat / Play / App Store, never hardcoded INR as the charged price.

---

### **34. Family Hub notification inbox**

Family Hub modules that the server scheduler does not fully own (location battery/crash/geofence, insurance renewal scan, trip readiness, money nudges, health out-of-range) write a **local inbox + local push**. Dedup keys must prevent spam (e.g. battery `member + tier + UTC hour`). Payment capture alerts (`payment-alert` / digest) and Work needs-review nudges also use this inbox when enabled. All of these appear in the app Notifications screen  Caregiver Invites uses a **non-bell** icon so it is not a second notification centre.

---

### **35. Payments & plans (product rules that affect Hub)**

- **RevenueCat only.** No Razorpay, Stripe, or client-callable “grant me Pro”.
- Entitlements: `starter` / `family` / `pro` (lowercase = PlanId).
- **No free trial** and no store intro offer unless product explicitly reopens it.
- Test payment toggle is `__DEV__` only.
- Web has no RevenueCat SDK; paid Hub limits on web stay local/fallback.
- **Caregivers per member:** Free = 0, Starter = 1, Family/Pro = unlimited. Pending invites occupy a slot. Client gates the invite CTA; **POST `/api/family/:memberId/connected-caregivers/invite` must 403 `plan_limit`** if the slot is full. Empty/pending caregiver icons use primary/accent, not gray.

---

### **36. Implementation notes for builders**

- Module catalog source of truth: `lib/family-features.ts`.
- Location motion / battery tiers: `lib/family-location-motion.ts`. Device %: `lib/device-battery.ts` (never register `expo-battery` as an Expo **config plugin**  it breaks `expo start`).
- Map pin animation: `components/FamilyLocationMap.tsx` (`TravelMemberPin` + camera glide).
- Coverage: `app/family-documents/coverage.tsx` linked from `app/family-documents/[memberId].tsx`.
- Trips: `app/family-travel/trips/*` linked from `app/family-travel/[memberId].tsx`.
- Hub list: `app/family.tsx`  Family Money card only besides members.
- Member dashboard trailing + / >: `app/family-member-detail/[memberId].tsx` (`FeatureModuleCard`).
- Shared spending score: `lib/life-score.ts` used by Home and Reports.
- Page loaders: `PageLoading` in `components/PremiumLoader.tsx`.
- Record view actions: `components/RecordDetailSheet.tsx` (stacked when full-page).

- Work & Shifts: `lib/family-work.ts`, `lib/family-work-engine.ts`, `app/family-work/[memberId].tsx`. Verify: `node scripts/verify-work-matrix.mjs`.
- Auto Payment Capture: `lib/payment-capture-engine.ts`, `lib/payment-capture.ts`, `app/family-expenses/needs-ok.tsx`, `app/family-expenses/capture-settings.tsx`. Verify: `node --experimental-strip-types scripts/verify-payment-capture.mjs`.

---

### **37. Work & Shifts (module key `work`)  shipped MVP + Phase next**

**Placement:** Add Member → **Daily** group. Member dashboard card. Optional Home Quick Reach “Work Hours”. **No new Hub family-wide card.**

#### **37.1 What ships now (MVP)**

- Create a job from **current location** as the job site (radius clamped ≥ 100 m; under 100 m warns and saves 100 m).
- **Test preset** for real-phone QA: radius 100 m, dwell 1 min, exit grace 3 min, prompt timeout 10 min (all within allowed ranges). Doc examples still use defaults dwell 3 / grace 10 / prompt 30.
- Manual **Clock in / Clock out**.
- **I left work** → away prompt: Break / Working outside / Shift over / Snooze (once).
- Break / offsite → **I am back on site**.
- Needs-review confirm; week / month totals; **CSV share** (UTF-8 BOM, no lat/lng).
- Foreground “near site” hint while the app is open.

#### **37.2 Phase next (do not mark shipped until done)**

- OS background geofence (Always location) with dwell / drive-by / outside-window / grace / prompt-timeout / night shift / reconcile after kill.
- Map site picker with live circle; reuse Safe Place as job site; Always-deny → Remind/Manual + CTA.
- Excel / PDF export; pay-cycle UI; full edit/soft-delete audit screens.

#### **37.3 Privacy**

- Self phone only for auto tracking (same idea as Location). Caregiver cannot remotely enable capture on another phone.
- Enabling Work does **not** auto-enable Family Location live sharing.

#### **37.4 Code / tests**

- `lib/family-work.ts`, `lib/family-work-engine.ts`, `app/family-work/[memberId].tsx`
- `node scripts/verify-work-matrix.mjs` (logic scenarios)
- `node scripts/verify-work-engine.mjs`

---

### **38. Family Money  Auto Payment Capture & Family Payment Alerts**

**Addendum status:** Engine + Needs your OK + settings + **Android notification listener** (allow-list) **shipped**. Still later: Pay & record, iOS Shortcuts, AA reconcile.

#### **38.0 Placement (non-negotiable)**

- Lives **only inside Family Money** (`expenses`).
- No new Hub card. No new Add Member module. No new bottom tab.
- Entry: Family Money header **Needs your OK (n)** and **Auto-add payments** settings.

#### **38.1 Product promise**

Pay the way you always do. LifeWise notices, adds it to Family Money, and tells the family  only what you've agreed to share.

#### **38.2 Hard constraints (must stay true)**

| Reality | Rule |
|---|---|
| No GPay public webhook | Capture signals (notification / Share OCR / later UPI intent) → normalize `PaymentSignal` |
| Play SMS policy | **Do not build MVP on SMS.** No `READ_SMS` for this feature. |
| iOS cannot read other apps' notifications | Honest UI; Share screenshot / paste text |
| Account Aggregator | Phase 3 reconcile only |

#### **38.3 Engine (shared pure functions  unit tested)**

`parseSignal` → `dedupeKey` / merge → `classifySignal` → `decideAction` → ledger / review → `shouldAlert` / `computeBalances`.

- Default **Auto-add mode = Needs your OK** until **D1** amends §8.5 for opt-in Auto-add with Undo.
- Family member UPI/alias match → `family_transfer` (not family spending).
- Loan / Repayment labels update balances; excess repayment prompts.
- Dedupe: 12-digit UPI ref first; fuzzy ±10 min fallback.
- Never store raw message text; mask VPA in family views.

#### **38.4 Shipped surfaces**

- Settings: pause, mode, share level, family UPI identities, Android notification-access deep link.
- Needs your OK: paste + auto-queued Android notifications + clipboard → Confirm / Family / Just me / Not a payment.
- Native: `modules/lifewise-payment-capture` NotificationListenerService (GPay, PhonePe, Paytm, BHIM) + offline queue.
- Verify: `npm run verify:payment-capture` (36 checks).

#### **38.5 Still later**

- Pay & record (in-app UPI return path), iOS Shortcuts, AA statement reconcile, Undo 24h UI, capture health dashboard.
- Family push fan-out with thresholds / quiet hours / batching (engine `shouldAlert` already coded).
- Merchant rules learning, bill “Mark paid?” suggestion.

#### **38.6 Open decisions (product owner)**

| # | Decision |
|---|---|
| D1 | Amend §8.5 to allow opt-in Auto-add with Undo? |
| D2 | Audit existing personal SMS expense path vs Play policy |
| D3–D10 | Share defaults, minors, plan gates, AA partner, safety alerts, localization order |

#### **38.7 Code / tests**

- `lib/payment-capture-engine.ts`, `lib/payment-capture.ts`, `lib/payment-notification-capture.ts`
- `modules/lifewise-payment-capture` (Android NotificationListener)
- `components/PaymentCaptureBridge.tsx`
- `app/family-expenses/needs-ok.tsx`, `app/family-expenses/capture-settings.tsx`
- `npm run verify:payment-capture`

---

### **39. WiseAI  AI Assistant (shipped)**

**Job:** An in-app AI chat that understands LifeWise data and can trigger actions  without leaving the app or opening a generic LLM.

#### **39.1 Scope**

- WiseAI is scoped **only** to LifeWise. It politely declines unrelated queries (recipes, general knowledge, code help).
- It receives the user's current month spending, bills, family members, and health summary as context.
- Replies are structured: text + optional action buttons.

#### **39.2 In-app actions**

WiseAI can suggest tappable actions that deep-link into LifeWise screens:

`open_bills`, `add_bill`, `open_family`, `add_family_member`, `open_medicines`, `add_medicine`, `open_health`, `add_health`, `open_scan`, `open_voice`, `open_subscriptions`, `add_subscription`, `open_travel`, `open_vehicles`, `open_documents`, `open_location`, `open_leaks`, `open_calendar`, `open_notifications`, `open_settings`, `open_reports`, `add_expense`, `open_emergency`, `open_diet`, `open_fitness`, `open_stock`, `open_home_maintenance`, `open_digital_keys`, `open_appointments`.

#### **39.3 API**

`POST /api/assistant/chat`  server endpoint. The shared type file `lib/wise-ai.ts` is imported by both client and server.

#### **39.4 UI**

- Screen: `app/assistant.tsx`.
- Chat bubble interface with typing indicator, gradient header, and action chips.
- Plan-gated (paid feature).

#### **39.5 Code**

- `lib/wise-ai.ts` (action IDs, system prompt builder, message types)
- `app/assistant.tsx` (chat screen)

---

### **40. Voice Reminder & Voice Expense Entry (shipped)**

**Job:** Let users speak an expense, bill, task, or reminder instead of typing  especially useful on the go.

#### **40.1 Flow**

Voice screen → tap mic → animated recording pulse → live speech-to-text → NLP parse → structured result card → confirm → route to add screen with prefill.

#### **40.2 Parsing**

`lib/parse-voice-expense.ts` extracts: amount, category, date, payment method, payee, and description from natural speech. Supports Hindi/English mixed input.

#### **40.3 Speech engines**

- **On-device**: `expo-av` recording → send audio to server.
- **Cloud fallback**: `lib/live-speech-cloud.ts` for real-time transcription when on-device is insufficient.

#### **40.4 Outputs**

Voice can create: expenses, bills, tasks, reminders. The parsed result routes to the appropriate `add` form with fields prefilled.

#### **40.5 Code**

- `app/voice-reminder.tsx` (2,800 lines  largest screen in the app)
- `lib/parse-voice-expense.ts`, `lib/live-speech.ts`, `lib/live-speech-cloud.ts`
- `lib/voice-datetime.ts` (date/time extraction from natural language)

---

### **41. Smart Capture  Universal OCR Scanner (shipped)**

**Job:** One camera screen that can scan any supported document type and prefill the correct add form  replacing the old bill-only scanner with a universal one.

#### **41.1 Flow**

Smart Capture → select module (medicine, appointment, health, bill, subscription, travel, vehicle, document) → camera/gallery → photo → server OCR → structured result → review → confirm → route to add form with prefill.

#### **41.2 Confidence fallback**

If OCR confidence < 0.5: open the add form with partial data + "Please review" banner. **Never show a dead-end.**

#### **41.3 Server engine**

`server/smart-capture-engine.ts` (61KB)  handles OCR, field extraction, classification, and confidence scoring for all module types.

#### **41.4 Routes**

`lib/capture-routes.ts` maps each module to its add route and builds prefill params from OCR results.

#### **41.5 Legacy**

`app/scan-bill.tsx` (63KB) and `server/bill-scan-engine.ts` (35KB) are the older bill-only scan. Smart Capture supersedes them for new flows but both coexist.

#### **41.6 Code**

- `app/smart-capture.tsx`, `lib/capture-routes.ts`
- `server/smart-capture-engine.ts`
- `components/ScanAnimation.tsx`, `components/ScanCaptureFab.tsx`

---

### **42. Auto-Fetch Inbox & Passive Ingestion (shipped)**

**Job:** Automatically detect bills, tickets, and payments from the user's phone without manual entry  via Gmail, clipboard, share sheet, and SMS share.

#### **42.1 Sources**

| Source | How | Platform |
|---|---|---|
| Gmail | Read-only OAuth (`gmail.readonly`), allowlisted sender domains only | iOS + Android |
| Clipboard | Check on app open, parse for PNR / payment / bill | iOS + Android |
| Share sheet | User shares text/image from another app into LifeWise | iOS + Android |
| SMS share | User forwards SMS text | Android only |

#### **42.2 Pipeline**

Source detects content → `addAutoFetchItem()` classifies → complete items auto-commit (create reminder + countdown) → incomplete items stay as confirm chips → 7-day auto-expire for unactioned items.

#### **42.3 Trust scoring**

After `HIGH_TRUST_CONFIRMATIONS` (3) correct user confirmations, source reaches `HIGH_TRUST_THRESHOLD` (0.8) and items auto-add silently.

#### **42.4 Privacy rules**

- Gmail: only transactional domains, raw body sent for classification only, not stored server-side.
- SMS: `SMS_INBOX_ACCESS_ENABLED = false` (Play policy). Only user-initiated SMS share.
- Clipboard: user can disable from settings. Last clip hash prevents re-prompting.
- Screenshot/gallery scanning: **intentionally not implemented** (Apple forbids it; privacy red flag).

#### **42.5 Code**

- `lib/auto-fetch-inbox.ts`, `lib/commit-auto-fetch.ts`, `lib/auto-fetch-setup.ts`
- `lib/gmail-fetch.ts`, `lib/gmail-oauth.ts`, `lib/gmail-session.ts`
- `lib/passive-ingest.ts`, `lib/sms-reader.ts`
- `components/AutoFetchSetupBridge.tsx`, `components/PassiveIngestBridge.tsx`, `components/ShareIntentBridge.tsx`

---

### **43. Family Notes  Per-Member Collaborative Notes (shipped)**

**Job:** Simple shared notes per family member  not a full doc editor, just quick notes that multiple family members can see.

#### **43.1 Note object**

| Field | Type |
|---|---|
| id | string |
| title | string |
| body | string |
| category | general · health · location · money · school · household |
| color | paper · sand · blush · mint · lavender · sky |
| pinned | boolean |
| done | boolean |
| ownerMemberId | string |
| collaborators | array of { id, name, avatarUrl } |
| createdAt / updatedAt | ISO timestamps |

#### **43.2 Sorting**

Three sort modes: `updated` (default), `pinned` (pinned first), `category` (grouped).

#### **43.3 Not a module**

Family Notes is a **standalone screen** (`app/family-notes/`), not an Add Member module key. It does not appear in `FAMILY_FEATURES`. Consider adding it as a module key if it should appear on member dashboards.

#### **43.4 Code**

- `lib/family-notes.ts` (types, CRUD, local storage)
- `app/family-notes/[memberId].tsx`, `app/family-notes/add.tsx`

---

### **44. Countdown Cards & Live Transit (shipped)**

**Job:** Persistent live-countdown cards and real-time flight/train status so users never miss a departure.

#### **44.1 Countdown Cards**

One card per event (dedup by `{module}:{eventId}`). Modules: travel, appointment, bill, insurance, vehicle, medicine, subscription, maintenance.

**Auto-clear:** 30 min after event time, or on user "Got it" tap.

**Tiered push:**

| Timing | Purpose |
|---|---|
| T-3h (or T-1 day for appointments) | Broad advance warning |
| T-1h / T-30min | Sharp reminder |
| T-0 | Event started (card stays until grace) |

#### **44.2 Live Transit Status**

Real-time flight/train status: scheduled, running, delayed, departed, arrived, landed, cancelled, diverted. Server-side provider; client polls via API with a short cache to prevent duplicate requests.

#### **44.3 Live Journey  Lock-Screen Notifications**

Sticky notification that updates in-place (Dynamic Island-style):
- **Android:** ongoing high-importance channel
- **iOS:** timeSensitive

Shows: remaining time, gate/platform, live status. True iOS Live Activities (ActivityKit widget) is a future enhancement.

#### **44.4 Code**

- `lib/countdown-cards.ts`, `lib/event-time.ts`
- `lib/live-transit.ts`, `server/live-transit.ts` (30KB)
- `lib/live-journey.ts`, `components/LiveJourneyBridge.tsx`, `components/LiveTransitCard.tsx`

---

### **45. Family Safety Net Funds (shipped  inside Family Money)**

**Job:** Shared family savings pools with contribution transparency and approved withdrawals.

#### **45.1 Placement**

Inside **Family Money** only. Route: `app/family-money/safety-net/`. **No new Hub card.**

#### **45.2 Fund object**

| Field | Purpose |
|---|---|
| name | Display name |
| category | medical · education · wedding · emergency · custom |
| goalAmount | Optional target |
| approverIds | Who can approve withdrawals |
| contributorIds | Who can contribute |
| currentBalance | Computed from contributions - approved withdrawals |

#### **45.3 Contribution**

Members contribute amounts with payment method, date, and note. Balance updates immediately.

#### **45.4 Withdrawal**

Request → pending → approver approves/rejects → if approved, links into Family Ledger via `addFamilyExpense(expenseFor: 'fund:<id>')`.

#### **45.5 Code**

- `lib/family-safety-net.ts` (385 lines  types, CRUD, balance computation)
- `app/family-money/safety-net/index.tsx`, `create.tsx`, `[fundId].tsx`

---

### **46. Bank Statement Import (shipped  was Phase 3)**

**Job:** The iOS alternative to Android SMS auto-detection. Upload a bank statement and bulk-import categorized transactions.

#### **46.1 Flow**

Family Money → Import → pick PDF/CSV → upload to server → `POST /api/transactions/import/preview` → server parses, categorizes, generates dedup keys → user reviews → confirm → bulk create.

#### **46.2 Server-side parsing**

All parsing happens on the server (`server/smart-capture-engine.ts` handles this among other scan types). React Native cannot extract PDF text on-device.

#### **46.3 Review queue**

Every imported transaction enters a review queue before posting. User can edit category, amount, or skip individual items.

#### **46.4 Code**

- `app/import-statement.tsx` (833 lines)
- `lib/parse-statement.ts` (client-side CSV preview)

---

### **47. Calendar View  Unified Family Timeline (shipped)**

**Job:** A single calendar that shows all family events  bills, reminders, appointments, travel  across all members.

#### **47.1 Range modes**

Week · Month · Quarter · Year.

#### **47.2 Data sources**

Pulls from: `useExpenses` (bills), `useFamilyReminders` (all module reminders). Items show member avatar, title, type icon, and time.

#### **47.3 Navigation**

Accessible from Home tab. Tapping an item navigates to its detail screen.

#### **47.4 Code**

- `app/calendar.tsx` (842 lines)

---

### **48. App Lock  Biometric Security (shipped)**

**Job:** Protect the entire app behind the device's biometric gate (fingerprint/face) without LifeWise storing any PIN.

#### **48.1 Design**

The OS owns the credential flow. `LocalAuthentication.authenticateAsync` with `disableDeviceFallback: false` shows the platform sheet: biometric if enrolled, plus a "Use PIN" button for the device lock PIN/pattern/password.

**LifeWise stores NO PIN.** Enrollment, throttling, lockout, and accessibility are all the OS's job.

#### **48.2 Platform support**

- **iOS + Android:** Fingerprint / Face ID / device PIN.
- **Web:** Not supported (`isSupported = false`). Settings row hides itself.
- **Expo Go:** Graceful fallback  SDK loaded via `require()`, not static import.

#### **48.3 Code**

- `lib/app-lock-context.tsx` (360 lines  context provider, lazy SDK load)
- `components/LockScreen.tsx` (lock UI overlay)

---

### **49. Multi-Currency  Display Conversion (shipped)**

**Job:** Let users see amounts in their preferred currency without rewriting stored data.

#### **49.1 Invariant**

**Every amount in this app is stored in INR and is never rewritten.** Currency selection is a *display* preference only. Switching currencies does not re-store historical amounts.

#### **49.2 Input conversion**

Amounts the user types are interpreted in their selected currency and converted to INR via `toBase()` before saving. Otherwise a user on USD who types "50" would save ₹50.

#### **49.3 Exchange rates**

Fetched from the **Frankfurter API** (free, ECB-sourced). Cached locally. Rates refresh on app open and periodically.

#### **49.4 Code**

- `lib/exchange-rates.ts` (369 lines  rates, cache, `toBase()`, `fromBase()`)
- `lib/exchange-rates-api.ts` (API client)
- `lib/currency-context.tsx` (12KB  React context, `formatAmount`, `convertAmount`)

---

### **50. Trip Planner & Booking Board (shipped)**

**Job:** Help families plan trips with destination info, visa requirements, and booking deep links  without leaving LifeWise.

#### **50.1 Destination database**

Pre-built database of popular Indian and international destinations (Goa, Manali, Jaipur, Dubai, Bali, etc.) with:
- Nearby places tagged as see / stay / eat
- Visa requirements: none · id · evisa · voa · embassy

#### **50.2 Booking deep links**

Opens booking sites (Skyscanner, IRCTC, Booking.com, etc.) for: flight · train · hotel · visa.

#### **50.3 Place search**

`lib/place-search.ts` wraps a places API for custom destination search.

#### **50.4 Code**

- `lib/trip-planner.ts` (312 lines  destinations, booking sites, deep link builders)
- `components/TripBookingBoard.tsx` (booking board UI)

---

### **51. Referral System (shipped)**

**Job:** Grow the user base through referral codes with a points-based reward system.

#### **51.1 How it works**

User shares referral code → referred user applies it at signup → both earn points → points unlock perks.

#### **51.2 Points & Perks**

| Perk | What it unlocks |
|---|---|
| extraVaultSlots | More document vault capacity |
| extraSafePlaces | More safe places in Location |
| extraGeofences | More geofence reminders |

Points have a catalog of redeemable items. Pending points exist until the referred user completes a qualifying action.

#### **51.3 Fraud prevention**

Device fingerprinting (`@lifewise_device_fp`) prevents duplicate claims from the same device.

#### **51.4 Code**

- `lib/referrals.ts` (213 lines  client types, share, apply)
- `server/referrals.ts` (20KB  server logic, validation, ledger)
- `components/ReferralApplyBridge.tsx`

---

### **52. Life Memory  Spending Insight Cards (shipped)**

**Job:** Surface interesting spending patterns as bite-sized insight cards  the "Year in Review" style but available monthly.

#### **52.1 Card types**

Each card has: icon, color, title, insight text, and tag. Cards are computed from `transactions`, `bills`, and `leaks` data. Category-specific cards use the app's category system.

#### **52.2 Code**

- `app/life-memory.tsx` (375 lines)

---

### **53. Detail Assist  Contextual Next-Steps (shipped)**

**Job:** Fill the empty space on record view sheets with useful, record-specific actions and information  not generic copy.

#### **53.1 What it produces**

For each record type (bill, document, subscription, travel, vehicle, fitness, appointment, task, wellness, custom, home maintenance):

- **Stats**: e.g. "Days until due: 12", "Last service: 3 months ago"
- **Tips**: contextual advice based on the record's data
- **Actions**: tappable next-steps (e.g. "Set a renewal reminder", "Check coverage")

#### **53.2 Tone system**

Each stat/tip carries a tone: `ok` · `warn` · `danger` · `neutral`  drives the UI color.

#### **53.3 Code**

- `lib/detail-assist.ts` (1,051 lines  pure functions, no React)
- `components/DetailAssist.tsx` (render component)

---

### **54. Airline Check-in Deep Links (shipped)**

**Job:** One-tap web check-in from a travel record.

#### **54.1 Coverage**

IATA-keyed airline check-in URLs: IndiGo (6E), Air India (AI), Air India Express (IX), Vistara (UK), SpiceJet (SG), GoAir (G8), Akasa (QP), Alliance Air (9I), AirAsia India (I5), Emirates (EK), Qatar (QR), Etihad (EY), Singapore (SQ), BA, Lufthansa, Air France, KLM, Turkish, and more.

#### **54.2 IATA → ICAO mapping**

Also provides IATA-to-ICAO mapping for OpenSky callsign lookups in live transit.

#### **54.3 Code**

- `lib/airline-checkin.ts` (143 lines)

---

### **55. Apple Wallet Pass Import (shipped  server)**

**Job:** Import .pkpass files (boarding passes shared from Wallet or Mail) to extract structured travel data  the iOS path that replaces SMS auto-read.

#### **55.1 How it works**

.pkpass is a signed ZIP. `pass.json` inside it already holds: PNR, flight number, seat, gate, and times. No OCR needed  just JSON extraction.

#### **55.2 Privacy**

Raw ZIP bytes are NOT stored. Only mapped structured fields leave the parser.

#### **55.3 Output**

Maps to module `travel` or `task` with title, detail, and extracted fields.

#### **55.4 Code**

- `server/wallet-pass.ts` (200 lines)

---

### **56. Family Automation Engine (shipped)**

**Job:** Proactively surface suggestions and nudges across all modules  the "smart assistant" layer that runs without the user asking.

#### **56.1 Suggestion types**

| Suggestion | Source |
|---|---|
| Due bill / subscription / insurance / vehicle reminder | Bills, subscriptions, vehicles, insurance modules |
| Fitness stall | No workout logged for N days |
| Health gap | No health reading logged for N days |
| Spend jump | Spending this week significantly higher than average |
| Work week summary | Weekly hours + sessions from Work & Shifts |
| Family week digest | Combined family activity summary |

#### **56.2 Architecture**

`lib/family-automation-engine.ts` builds suggestions from pure functions. `lib/family-automation.ts` loads all module data for a member and runs the engine.

#### **56.3 Code**

- `lib/family-automation.ts` (573 lines  data loader + orchestrator)
- `lib/family-automation-engine.ts` (12KB  pure suggestion builders)

---

### **57. Food Nutrition Lookup (shipped)**

**Job:** Show approximate calories on diet cards without requiring a paid nutrition API.

#### **57.1 Database**

Offline lookup table of ~30 common Indian foods (poha, idli, dosa, roti, rice, dal, paneer, chicken, etc.) with: kcal, label, emoji, color, and Unsplash photo URL.

#### **57.2 How it's used**

When a user logs a meal in Diet & Food, the note text is fuzzy-matched against the lookup table. Matching foods show their kcal and photo on the diet card.

#### **57.3 Code**

- `lib/food-nutrition.ts` (75 lines)

---

### **58. Doc Import / DigiLocker Panel (shipped)**

**Job:** Import documents from DigiLocker and other sources into the Insurance & Documents vault.

#### **58.1 Code**

- `lib/doc-import.ts` (handles document import logic)
- `components/DocImportPanel.tsx` (import UI with source selection)

---

### **59. Notification Settings & Sounds (shipped)**

**Job:** Granular control over which notifications the user receives, plus custom notification sounds.

#### **59.1 Settings screen**

`app/notification-settings.tsx` (16KB)  per-category toggles, quiet hours, sound selection.

#### **59.2 Sound system**

`lib/notification-sounds.ts`  custom sounds per notification category (medicine, bill, task, etc.).

#### **59.3 Notification copy**

`lib/notification-copy.ts`  templated notification text with smart variable substitution.

#### **59.4 Code**

- `app/notification-settings.tsx`
- `lib/notification-sounds.ts`, `lib/notification-copy.ts`, `lib/notification-actions.ts`

---

### **60. Admin Panel & Service Monitor (shipped  ops)**

**Job:** Internal admin web app for deployment, monitoring, analytics, campaigns, and security.

#### **60.1 Admin Panel**

A **Next.js** web app deployed on **Amplify** (`admin/` directory). Features:

| Feature | Server file |
|---|---|
| Deploy status board | `server/admin-deploy-status.ts` |
| Analytics dashboard | `server/admin-analytics.ts` |
| App config management | `server/admin-app-config.ts` |
| Broadcast campaigns | `server/broadcast-campaigns.ts` (20KB) |
| Security & WebAuthn | `server/admin-security.ts`, `server/admin-webauthn.ts` |
| Store release management | `server/store-release.ts` (55KB) |
| Plan change management | `server/plan-change.ts` |
| User purge | `server/user-purge.ts` |

#### **60.2 Service Monitor**

`server/service-monitor.ts` (56KB)  live probes for all integrations:

MongoDB · S3 · OpenAI · Puter · Resend · Vision · Gemini · Twilio · Push · Frankfurter.

Each probe reports: latency, key presence, recent errors. Powers the admin "Services" hub.

#### **60.3 Additional ops**

- `server/config-vault.ts`  centralized secret management with `SECRET_CATALOG`
- `server/device-presence.ts`  device heartbeat tracking
- `server/store-version.ts`  app store version checks
- `lib/device-heartbeat.ts`  client-side heartbeat

---

### **61. Localization (shipped)**

The app is fully localized into **7 languages** with complete translation files:

| Language | File | Size |
|---|---|---|
| English | `locales/en.json` | 161 KB |
| Hindi | `locales/hi.json` | 210 KB |
| Gujarati | `locales/gu.json` | 201 KB |
| Bengali | `locales/bn.json` | 193 KB |
| Marathi | `locales/mr.json` | 183 KB |
| Tamil | `locales/ta.json` | 219 KB |
| Telugu | `locales/te.json` | 202 KB |

Hub notifications have a separate translation file: `locales/hubNotify.json` (102 KB).

Translation infrastructure: `lib/i18n.ts` using `react-i18next`.

---

### **62. Vehicle RC / Document Scan (shipped  server)**

**Job:** Parse OCR text from an Indian RC card, insurance copy, or PUC certificate into structured vehicle fields  no DigiLocker / Parivahan partner account required.

#### **62.1 Supported document kinds**

| Kind | Detection heuristic |
|---|---|
| `rc` | "Registration Certificate", "Form 23", "Certificate of Registration" |
| `insurance` | "Insurance", "Policy", "IDV", "Comprehensive", "Third Party" |
| `puc` | "PUC", "Pollution", "PUCC", "Emission" |
| `unknown` | None of the above matched |

#### **62.2 Extracted fields**

- **Registration number:** Indian format (`XX00XX0000` or BH series). Validated via `isValidIndianRc()`.
- **Maker / model:** Matched against 30 makers (Maruti, Hyundai, Royal Enfield, etc.) and 60+ models (Swift, Creta, Splendor, etc.).
- **Vehicle type:** `car` / `bike` / `scooter` based on keywords (LMV, MCWG, brand names).
- **Insurance expiry / PUC expiry:** Date extraction with multi-format parsing (DD/MM/YYYY, DD-Mon-YYYY, etc.).

#### **62.3 Confidence scoring**

| Signal | Weight |
|---|---|
| Registration number found | +0.55 |
| Maker/model found | +0.20 |
| Expiry date found | +0.15 |
| Vehicle type guessed | +0.10 |

`needsReview = true` when no registration number or confidence < 0.7.

#### **62.4 Code**

- `server/vehicle-scan.ts` (183 lines  parser)
- `lib/vehicle-rc.ts` (RC validation, normalization)
- `lib/vehicle-docs.ts` (client helper)

---

### **63. Doc Import / DigiLocker Panel (shipped)**

**Job:** Import documents from multiple sources into the Insurance & Documents vault, with optional OCR classification.

#### **63.1 Import sources**

| Source | How it works |
|---|---|
| **Upload** | Camera photo or file picker (image/PDF, max 12 MB). Compressed before upload. |
| **DigiLocker** | Opens `digilocker.gov.in` in browser → user returns → pick file to import |
| **Parivahan** | Opens `parivahan.gov.in/rcdlstatus/` → user returns → pick file (vehicles only) |
| **Scan** | Routes to Smart Capture for OCR |

#### **63.2 Import pipeline**

1. User picks file or returns from external service
2. Image compressed (`lib/image-compress.ts`)
3. **Parallel:** upload to S3 + OCR classify (vehicle → `scanVehicleDocument`, other → `smart-capture/preview`)
4. Result returned with `fileUrl` + optional `preview` with extracted fields
5. Preview fields prefill the add form

#### **63.3 UI**

`DocImportPanel` shows branded tiles for each source (DigiLocker gets its official logo via `ServiceMark`). Attached file shows green confirmation chip.

#### **63.4 Code**

- `lib/doc-import.ts` (128 lines  source types, pick, import, classify)
- `components/DocImportPanel.tsx` (186 lines  tile UI)
- `components/ServiceMark.tsx` (brand logos for DigiLocker, Parivahan)

---

### **64. Brand Mark System (shipped)**

**Job:** Show recognizable branded color marks on subscription and service cards instead of generic gray circles.

#### **64.1 Database**

80+ known brands with exact brand colors:

- **OTT/Streaming:** Netflix, Spotify, YouTube, Hotstar, Disney+, Prime Video, Zee5, SonyLiv, Apple TV
- **Shopping:** Amazon, Flipkart, Myntra, Nykaa, Swiggy, Zomato, Blinkit, BigBasket
- **Payments:** PhonePe, Paytm, GPay, CRED
- **Finance:** Groww, Zerodha
- **Airlines:** IndiGo, Air India, Vistara, SpiceJet, Akasa, Emirates, Qatar, Singapore Airlines
- **Travel:** IRCTC, MakeMyTrip, Goibibo, Booking.com, Airbnb
- **Telecom:** Airtel, Jio
- **Health:** Apollo, PharmEasy, 1mg, Netmeds, Wellness Forever
- **Government:** DigiLocker, Parivahan
- **Hotels:** Marriott, Hilton, Taj, OYO
- **Tech:** Google, Microsoft, Adobe, ChatGPT, Dropbox, LinkedIn, iCloud

Each entry: `needle` (fuzzy match), `bg` (background hex), `fg` (foreground hex), `domain` (for logo fetch).

#### **64.2 Features**

- `brandMark(name)` → `{ bg, fg, letter }` for colored circle with initial
- `brandDomain(name)` → official domain
- `brandLogoUrls(name)` → Clearbit + Google Favicon + DuckDuckGo icon URLs (cascading fallback)
- Airline code support: `6E` / `AI` / `UK` / `SG` → brand lookup

#### **64.3 Code**

- `lib/brand-mark.ts` (126 lines)
- `components/BrandMark.tsx` (render component)

---

### **65. UPI Pay  In-App Payment Trigger (shipped)**

**Job:** Let users pay a bill directly from LifeWise by opening their preferred UPI app with amount + payee prefilled.

#### **65.1 Supported apps**

| App | Deep link scheme | Platform |
|---|---|---|
| Google Pay | `gpay://`, `tez://` (Android `intent://` preferred) | iOS + Android |
| PhonePe | `phonepe://` | iOS + Android |
| Paytm | `paytmmp://` | iOS + Android |
| Any UPI app | `upi://` (OS chooser) | iOS + Android |
| Apple Pay | `shoebox://`, `wallet://` | iOS only |

#### **65.2 UPI params**

`pa` (payee VPA), `pn` (payee name), `am` (amount), `tn` (note), `tr` (transaction ref), `mc` (merchant category code), `cu=INR`, `mode=04`.

**Important:** `@` in VPA must NOT be percent-encoded  PhonePe and older GPay silently reject `%40`. Custom query builder used instead of `URLSearchParams`.

#### **65.3 MCC codes**

Electricity/water/gas = 4900, Internet/telecom = 4814, Insurance = 6300.

#### **65.4 Fallback chain**

`openGPayOrChooser()`: GPay first (most popular in India) → generic `upi://` chooser → `'failed'`.

#### **65.5 Code**

- `lib/upi-pay.ts` (163 lines)
- `components/PaymentAppIcon.tsx` (app icons)

---

### **66. SMS Reader  Android Expense Detection (shipped, policy-gated)**

**Job:** Read SMS inbox on Android to auto-detect bank transaction messages for expense tracking.

#### **66.1 Policy status**

`SMS_INBOX_ACCESS_ENABLED = true`  enabled for Play Store builds. Requires:
- `READ_SMS` permission declared
- Data Safety form in Play Console (SMS data collected solely for expense auto-detection, not shared)
- **Prominent Disclosure modal** (`SmsProminentDisclosureModal`) shown before any OS permission request or SMS data upload

#### **66.2 Platform support**

- **Android:** Native module reads SMS inbox when permission granted.
- **iOS:** Not supported (Apple blocks SMS access entirely). Statement import (§46) and Gmail fetch (§42) are the iOS alternatives.
- **Web:** Returns empty array.

#### **66.3 Consent flow**

1. User accepts prominent disclosure consent (`sms-consent.ts`)
2. OS permission request
3. Read transactional SMS from inbox
4. Parse via `lib/parse-sms.ts`
5. Results feed into auto-fetch inbox

#### **66.4 SMS Sender**

`lib/sms-sender.ts`  send SMS for check-in / SOS (Android only, with appropriate permissions).

#### **66.5 Code**

- `lib/sms-reader.ts` (228 lines  read, permission, native module seam)
- `lib/sms-sender.ts` (send for check-in/SOS)
- `lib/sms-consent.ts` (prominent disclosure consent state)
- `components/SmsProminentDisclosureModal.tsx` (Play policy disclosure)
- `lib/parse-sms.ts` (transaction message parser)

---

### **67. Notification Settings & Custom Sounds (shipped)**

**Job:** Granular control over notification behavior and unique sounds per feature category.

#### **67.1 Settings screen**

`app/notification-settings.tsx`  per-category notification toggles with:
- Reminder tone picker (Tone 1 / Tone 2)
- General tone picker (LifeWise Signature / Classic Tone 1)
- Vibration toggle
- Quiet hours (start/end time pickers)
- Sound preview (plays through speaker, not earpiece)

#### **67.2 Custom sound kit (25 sounds)**

Each Family Hub feature has its own notification sound:

`medicine` · `sos` · `bill` · `payment` · `arrival` · `battery` · `work` · `celebrate` · `stock` · `appointment` · `health` · `fitness` · `wellness` · `diet` · `study` · `document` · `vehicle` · `maintenance` · `travel` · `checkin` · `invite` · `insights` · `departure` · `resolved`

Plus: `lw_signature.wav` (default), `reminder.wav`, `reminder2.wav`.

#### **67.3 Android channels**

Each sound creates two Android notification channels: `lw_feat_v1_{id}` (with vibration) and `lw_feat_v1_{id}_novib` (without).

#### **67.4 Code**

- `app/notification-settings.tsx` (393 lines)
- `lib/notification-sounds.ts` (150 lines  sound file mapping, channel IDs)
- `lib/notification-copy.ts` (templated notification text)
- `lib/notification-actions.ts` (action button definitions)
- `assets/sounds/lifewise-sound-kit/` (wav files)

---

### **68. Pharmacy Order  Medicine Refill Deep Links (shipped)**

**Job:** One-tap medicine reorder from the Medicine module via popular Indian online pharmacies.

#### **68.1 Supported pharmacies**

| Pharmacy | Search URL pattern |
|---|---|
| Apollo | `apollopharmacy.in/search-medicines/{query}` |
| 1mg (Tata) | `1mg.com/search/all?name={query}` |
| PharmEasy | `pharmeasy.in/search/all?name={query}` |
| Wellness Forever | `wellnessforever.com/search?q={query}` |
| Netmeds | `netmeds.com/catalogsearch/result?q={query}` |

#### **68.2 Smart matching**

`preferredPharmacyId(pharmacyName)`  if the user has a pharmacy preference stored, it fuzzy-matches the name to return the preferred pharmacy.

#### **68.3 Code**

- `lib/pharmacy-order.ts` (57 lines)

---

### **69. Store Review Prompt (shipped)**

**Job:** Ask for App Store / Play Store reviews at the right moment  after a positive experience, not on first launch.

#### **69.1 Review flow**

1. `lib/rating-context.tsx` tracks usage milestones and positive moments
2. `components/RatingModal.tsx` shows in-app rating modal
3. High rating → `expo-store-review` native in-app review sheet
4. Fallback → open store listing URL (`market://` on Android, `itms-apps://` on iOS)
5. Low rating → show feedback form instead of store redirect

#### **69.2 Platform behavior**

- **iOS:** `expo-store-review` → native SKStoreReviewController
- **Android:** `expo-store-review` → Google Play in-app review API → fallback to `market://details?id=com.lifewise`
- **Web:** Opens Play Store URL
- **Expo Go:** Graceful fallback (lazy `require`)

#### **69.3 Code**

- `lib/store-review.ts` (78 lines  open review, store listing, app version)
- `lib/rating-context.tsx` (trigger logic)
- `lib/rating-prompt-state.ts` (state tracking)
- `components/RatingModal.tsx` (rating UI)

---

### **70. Date Range Filter (shipped)**

**Job:** Reusable date range picker component used across Reports, Transactions, and any list screen that needs time filtering.

#### **70.1 Code**

- `lib/date-range-filter.ts` (9.6 KB  range computation, presets: today/week/month/quarter/year/custom)
- `components/DateRangeFilter.tsx` (16.8 KB  picker UI with calendar, presets, and range display)

---

### **71. App Update Gate (shipped)**

**Job:** Force users to update when a critical app version is released; gently nudge on optional updates.

#### **71.1 Update kinds**

| Kind | Behavior |
|---|---|
| `required` | Full-screen blocker. Cannot dismiss. App is unusable until updated. |
| `optional` | Banner/modal. User can snooze for 12 hours per version. |
| `none` | No update needed. |

#### **71.2 Version check**

`GET /api/app/update-check?platform={ios|android}&version={x.y.z}&build={n}`  server returns latest version, min version, update kind, release notes, and store URLs.

#### **71.3 Decision logic**

`lib/app-version.ts`  `decideUpdateKind()` compares installed vs latest vs min using semver + build number. Server can override with explicit `update` field.

#### **71.4 Maintenance mode**

Server can set `maintenanceMode: true` to show a maintenance screen across all clients.

#### **71.5 Code**

- `lib/app-update.ts` (168 lines  fetch, version check, snooze, store open)
- `lib/app-version.ts` (version comparison)
- `components/AppUpdateGate.tsx` (UI blocker/banner)
- `server/store-version.ts` (server-side version management)

---

### **72. Device Heartbeat & Presence (shipped)**

**Job:** Track which devices are actively using the app  for analytics, push targeting, and admin visibility.

#### **72.1 Client heartbeat**

On login / app open, `reportDeviceHeartbeat()` sends:
- `platform`: ios / android / web
- `formFactor`: phone / tablet / desktop (via `expo-device`)
- `appVersion`, `buildNumber`
- `timezone`

Endpoint: `POST /api/me/presence`. Best-effort  never blocks login.

#### **72.2 Server presence**

`server/device-presence.ts` (12 KB)  stores device records, tracks last seen, powers admin analytics.

#### **72.3 Code**

- `lib/device-heartbeat.ts` (38 lines  client reporter)
- `server/device-presence.ts` (server storage + queries)

---

### **73. Home Hub Shortcuts  Quick Reach (shipped)**

**Job:** One-tap access from the Home tab to a Family Hub module for a specific member  skipping the Family Hub → member card → module navigation chain.

#### **73.1 Shortcut types**

| Kind | Routes to | Feature key |
|---|---|---|
| `location` | `/family-location/[memberId]` | `location` |
| `expenses` | `/family-expenses/[memberId]` | `expenses` |
| `work` | `/family-work/[memberId]` | `work` |

#### **73.2 Member resolution**

1. Remember last-used member per shortcut kind (AsyncStorage)
2. On next tap: if remembered member still has the module → go directly
3. If only one eligible member → go directly
4. Otherwise → show member picker

#### **73.3 Caregiver awareness**

For shared members, shortcuts only appear for modules the caregiver has permission to access. Uses `canAccessModule()` + `normalizeCaregiverPermissions()`.

#### **73.4 Code**

- `lib/home-hub-shortcuts.ts` (145 lines  resolution logic, member loading)
- `components/HomeHubShortcutPicker.tsx` (picker UI)

---

### **74. Module Usage Tracking (shipped)**

**Job:** Track which Family Hub modules users actively open so the product can prioritize development.

#### **74.1 Code**

- `lib/module-usage.ts` (tracks opens per module key, reports to server)

