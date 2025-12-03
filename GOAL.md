That is a great request. Before we dive into the code, you need a **clear, high-level map** of the entire project, its purpose, and what key architectural concepts you are practicing.

Here is the complete description of the **"OntoFlow"** project, detailing your learning objectives for each phase.

---

## 🗺️ Project Overview: OntoFlow (Dynamic Ontology Explorer)

**Goal:** To build a single-page application that demonstrates the **Metadata-Driven UI** pattern and a professional **Backend-for-Frontend (BFF)** architecture. This project showcases your ability to design systems that are flexible, scalable, and built on well-defined data contracts.

| JD Requirement               | Practiced in OntoFlow                                                         |
| :--------------------------- | :---------------------------------------------------------------------------- |
| **Frontend Architecture**    | The entire system is component-based and strongly typed via shared contracts. |
| **BFF**                      | Next.js API Routes (Phase 1) transform and serve the configuration.           |
| **Metadata-Driven UI**       | The forms are built dynamically based on the schema (Phase 2).                |
| **ReactFlow**                | Used to visualize the semantic relationships between entities (Phase 3).      |
| **Semantic Data (RDF/OWL2)** | Simulated using the JSON-LD principles of entity relationships (Phase 1 & 3). |

---

### Tech Stack (React + JavaScript)

- **Framework:** React 18 + Vite with modern JavaScript modules.
- **State & Forms:** React Hook Form (or similar) for metadata-driven forms and Zustand/Jotai for shared selection state.
- **Visualization:** ReactFlow for semantic graphs.
- **BFF Layer:** Next.js-style API route (or serverless handler) returning the canonical `SchemaResponse` contract.
- **Testing:** Vitest/Testing Library with JSX-friendly assertions.

Even though we are in JavaScript, keep the contract definitions (`FieldSchema`, `EntitySchema`, `SchemaResponse`) centralized so the frontend and BFF remain in sync.

## 🎯 Phase 1: The Contract and The BFF Layer (Completed)

**Task:** Establish the rigid data protocol and the API endpoint.

| Concept to Master              | Description & Why It Matters                                                                                                                                                                                                                                       |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strict Typing (TypeScript)** | Defining `FieldSchema`, `EntitySchema`, and `SchemaResponse` (in `lib/types.ts`). This is the **most crucial** part—it forces all parts of the system (frontend and BFF) to speak the exact same language, preventing bugs and enforcing architectural discipline. |
| **Backend-for-Frontend (BFF)** | The `app/api/schema/route.ts` endpoint. Its job is to take raw, messy data from an imaginary backend and **shape it** into the clean `SchemaResponse` contract. This protects the frontend from backend changes.                                                   |

---

## 🏗️ Phase 2: The Metadata-Driven UI Engine

**Task:** Build the core logic that reads the JSON schema and automatically renders the appropriate UI components.

| Concept to Master         | Description & Why It Matters                                                                                                                                                                                                                                             |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Component Composition** | You will create a `<FormGenerator />` that iterates through the `EntitySchema.fields`. Inside it, a `<FieldRenderer />` component will dynamically choose and render the correct input (`<Input type="text" />`, `<Select />`, etc.) based on the `field.type` property. |

[Image of component composition diagram]
|
| **Dynamic State Management** | The form state must handle arbitrary data structures. We will use a library like **React Hook Form** to manage the state of fields that didn't exist until the schema was fetched, proving the application is truly flexible. |
| **Reusable Components (SDK Thinking)** | The core renderer logic should be extracted and designed so it can be reused in any part of the application, proving your ability to build **SDKs/Developer Tools** for other teams (as mentioned in the JD). |

---

## 📊 Phase 3: The Visual Graph Explorer

**Task:** Integrate **ReactFlow** to display the relationships between the entities defined in your schema.

| Concept to Master                  | Description & Why It Matters                                                                                                                                                                            |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data Visualization (ReactFlow)** | You will map the `EntitySchema` objects into **ReactFlow Nodes** (the boxes) and the `field.linkedEntity` properties into **ReactFlow Edges** (the lines). This visualizes the semantic data structure. |
| **Semantic Data Modeling**         | By showing how the `employee` entity has an edge to the `department` entity, you demonstrate understanding of the **Subject-Predicate-Object** triplet that underpins RDF/OWL2 (Semantic Web).          |
| **Bi-Directional State**           | Advanced: If you select a Node in the graph (e.g., 'Department'), the form on the side should instantly switch to show the form for that entity. This proves complex, synchronized state management.    |

---

## ✅ Deliverable for Interview

The final project will be a single page showing two synchronized panels:

1.  **Left Panel:** A visual graph powered by **ReactFlow**, showing the "Employee" node connected to the "Department" node.
2.  **Right Panel:** A **dynamically rendered form** that changes based on which entity is selected in the graph.

This setup is a powerful demonstration of **architectural leadership** and mastery of the specific requirements of the job.

**We are now ready to start Phase 2: Building the Dynamic UI Engine.**
