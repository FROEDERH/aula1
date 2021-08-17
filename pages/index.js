import react, { useState } from 'react';
import RankItem from '../componentes/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {

     const [list, setList] = useState(dados);

     function handleFilterByGold(){
       const filterList = [...list].filter(item => item.GoldMadals > 0);
     }
     
  return (
    <div>
      <h1>Quadro de medalhas - Tokio 2020 </h1>
      <div>
        <button>Somente com ouro</button>
        <button>Todos</button>
         </div>
      <div>Resultado: {list.length} itens</div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div>Ouro</div>
          <div>Prata</div>
          <div>Bronze</div>
          <div>Total</div>
        </div>
        {list.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
