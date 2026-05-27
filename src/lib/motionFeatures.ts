/**
 * Framer Motion feature bundle for LazyMotion.
 *
 * Using domAnimation (not domMax) because we don't use layout animations.
 * This file is dynamically imported, so Framer Motion's full feature set
 * is deferred and does not block the initial page render / LCP.
 */
export { domAnimation as default } from 'framer-motion'
