import Link from 'next/link';
import {VehiclePerson} from '../../api/VehiclePerson';

export interface ListProps {
    ownersList: VehiclePerson[] | undefined;
}

export default function List({ownersList}: ListProps) {
  // const [owners, setOwners] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch('http://localhost:4001/vehicles');
  //     const ownersList = await response.json();
  //     setOwners(ownersList);
  //   }

  //   loadData();
  // }, []);
  
  return (
    <div>
      {ownersList?.map((e, index) => (
        <div key={index}>
          <Link href={`/${e.vehicle}/${e.ownerName}`}>
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    const ownersList: VehiclePerson[] | undefined = await response.json();
    return {ownersList: ownersList}
}
