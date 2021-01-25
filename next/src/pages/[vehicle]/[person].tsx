import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { VehiclePerson } from "../../../api/VehiclePerson";

export interface PersonProps {
  ownersList?: VehiclePerson[];
}

export default function Person({ ownersList }: PersonProps) {
  const { query } = useRouter();

  return (
    <div>
      <pre>{JSON.stringify(ownersList, null, 4)}</pre>
      <h1>
        {query.person}'s {query.vehicle}
      </h1>
    </div>
  );
}

interface CustomPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

Person.getInitialProps = async (ctx: CustomPageContext) => {
  const { query } = ctx;

  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
  );
  const ownersList = await response.json();

  return { ownersList: ownersList };
};
