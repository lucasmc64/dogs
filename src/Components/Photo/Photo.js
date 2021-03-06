import React from "react";

import { useParams } from "react-router";

import useFetch from "../../Hooks/useFetch";

import { PHOTO_GET } from "../../api";

import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent/PhotoContent";
import Head from "../Helper/Head";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  else if (loading) return <Loading />;
  else if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
