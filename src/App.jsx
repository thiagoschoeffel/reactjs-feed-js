/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thiagoschoeffel.png',
      name: 'Thiago Schoeffel',
      role: 'Web Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { id: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sapiente veritatis quo, dolores corporis vel perferendis, doloribus hic quibusdam cupiditate repudiandae debitis. Velit aliquid doloribus omnis sequi distinctio corrupti error?' },
      { id: 3, type: 'link', content: 'Lorem ipsum dolor sit amet!' },
    ],
    publishedAt: new Date('2024-04-24 20:50:17')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1669725687209-233e6c9f4eaf?q=50&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      role: 'Web Design'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Earum sapiente veritatis quo.' },
      { id: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sapiente veritatis quo, dolores corporis vel perferendis, doloribus hic quibusdam cupiditate repudiandae debitis. Velit aliquid doloribus omnis sequi distinctio corrupti error?' },
      { id: 3, type: 'paragraph', content: 'Dolores corporis vel perferendis, doloribus hic quibusdam cupiditate repudiandae debitis. Velit aliquid doloribus omnis sequi distinctio corrupti error?' },
      { id: 4, type: 'link', content: 'Earum sapiente!' },
    ],
    publishedAt: new Date('2024-04-23 20:51:59')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}