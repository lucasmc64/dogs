import React from "react";

import useFetch from "../../../Hooks/useFetch";

import { STATS_GET } from "../../../api";

import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import Error from "../../Helper/Error";

const UserStatsGraphics = React.lazy(() =>
  import("./UserStatsGraphics/UserStatsGraphics"),
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  else if (error) return <Error error={error} />;
  else if (data)
    return (
      <React.Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <UserStatsGraphics data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
