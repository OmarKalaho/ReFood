import AppBar from './appBar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <AppBar/>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}