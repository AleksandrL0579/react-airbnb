import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import airport from "./airport.svg";
import breakfast from "./breakfast.svg";
import room from "./room.svg";
import security from "./security.svg";
import gym from "./gym.svg";
import parking from "./parking.svg";
import track from "./track.svg";
import pool from "./pool.svg";
import child from "./child.svg";
import wifi from "./wifi.svg";

export default function Amenities({ data }) {
  return (
    <Box list className="facilities" shadow>
      <Heading border>Удобства</Heading>
      {data.hasPool && <ListItem imageSrc={pool}>Бассейн</ListItem>}

      {data.hasGym && <ListItem imageSrc={gym}>Спортивный зал</ListItem>}

      {data.hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>Бесплатный завтрак</ListItem>
      )}
      {data.hasFreeWiFi && (
        <ListItem imageSrc={wifi}>Бесплатный Wi-Fi</ListItem>
      )}
      {data.hasParking && (
        <ListItem imageSrc={parking}>Бесплатный уличний паркинг</ListItem>
      )}
      {data.hasPetsAllowed && (
        <ListItem imageSrc={track}>
          Разрешено размещение с домашними животными
        </ListItem>
      )}
      {data.hasAirportShuttle && (
        <ListItem imageSrc={airport}>Трансфер до/жд аеропорта</ListItem>
      )}
      {data.hasConciergeService && (
        <ListItem imageSrc={security}>Консьєрж-сервис</ListItem>
      )}
      {data.hasRoomService && (
        <ListItem imageSrc={room}>Обслуживание номеров</ListItem>
      )}
      {data.hasChildFriendly && (
        <ListItem imageSrc={child}>Подходит для детей</ListItem>
      )}
    </Box>
  );
}
