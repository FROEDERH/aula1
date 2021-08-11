import RankItem from '../componentes/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <h1>Quadro de medalhas - Tokio 2020 </h1>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div>Ouro</div>
          <div>Prata</div>
          <div>Bronze</div>
          <div>Total</div>
        </div>
        {dados.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
