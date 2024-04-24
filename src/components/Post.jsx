import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
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
    </article>
  )
}