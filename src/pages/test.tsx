import fs from "fs"
import { NextPage, GetStaticProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "components/Layout"

type StaticProps = {
  tests: string
}

const Tests: NextPage<StaticProps> = (props) => {
  const { tests } = { ...props }
  return (
    <>
      <Layout>
        <main>
          <ReactMarkdown
            skipHtml={true}
            className="prose prose-stone mt-5 max-w-4xl m-auto">
            {tests}
          </ReactMarkdown>
        </main>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tests = fs.readFileSync(process.cwd() + "/docs/test.md", "utf8")
  return {
    props: {
      tests: tests,
    },
  }
}

export default Tests
