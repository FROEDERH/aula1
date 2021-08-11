import styles from './RankItem.module.css';
export default function RankItem(props) {
  return (
    <div className={styles.item}>
        <div className={styles.rank}>
      <div>{props.item.Rank}</div>
       </div>
      <div className={styles.contry}>
        <img
          src={`https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/${
            props.item.NOC
          } .png`}
        />
        {/* <img src="https://www.countryflags.io/br/flat/64.png" /> */}

        {props.item.Team}
      </div>
      <div>{props.item.GoldMedals}</div>
      <div>{props.item.SilverMedals}</div>
      <div>{props.item.BronzeMedals}</div>
      <div>{props.item.Total}</div>
    </div>
  );
}
