import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from ".."
// import { Navbar } from "../ui"

interface Props extends PropsWithChildren {
    title?: string
}

export const Layout:FC<Props> = ({children , title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Github commits' }</title>
            <meta name="author" content="Cristian" />
            <meta name="description" content= {`Informacion sobre ${title}`} /> 
        </Head>
        <Navbar />
        <main style={{
            padding:'30px',
            paddingTop:'70px'
        }}>
            {children}
        </main>
    </>
  )
}

export default Layout