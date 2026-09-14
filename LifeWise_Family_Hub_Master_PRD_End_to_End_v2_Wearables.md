# **LIFEWISE** 

## **Family Hub — Existing UI Upgrade + New Feature PRD** 

##### **Developer + AI Builder Master Specification** 

End-to-end UI, UX, navigation, business logic, data, sync, permissions, states and acceptance criteria 

|**Document**|**Value**|
|---|---|
|Product|LifeWise — FamilyOperatingSystem|
|Primarysurface|FamilyHub|
|Base UI|ExistingFamilyHub / member-card UI shown by product team|
|Existingmodules|Medicines,Health Monitoring,Bill Management,DailyRoutine|
|New modules|FamilyLedger,FamilyLocation,expanded Health Sync|
|Platforms|iOS + Android|
|Architecture baseline|React Native Expo + Node.js + MongoDB + Firebase FCM + Socket.io<br>|
|Document status|Implementation-readyspecifcation|



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

LifeWise Family Hub — Implementation PRD 

- Existing architecture: React Native Expo, Redux Toolkit/RTK Query, React Navigation, Node/Express, MongoDB/Mongoose, Firebase Auth/FCM, Socket.io, S3 and OCR. 

Source: supplied LifeWise PRD. Key references: Family Hub and module selection; member card and dashboard; expense tracking; bills; reminders; insights; architecture. 

### **3. Existing vs New vs Redesigned** 

|**Area**|**Status**|**Action**|
|---|---|---|
|Family Hub|Existing|Redesign lightly; preserve structure and<br>visual identity.|
|Member Card|Existing + upgrade|Add dynamic new module icons; keep only<br>selected icons.|
|Manage Member Dashboard|Existing + upgrade|Add Family Ledger and Location to Modules<br>and Overview.<br>|
|Medicines|Existing|Keep; fx empty/error states and connect<br>reminders.|
|Health Monitoring|Existing + major upgrade|Add Apple Health / Android Health Connect<br>sync and more ftness/wellness data.|
|Bill Management|Existing|Keep as due-payment/reminder module;<br>connectpaid bills to Ledger.|
|DailyRoutine|Existing|Keep;integrate with central Reminders.|
|Expense Tracking|Existing|Convert family-facing experience into<br>Family Ledger; retain personal expense<br>capabilitywhere needed.|
|Family Ledger|NEW|New family money module for shared<br>expenses, contributions, balances and<br>reports.|
|Family Location|NEW|New consent-based family location and<br>safe-place module.|
|Family Sync|Existing infrastructure + expansion|Use Socket.io family room for new<br>Ledger/Location/Health events.|
|Insights|Existing + expansion|Add family money, contribution, location<br>activityand health-sync summaries.|



### **4. Naming Decision** 

Replace the user-facing name “Khatabook” with: 

**Family Ledger** — Track shared expenses & family money 

Reason: it covers more than expense entry. It can represent who paid, what was spent, who benefited, shared contributions and balances. 

Keep “Bill Management” separate. 

|**Module**|**Meaning**|**Example**|
|---|---|---|
|Bill Management|What needs to bepaid and when?|Electricity₹2,400 due 15 Sep.|
|FamilyLedger|Where did familymoney go and whopaid?|Dadpaid ₹2,400 electricityfor Family.|



Rule: A bill is an obligation. A ledger transaction is a financial event. When a bill is marked Paid, it may create a linked ledger transaction, but the two records remain separate. 

### **5. Family Hub — Final Information Architecture** 

Family Hub │ 

LifeWise Family Hub — Implementation PRD 

├── Member Card: Ruchit 

│├── Medicines 

- │├── Health Monitoring 

- │├── Bill Management 

- │├── Daily Routine 

- │├── Family Ledger 

│└── Family Location │ ├── Manage → Member Dashboard │├── Overview 

│├── 

   - Reminders 

- │├── Health 

- │├── Documents 

- │├── Modules 

│└── Settings │ 

- └── Global shortcuts 

├── Add Member / Add Feature ├── Notifications 

├── Insights 

└── WiseAI 

#### **6. Family Hub UI Redesign** 

- Header: Family Hub + existing subtitle; keep the current + and member-add controls. 

- Member Card: avatar, member name, relation, selected module icons, managed-module count, caregiver/managed-by row and Manage. 

- Module icons are dynamic: never show a default icon for an unselected module. 

- New modules use the same icon-card visual language as existing modules. 

- Add a compact “Family tools”/“New features” shortcut area only if screen space allows; otherwise rely on member Manage → Modules. 

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

LifeWise Family Hub — Implementation PRD 

### **8. Family Ledger — Complete Specification** 

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

LifeWise Family Hub — Implementation PRD 

→ Paid by: Ruchit 

- → For: Family 

Family Ledger: Dad contributed ₹10,000 Ruchit contributed ₹2,000 Family spending = ₹12,000 

#### **8.5 Important rule: Ledger ≠ Bank Sync** 

