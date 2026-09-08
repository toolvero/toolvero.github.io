# Toolvero v2.1.1 — Final Search Fix 2

This corrects the regression where the search bar disappeared after typing.

Behavior:
- Hero and search bar always remain visible.
- While searching, only the normal `<main>` catalog is hidden.
- Matching results appear directly below the search bar.
- Clearing the query restores the complete 32-tool homepage.

Tests:
- `dns pro` → visible DNS Propagation Checker
- `compose validator` → visible Docker Compose Validator
- `dns` → all DNS-related matches
- clear query → full homepage and 32 tools

Suggested commit:
`Fix Toolvero v2.1.1 search bar visibility`
