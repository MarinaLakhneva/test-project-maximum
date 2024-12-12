import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useModelStore = create(
	persist(
		(set) => ({
			modelData: null,
			setModelData: (data) => set({ modelData: data }),
		}),
		{
			name: 'model-storage',
		}
	)
)
