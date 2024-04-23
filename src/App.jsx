import { Header } from './components/Header'

import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, recusandae voluptate? Quis, facilis cum? At saepe veritatis, id placeat, fuga quas fugiat odio ipsum, atque expedita dolore in blanditiis natus?
        </main>
      </div>
    </>
  )
}