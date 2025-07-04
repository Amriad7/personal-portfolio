import ga4 from "react-ga4"

export const GAinit = () => {
    if(import.meta.env.PROD) {
        const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
        ga4.initialize(GA_MEASUREMENT_ID)
        console.log("REAC GA Init..")
    }
}