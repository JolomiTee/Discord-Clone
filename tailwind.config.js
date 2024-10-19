/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("tailwindcss-animate")],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			onyx: '#1C1C1F',
    			carbon: '#27282B',
    			charcoal: '#313338',
    			graphite: '#2C2D31',
    			crimson: '#F23F42',
    			emerald: '#3BA55C',
    			gray: '#898989',
    			'soft-blue': '#B5BFE7',
    			'discord-blue': '#5865F2'
    		},
    		fontFamily: {
    			'open-sans': ["OpenSans", "serif"]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
};
