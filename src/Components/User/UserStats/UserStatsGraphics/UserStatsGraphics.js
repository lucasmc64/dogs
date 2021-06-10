import React from "react";

import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from "victory";

import styles from "./UserStatsGraphics.module.css";

const UserStatsGraphics = ({ data }) => {
  const [graphic, setGraphic] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphicData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setGraphic(graphicData);

    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((accumulator, value) => accumulator + value, 0),
    );
  }, [data]);

  return (
    <section className={`${styles.graphic} animeLeft`}>
      <div className={`${styles.total} ${styles.graphicItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphicItem}>
        <VictoryPie
          data={graphic}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          theme={VictoryTheme.material}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={styles.graphicItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphic}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphics;
