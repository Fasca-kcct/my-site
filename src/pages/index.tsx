import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="h-72 bg-gradient-to-r from-cyan-500 to-violet-500 ">
        <p className="mt-10 text-white text-6xl text-center font-bold">
          <br />
          Welcome!!!
        </p>
      </div>
      <div className="mt-40">
        <p className="font-sans text-center text-2xl">
          Next.jsとTailwindcssであーだこーだして作ったホームページです
        </p>
      </div>
    </Layout>
  )
}
