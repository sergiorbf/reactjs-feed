import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'

export function Comment({ content, onDeleteComment }) {

	function handleDeleteComment() {

		onDeleteComment(content);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/sergiorbf.png" alt="" />

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Sergio Filho</strong>
							<time title='11 de Maio às 08:13h' dateTime="2022-05-11 08:13:30">Cerca de 1hr atrás</time>
						</div>

						<button onClick={handleDeleteComment} title="Deletar comentário">
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