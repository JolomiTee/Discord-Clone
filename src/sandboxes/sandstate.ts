import { create } from "zustand";
interface SandStateProps {
	c_sidebar_state: boolean;
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;
	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
	toggle_c_sidebar: () => void;
}

export const useSandStateStore = create<SandStateProps>()((set) => ({
	c_sidebar_state: false,
	l_sidebar_state: true,
	r_sidebar_state: false,

	toggle_c_sidebar: () =>
		set((state) => ({
			c_sidebar_state: !state.c_sidebar_state,
		})),
	toggle_l_sidebar: () =>
		set((state) => ({
			l_sidebar_state: !state.l_sidebar_state,
		})),
	toggle_r_sidebar: () =>
		set((state) => ({
			r_sidebar_state: !state.r_sidebar_state,
		})),

}));