- Primary entry method is manual Add Expense. 

- Family Sync means authorized family members see changes without refresh. 

- Bank/UPI transaction import is a separate future integration and must not be required for the core ledger to work. 

- If a future statement/PDF import is added, imported transactions must enter a Review queue before posting to the Ledger. 

### **9. Bill Management — Keep Separate but Connected** 

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

### **10. Health Monitoring — Existing UI + Major Upgrade** 

Preserve the existing Health Monitoring screen: title, member name, + button and horizontal metric filters. Fix missing translation labels and expand the metric set. 

#### **10.1 Recommended tabs** 

All | Blood Pressure | Blood Sugar | Weight | Heart Rate | Oxygen | Steps | Sleep | Activity | Water 

#### **10.2 Data sources** 

|**Platform**|**Source**|**Behavior**|
|---|---|---|
|iOS|Apple Health / HealthKit|User grants granular permissions; LifeWise<br>readspermitted health/ftness data.|
|Android|Health Connect|<br>User grants read permissions;<br>background/historical access is requested<br>onlywhen needed.|
|Any|Manual|User can manually log readings if sync is<br>unavailable or denied.|



LifeWise Family Hub — Implementation PRD 

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

### **11. Family Location — New Module** 

Purpose: consent-based family location visibility, not covert tracking. 

#### **11.1 Setup** 

Family Hub 

- → Member 

- → Manage 

- → Modules 

- → Family Location 

- → Member consent 

- → Location permission 

- → Choose who can view 

LifeWise Family Hub — Implementation PRD 

→ Optional Safe Places → Save 

#### **11.2 Main UI** 

- Map view with authorized family members. 

- Member list below map with last update time. 

- Tap member → location detail. 

- Safe Places: Home, School, Work, Hospital or custom. 

- Arrival/departure alerts only when explicitly enabled. 

- Member can pause sharing. 

- Show “Location sharing paused” rather than stale location without explanation. 

#### **11.3 Location data model** 

|**Field**|**Purpose**|
|---|---|
|member_id|Owner of location.|
|latitude/longitude|Current location.|
|accuracy_m|Location accuracy.|
|captured_at|When device captured it.|
|received_at|When server received it.|
|sharing_enabled|Consent state.|
|viewers|Authorized family/caregiver users.|
|source|Device/provider.|



#### **11.4 Battery/privacy rules** 

- Do not promise a fixed 5-minute update interval across iOS and Android; OS scheduling is adaptive. 

- Use platform-approved background location mechanisms. 

- Show permission rationale before system prompt. 

- Provide Stop Sharing in one tap. 

- Do not retain precise location indefinitely; define retention and delete old points unless required for an enabled history feature. 

### **12. Member Dashboard — Final Layout** 

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

LifeWise Family Hub — Implementation PRD 

- Family Ledger - Family Location 

- Only modules assigned to the member appear in the Modules tab. 

- Overview cards are compact and tappable. 

- Each card navigates directly to the related module. 

### **13. Navigation Map** 

Bottom Navigation Home Family Hub Reminders Insights Profile 

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
|SpendingOverview|Include FamilyLedger totals and member contributions.|
|Bills Tracker|Keepbill obligations separate;show linkedpaid amount.<br>|
|Health Summary|Add synced ftness/vitals source and latest sync time.|



LifeWise Family Hub — Implementation PRD 

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



LifeWise Family Hub — Implementation PRD 

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



### **21. UI States — Must Be Designed** 

|**State**|**Required UI**|
|---|---|
|Empty|Illustration/icon + useful CTA;never blank screen.|
|Loading<br>|Skeletons for cards/lists;avoid blockingentire app.|
|Ofline|Banner +queued/pendingstatus.|
|Permission denied|Explain why+ Enable/RetryCTA.|
|No syncyet|“Not connected” + Connect CTA.|
|Syncing|Subtle “Syncing…” indicator.|
|Synced|“Synced 2 min ago” or equivalent.|
|Error|Human-readable message + Retry.|
|Deleted/disabled module|Historical datapreserved;module marked inactive.|



LifeWise Family Hub — Implementation PRD 

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

###### EXISTING MODULES: 

- Medicines 

- Health Monitoring 

- Bill Management 

- Daily Routine 

###### NEW MODULES: 

- Family Ledger 

- Family Location 

###### UPGRADE: 

- Health Monitoring with Apple Health on iOS and Health Connect on Android. 

- Insights with family ledger data. 

- Real-time family synchronization for authorized data. 

FAMILY LEDGER: User flow: 

Family Hub → Member → Manage → Modules → Family Ledger → Overview. 

Add Expense requires Amount, Category, Paid By, Expense For, Payment Method, Date, Note and optional Receipt. Keep Bill Management separate. A bill represents an obligation/due payment. A ledger transaction represents a financial event. When a bill is marked Paid, ask whether to create a linked ledger transaction. Never create duplicate transactions. 

