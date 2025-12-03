# OntoFlow Folder Structure Reference

## Why this structure matters

- **Contracts stay centralized**: `lib/types.ts` (or `lib/types.js` if you prefer plain JS) remains the single source for `FieldSchema`, `EntitySchema`, and `SchemaResponse`, keeping frontend and BFF aligned.
- **BFF boundary stays clean**: `bff/schema.ts` handles all calls to `/api/schema`, so UI code never touches raw backend data.
- **Metadata-driven UI engine has a home**: `components/form` contains `FormGenerator`, `FieldRenderer`, and field primitives so the renderer logic can evolve like an SDK.
- **Visualization stays modular**: `components/graph` + `features/entityExplorer` make it easy to plug in ReactFlow and manage linked form state.
- **Routing & layout separated**: `app/` holds providers, routers, and shell pages for split-panel layouts and suspense boundaries.

## Recommended directory layout

```
src/
├── app/
│   ├── providers/
│   │   └── ReactHookFormProvider.jsx
│   ├── routes/
│   │   └── schema/
│   │       ├── SchemaPage.jsx
│   │       └── index.js
│   └── router.jsx
├── bff/
│   └── schema.js
├── components/
│   ├── form/
│   │   ├── FormGenerator.jsx
│   │   ├── FieldRenderer.jsx
│   │   └── fields/
│   ├── graph/
│   │   ├── EntityGraph.jsx
│   │   └── hooks/
│   └── layout/
│       └── SplitPanel.jsx
├── features/
│   └── entityExplorer/
│       ├── hooks/
│       │   ├── useSchema.js
│       │   └── useEntitySelection.js
│       ├── state/
│       │   └── entityExplorerStore.js
│       └── utils/
│           └── schemaTransforms.js
├── lib/
│   ├── types.js
│   ├── constants.js
│   └── utils.js
├── pages/
│   └── index.jsx
├── styles/
│   ├── globals.css
│   └── tokens.css
└── tests/
    ├── unit/
    └── integration/
```

> Tip: even in JavaScript, keep the schema contracts in one module and reuse those objects everywhere so your runtime checks act like a lightweight type system.

## Folder-by-folder cheat sheet

### `app/`

- **providers/** – keep global contexts (React Hook Form, theme, query clients). Tip: export hooks (`useFormContext`) from the same file so consumers never import raw contexts.
- **routes/** – page-level shells. `schema/SchemaPage.jsx` is where SplitPanel layout, hooks, and major components meet. Tip: keep these files thin; if logic grows, push it into feature hooks.

### `bff/`

- Contains fetchers and transformation helpers that speak to `/api/schema`. Tip: mirror the server contract names so you can spot drift instantly.

### `components/`

- **form/** – `FormGenerator`, `FieldRenderer`, and field primitives. Tip: keep props typed via JSDoc so IDE hints stay strong even in JS.
- **graph/** – ReactFlow-focused components + hooks. Tip: pair UI elements with `useReactFlowEntities` so data modeling stays close to the visualization.
- **layout/** – structural wrappers like `SplitPanel`. Tip: avoid business logic here; these components should only care about layout concerns.

### `features/entityExplorer/`

- **hooks/** – `useSchema`, `useEntitySelection`. Tip: export status flags (loading, error) so UI can branch without duplicating logic.
- **state/** – global stores (e.g., Zustand) for cross-panel coordination.
- **utils/** – schema transformations, mappers, derived data. Tip: keep these pure functions so they’re easy to test.

### `lib/`

- Reusable constants, schema contracts, helper utilities. Tip: treat this folder like your project’s “SDK”; everything else should consume its exports instead of redefining shapes.

### `pages/`

- Entry points for React Router or Vite Router. Tip: re-export route components from `app/routes` to keep navigation definitions centralized.

### `styles/`

- Global styles or design tokens. Tip: keep component-specific styles co-located next to components unless they’re true globals.

### `tests/`

- `unit/` for focused component and util tests; `integration/` for graph+form interaction scenarios. Tip: mirror the folder structure inside tests to find specs quickly.

## How to talk about it in interviews

1. **Start with contracts**: describe how the types in `lib/` force a shared language across layers.
2. **Explain the BFF layer**: point to `bff/schema.ts` and how it shields the UI from backend churn.
3. **Highlight metadata-driven UI**: walk through `components/form` and how `FormGenerator` + `FieldRenderer` dynamically render fields.
4. **Describe visualization + state sync**: show how `components/graph` plus `features/entityExplorer` enable ReactFlow nodes and form selection to stay in sync.
5. **Wrap with extensibility**: emphasize that each folder can evolve independently, which is the senior-level architecture story.
