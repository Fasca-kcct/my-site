import Navbar from "./navbar"
import Footer from "./footer"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
