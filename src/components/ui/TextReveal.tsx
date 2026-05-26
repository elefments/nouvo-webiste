'use client'

/**
 * TextReveal — word-by-word staggered text entrance.
 *
 * Splits the text into individual words, wraps each in a motion.span,
 * and staggers them in with a clip-path + translateY animation.
 * Compositor-only (transform + clip-path handled by GPU).
 */

import React from 'react'
import { motion } from 'framer-motion'

const WORD_VARIANTS = {
  hidden:  { opacity: 0, y: 18, clipPath: 'inset(0 0 100% 0)' },
  visible: { opacity: 1, y: 0,  clipPath: 'inset(0 0 0% 0)' },
}

const EASE = [0.22, 1, 0.36, 1] as const

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

const MotionTag = {
  h1:   motion.h1,
  h2:   motion.h2,
  h3:   motion.h3,
  h4:   motion.h4,
  p:    motion.p,
  span: motion.span,
}

export function TextReveal({
  text,
  as = 'h2',
  className = '',
  style,
  staggerDelay = 0.045,
  wordDuration = 0.5,
  delay = 0,
}: {
  text: string
  as?: Tag
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
  wordDuration?: number
  delay?: number
}) {
  const Tag = MotionTag[as]
  const words = text.split(' ')

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
        hidden: {},
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: '0.28em', willChange: 'transform, opacity' }}
          variants={WORD_VARIANTS}
          transition={{ duration: wordDuration, ease: EASE }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
