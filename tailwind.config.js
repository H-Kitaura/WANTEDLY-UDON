/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: "0",
            },
            "100%": {
                opacity: "1",
            },
        },
        "fade-out": {
            from: {
                opacity: "1",
            },
            to: {
                opacity: "0",
            },
        },
        "fade-in-down": {
            "0%": {
                opacity: "0",
                transform: "translateY(-20px)",
            },
            "100%": {
                opacity: "1",
                transform: "translateY(0)",
            },
        },
        "fade-out-down": {
            from: {
                opacity: "1",
                transform: "translateY(0px)",
            },
            to: {
                opacity: "0",
                transform: "translateY(20px)",
            },
        },
        "fade-in-up": {
            "0%": {
                opacity: "0",
                transform: "translateY(20px)",
            },
            "100%": {
                opacity: "1",
                transform: "translateY(0)",
            },
        },
        "fade-out-up": {
            from: {
                opacity: "1",
                transform: "translateY(0px)",
            },
            to: {
                opacity: "0",
                transform: "translateY(20px)",
            },
        },
        "flow-to-right": {
            "0%": {
                transform: "translateX(0)",
            },
            "100%": {
                transform: "translateX(-100%)",
            },
        },
    },
    animation: {
        "fade-in-down": "fade-in-down 0.3s ease-out",
        "fade-out-down": "fade-out-down 0.3s ease-out forwards",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "fade-out-up": "fade-out-up 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out forwards",
        "flow-right": "flow-to-right 20s linear infinite",
    },

    },
  },
  plugins: [],
}
