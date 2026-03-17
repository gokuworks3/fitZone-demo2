import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const numericStr = value.replace(/[^0-9]/g, '')
    const target = parseInt(numericStr, 10)
    if (isNaN(target)) {
      setDisplay(value)
      return
    }

    const prefix = value.match(/^[^0-9]*/)?.[0] || ''
    const suffix = value.match(/[^0-9]*$/)?.[0] || ''
    const hasComma = value.includes(',')

    const steps = 60
    const stepDuration = (duration * 1000) / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const val = Math.round(target * eased)

      const formatted = hasComma ? val.toLocaleString() : val.toString()
      setDisplay(`${prefix}${formatted}${suffix}`)

      if (current >= steps) {
        setDisplay(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}</span>
}

export default AnimatedCounter
