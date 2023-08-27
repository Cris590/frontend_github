import { FC } from "react"
import { CommitInterface } from '../../interfaces'
import styles from './Commit.module.css';

interface Props{
    commit:CommitInterface
}

export const Commit: FC<Props>= ({commit}) => {

const formatedDate = (date:Date)=>{
    
    let fecha = new Date(date);
    
    let day   =   ('0' + fecha.getDate()).slice(-2);
    let month = ('0' + (fecha.getMonth() + 1)).slice(-2);
    let year= fecha.getFullYear();

    let hour    = ('0' + fecha.getHours()).slice(-2);
    let minutes = ('0' + fecha.getMinutes()).slice(-2);
    let seconds = ('0' + fecha.getSeconds()).slice(-2);
    let fecha_formateada = year + '-' + month + '-' + day;
    fecha_formateada += '  ' + hour +':'+ minutes +':'+seconds
    return  fecha_formateada
}

  return (
    <>
        <div className={styles['container_commit']}>
            <div className={styles['block_commit']}>
                <span className={`${styles.span_class} ${styles.commit_sha}`}>
                    {commit.sha}
                </span>
                <div>
                    <span className={`${styles.span_class} ${styles.commit_date}`}>{formatedDate(commit.date)} </span>
                </div>
            </div>
            <div className={styles['block_commit']}>
                
                <div className={styles['block_commit__main']}>
                    <span className={`${styles.span_class} ${styles.commit_message}`}>{commit.message}</span>
                </div>
               
            </div>
            <div className={styles['block_commit']}>
                <div className={styles['block_commit__main']}>
                    <span className={styles['span_class']}> Pulled By</span>
                    <span className={styles['span_class']}>{commit.author}</span> - <span className={styles['span_class']}>{commit.email}</span>
                </div>
                <div className={styles['view_code']}>
                    <a href={commit.html_url} title="View Code" target="_blank" 
                        style={{
                            textDecoration:'none',
                            color:'blueviolet'
                        }}
                    > &lt; &gt; </a>
                </div>

            </div>
        </div>
    </>
  )
}

export default Commit