import fs from "fs"
import { NextPage, GetStaticProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "components/Layout"

type StaticProps = {
  about: string
}

const About: NextPage<StaticProps> = (props) => {
  const { about } = { ...props }
  return (
    <>
      <Layout>
        <main>
          <ReactMarkdown
            skipHtml={true}
            className="prose prose-stone mt-5 max-w-4xl m-auto ml-5">
            {about}
          </ReactMarkdown>
        </main>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const about = fs.readFileSync(process.cwd() + "/docs/about.md", "utf8")
  return {
    props: {
      about: about,
    },
  }
}

export default About
