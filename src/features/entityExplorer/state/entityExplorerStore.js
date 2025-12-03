import { create } from 'zustand';

export const useEntityExplorerStore = create((set) => ({
  selectedEntity: null,
  selectEntity: (id) => set({ selectedEntity: id }),
}));
