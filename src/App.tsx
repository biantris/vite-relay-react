import React, { ReactElement } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { AppQuery } from "./__generated__/AppQuery.graphql";

export default function App(): ReactElement {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        ships {
          id
          name
          image
        }
      }
    `,
    {}
  );

  return (
    <>
      <h1>Vite + Relay</h1>
      <h2>
        <a href="https://www.spacex.com" target="_blank">
          SpaceX
        </a>{" "}
        Data Viewer
      </h2>
      <h2 id="ships-heading">Ships</h2>
      <ul aria-labelledby="ships-heading">
        {data.ships?.map((ship) => (
          <>
            <li key={ship?.id}>{ship?.name}</li>
            <img src={ship?.image} alt={ship?.name} width="100" height="100" />
          </>
        ))}
      </ul>
    </>
  );
}
