import { FC } from "react"
import NextLink from 'next/link'
import styles from './Navbar.module.css';

export const Navbar: FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Test</div>
        <ul className={styles.navlinks}>

          <NextLink href="/project/frontend_github" passHref>
              <span  className={styles.option}>Front End</span >
            </NextLink>
          <NextLink href="/project/backend_github" passHref><span  className={styles.option}>Back End</span ></NextLink>

        </ul>
      </nav>
    </>
  )
}

export default Navbar