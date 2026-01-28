import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ImageProject = ({ deploy, imagen, titulo }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <a
      className="Proyecto-imgLink"
      href={deploy}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`Proyecto-imgWrapper`}>
        {!loaded && <Skeleton className="Proyecto-skeleton" />}
        <img
          src={imagen}
          alt={titulo}
          className="Proyecto-img"
          style={{
            opacity: loaded ? 1 : 0,
          }}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </a>
  );
};
