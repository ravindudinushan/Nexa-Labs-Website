// export default {
//   content: [
//   './index.html',
//   './src/**/*.{js,ts,jsx,tsx}'
// ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#10245e", // Deep navy blue from new brand identity
//           light: "#1e3a7b",
//           dark: "#091940",
//         },
//         "bright-blue": "#4dabf7", // Bright blue from new brand identity
//         secondary: {
//           DEFAULT: "#f8f9fa", // Light gray background
//         },
//         accent: {
//           DEFAULT: "#e9ecef", // Light gray accent
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       animation: {
//         'gradient-x': 'gradient-x 10s ease infinite',
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': {
//             'background-size': '200% 200%',
//             'background-position': 'left center'
//           },
//           '50%': {
//             'background-size': '200% 200%',
//             'background-position': 'right center'
//           },
//         },
//       },
//     },
//   },
  
//   plugins: [],
// }
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10245e", // Deep navy blue from new brand identity
          light: "#1e3a7b",
          dark: "#091940",
        },
        "bright-blue": "#4dabf7", // Bright blue from new brand identity
        secondary: {
          DEFAULT: "#f8f9fa", // Light gray background
        },
        accent: {
          DEFAULT: "#e9ecef", // Light gray accent
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'spin-slow': 'spin-slow 20s linear infinite',
        'orbit': 'orbit 15s linear infinite',
        'orbit-reverse': 'orbit-reverse 12s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '33%': {
            transform: 'translateY(-15px) translateX(10px)',
          },
          '66%': {
            transform: 'translateY(10px) translateX(-5px)',
          },
        },
        'slide-in-left': {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'spin-slow': {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'orbit': {
          '0%': {
            transform: 'rotate(0deg) translateX(120px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(120px) rotate(-360deg)',
          },
        },
        'orbit-reverse': {
          '0%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
          '100%': {
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(77, 171, 247, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(77, 171, 247, 0.8), 0 0 60px rgba(77, 171, 247, 0.3)',
          },
        },
      },
      // Animation delays
      animationDelay: {
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s',
        '700': '0.7s',
        '1000': '1s',
      },
      // Backdrop blur utilities
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Custom plugin for animation delays
    function({ addUtilities }) {
      const newUtilities = {
        '.delay-200': {
          'animation-delay': '0.2s',
        },
        '.delay-300': {
          'animation-delay': '0.3s',
        },
        '.delay-500': {
          'animation-delay': '0.5s',
        },
        '.delay-700': {
          'animation-delay': '0.7s',
        },
        '.delay-1000': {
          'animation-delay': '1s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}