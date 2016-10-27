// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

// import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

// import ImageBrain from './images/brain.svg'
import styles from './index.css'


/**
 * Neuroscience Research MainSection - React view component.
 */
const SectionNeuroscience = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.brain}>
            Aside
            { /* <Image
              alt="Stylized Brain Artwork"
              respond="mw"
              shadow={false}
              src={ImageBrain}
            /> */ }
          </div>
        </div>
        <div className={styles.content}>
          <blockquote>
            <p>
              “Numenta’s unique approach of focusing on large-scale cortical
              theory and simulation drives us to tackle one of humanity’s
              greatest scientific challenges: reverse-engineering the
              neocortex.”
            </p>
            <footer>- <cite>Jeff Hawkins</cite></footer>
          </blockquote>
          <Paragraph lead={true}>
            Numenta’s team of researchers focuses on developing a comprehensive
            theory of the neocortex – what it does and how its architecture
            implements this. We test our theories via simulation, mathematical
            analysis and collaborative partnerships with experimental
            laboratories, and we document our research in two primary forms: a
            living book called {' '}
            <TextLink to={links.out.bami}>
              BAMI (Biological and Machine Intelligence),
            </TextLink> {' '}
            and scientific publications.
          </Paragraph>
          <Paragraph>
            Feel free to view our collection of {' '}
            <TextLink to={links.in.papers}>
              research papers,
            </TextLink> {' '}
            which include peer-reviewed journal papers.
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionNeuroscience.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNeuroscience