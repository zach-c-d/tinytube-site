import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../components/seo"

const Cara = () => (
  <Layout>
    <Parallax pages={3}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={2} />
      <Projects offset={1.5} factor={1} />
      <Contact offset={2} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />