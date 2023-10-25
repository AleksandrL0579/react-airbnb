import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function RoomList({ list }) {
  return (
    <div className="room__block">
      <Heading border>Отзывы клиентов</Heading>
      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, review, rating }) {
  return (
    <Box className="room">
      <div className="room__line">
        <span className="room__title">{guestName}</span>
        <span className="room__info">Рейтинг: {rating}</span>
      </div>
      <span className="room__price">{review}</span>
    </Box>
  );
}