###### HEALTH: 

Keep existing Health Monitoring UI but expand filters to supported vitals/fitness. Use HealthKit on iOS and Health Connect on Android. 

Request granular permissions in context. Store source, timestamp and source record ID when available. Keep manual logging available if permission is denied. 

Do not claim medical diagnosis. 

###### LOCATION: 

Create consent-based Family Location module. 

Member must explicitly enable sharing. User can choose authorized viewers. 

LifeWise Family Hub — Implementation PRD 

Support current location, last updated time, safe places and pause sharing. 

Do not silently track. Respect platform background-location behavior and battery constraints. 

###### MODULE ARCHITECTURE: 

Member card icons are dynamic and show ONLY selected modules. Module selection is multi-select. 

Module setup screen is dynamically generated from selected modules. Disabling a module must preserve historical data. 

###### REAL-TIME: 

Use existing Socket.io family room architecture. 

Emit events for ledger changes, health sync updates and location-sharing changes. Update Redux/RTK Query cache without full-screen reload. Provide REST fallback and offline queue. 

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

- ☐ Family Location requires explicit sharing permission. 

- ☐ Location viewers are enforced by backend authorization. 

- ☐ Pause sharing hides future location updates. 

- ☐ Offline ledger action queues and later syncs. 

- ☐ Duplicate offline retries do not create duplicate records. 

- ☐ Insights includes family spending. 

- ☐ Raw translation keys are removed. 

- ☐ All loading/empty/error/offline states are implemented. 

- ☐ Removing a module does not delete its historical data. 

LifeWise Family Hub — Implementation PRD 

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

LifeWise Family Hub — Implementation PRD 

### **28. NEW REQUIRED SECTION — Wearables & Fitness Device Sync** 

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

#### **28.5 Direct vendor integrations — optional but architected** 

The backend must be designed so a vendor connector can be added without changing the LifeWise health UI or normalized health schema. 

|Source|Primary path|Direct API requirement|Notes|
|---|---|---|---|
|Apple Watch|HealthKit|No for standard HealthKit<br>data|Use HealthKit permissions<br>andqueries.|
|Samsung Galaxy Watch|Samsung Health → Health<br>Connect|Usually no|Galaxy Watch data reaches<br>Health Connect via Samsung<br>Health when synced.<br>|
|Garmin|Garmin Connect|Yes when using Garmin<br>direct APIs|Garmin ofers<br>Health/Activity APIs;<br>commercial use mayrequire|



LifeWise Family Hub — Implementation PRD 

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

- Apple Health — Connected 

- Health Connect — Connected 

- Samsung Health — Available through Health Connect 

- Garmin — Connect account (only when direct connector is enabled) 

- Other sources — Detected through platform health hub 

Each source card should show: connection status, last sync, metrics available, permission/manage action, and disconnect action. 

#### **28.8 User experience for a smartwatch** 

User wears smartwatch 

- → Watch records heart rate / steps / sleep / workout 

- → Watch companion ecosystem receives data 

- → Platform health store receives data 

- → LifeWise sync worker detects new/changed records 

- → Normalize units + timestamps + source 

LifeWise Family Hub — Implementation PRD 

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

#### **28.11 Real-time vs eventual sync — product wording** 

Do not promise that every wearable metric will appear literally every second. Actual update timing depends on the device, companion app, platform, permissions, battery policy and background execution rules. The UI should say “Last synced …” and provide “Sync now” where a foreground refresh is possible. 

#### **28.12 Family sharing of synced health data** 

Wearable source → Member's HealthKit / Health Connect 

→ LifeWise private health store 

→ Member chooses family-sharing permission 

→ Authorized caregiver/family clients receive permitted summary/trend data 

→ Unauthorized members receive no data 

LifeWise Family Hub — Implementation PRD 

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

#### **28.16 Developer acceptance criteria — wearables** 

☐ A user can connect Apple Health on iOS from Health Monitoring. 

☐ A user can connect Health Connect on Android from Health Monitoring. 

☐ If Apple Watch or another compatible source is writing data into HealthKit, LifeWise can read the permitted supported metrics. 

☐ If Galaxy Watch data is available through Samsung Health + Health Connect, LifeWise can read the permitted supported metrics. 

☐ The app detects source/metric availability before displaying a connected metric. 

☐ Every imported record retains source and timestamp metadata. 

☐ Imported data is deduplicated. 

☐ Manual data and imported data coexist without silent overwrite. 

☐ Family sharing is controlled separately from platform health permission. 

LifeWise Family Hub — Implementation PRD 

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

YES — the final product requirement should explicitly include smartwatch, fitness-band, ring and compatible health-device synchronization. The safest scalable implementation is not “connect every watch directly.” It is “connect the platform health hub first, then add direct vendor connectors where needed.” This keeps the Health Monitoring UI consistent while allowing the device ecosystem to grow. 

LifeWise Family Hub — Implementation PRD 

