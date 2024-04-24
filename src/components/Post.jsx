import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/thiagoschoeffel.png"
          />

          <div className={styles.authorInfo}>
            <strong>Thiago Schoeffel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="23 de Abril às 21:43h"
          dateTime="2024-04-23 21:43:02"
        >
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sapiente veritatis quo, dolores corporis vel perferendis, doloribus hic quibusdam cupiditate repudiandae debitis. Velit aliquid doloribus omnis sequi distinctio corrupti error?</p>
        <p>👉🏻{' '}<a href="">Lorem ipsum dolor sit amet!</a></p>
        <p>
          <a href="#">#Lorem</a>{' '}
          <a href="#">#ipsum</a>{' '}
          <a href="#">#dolor</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}