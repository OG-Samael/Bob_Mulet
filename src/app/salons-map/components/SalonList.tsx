import type { Salon } from "../types/salon";
import SalonListItem from "./SalonListItems";
import '../salons-map.css';

interface Props {
  salons: Salon[];
  selectedSalon: Salon | null;
  onSelect: (salon: Salon) => void;
}

export default function SalonList({ salons, selectedSalon, onSelect }: Props) {
  return (
    <div className='salonListContainer'>
      {salons.map((salon) => (
        <SalonListItem
          key={salon.id}
          salon={salon}
          selected={selectedSalon?.id === salon.id}
          onClick={() => onSelect(salon)}
        />
      ))}
    </div>
  );
}
