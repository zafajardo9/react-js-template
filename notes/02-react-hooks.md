# React Hooks Reference (What / When / Where / How)

Each section explains the hook or helper you can import from `react`, when to reach for it, where it typically lives in OntoFlow, and a quick usage example.

| Hook / Helper                  | When to Use                                                                                  | Where It Fits                                                                                              | Example |
| ------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| `createContext` + `useContext` | Share values (form instances, theme, services) across many components without prop drilling. | `app/providers/ReactHookFormProvider.jsx` defines the context; feature components call the companion hook. | ```js   |

const FormContext = createContext(null);
export const useFormContext = () => useContext(FormContext);

````|
| `useState` | Local component state (toggles, selected IDs) before promoting to a store. | Inside feature hooks or components like `useEntitySelection`. | ```js
const [selectedEntity, setSelectedEntity] = useState(null);
``` |
| `useEffect` | Run side effects (fetching, subscriptions) when dependencies change. | `useSchema` fetches metadata when the component mounts. | ```js
useEffect(() => {
  fetchSchema().then(setData);
}, []);
``` |
| `useMemo` | Cache expensive computations or derived data based on dependencies. | Graph hooks that convert schema entities into ReactFlow nodes/edges. | ```js
const nodes = useMemo(() => buildNodes(entities), [entities]);
``` |
| `useCallback` | Memoize callback props passed to child components to avoid unnecessary rerenders. | Passing handlers (e.g., `onSelectEntity`) down to graph nodes. | ```js
const handleSelect = useCallback((id) => selectEntity(id), [selectEntity]);
``` |
| `useReducer` | Manage complex state transitions (multiple actions). | Could power a form wizard or advanced entity editing tool if state grows. | ```js
const [state, dispatch] = useReducer(reducer, initialState);
``` |
| `useRef` | Persist mutable values between renders without causing rerenders (DOM nodes, timers). | Storing ReactFlow instance or keeping previous schema reference. | ```js
const graphInstance = useRef(null);
``` |
| `useId` | Generate stable unique IDs for accessibility attributes. | Form fields when you need `label` -> `input` associations auto-wired. | ```js
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />
``` |
| `useTransition` | Keep the UI responsive during state transitions by marking updates as low priority. | Switching between entities while ReactFlow is rendering heavy graphs. | ```js
const [isPending, startTransition] = useTransition();
startTransition(() => selectEntity(id));
``` |
| `useDeferredValue` | Defer expensive computations tied to rapidly updating values (search filters). | Debouncing schema filters when typing fast. | ```js
const deferredQuery = useDeferredValue(query);
``` |

## Quick Tips
- Group context creation + custom hooks in the same file so consumers never import raw contexts.
- Prefer `useCallback`/`useMemo` only when prop changes cause real performance issues; start simple.
- Keep side effects (`useEffect`) inside hooks (`useSchema`) instead of dumping them in UI components.
- When state grows beyond simple `useState`, move it into `useReducer` or a Zustand store (`features/entityExplorer/state`).
- Document inputs/outputs with JSDoc, even in `.js` files, to keep IntelliSense strong.
````
