import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

export default function Entertainment({ list }) {
  return (
    <Box list shadow className="entertainment">
      <Heading>Памятки рядом</Heading>

      {list.map(({ id, link, name }) => (
        <Fragment key={id}>
          <ListItem>
            <a className="entertainment__link" href={link}>
              {name}
            </a>
          </ListItem>
        </Fragment>
      ))}
    </Box>
  );
}
