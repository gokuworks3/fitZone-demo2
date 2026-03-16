import { motion as Motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return (
    <Motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {children}
    </Motion.main>
  )
}

export default PageTransition
