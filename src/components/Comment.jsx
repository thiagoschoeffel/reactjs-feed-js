/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/thiagoschoeffel.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Schoeffel</strong>
              <time
                title="23 de Abril às 21:43h"
                dateTime="2024-04-23 21:43:02"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}