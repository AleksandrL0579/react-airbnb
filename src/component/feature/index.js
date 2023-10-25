import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import f from "./f.png";
import feat from "./feat.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Feature({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="price">
      <span className="price__value">Детали особенностей</span>
      <ul className="price__list">
        <ListItem imageSrc={f}>
          <span>Гости:</span>
          <span>{guests}</span>
        </ListItem>

        <ListItem imageSrc={feat}>
          <span>Спальня:</span>
          <span>{bedrooms}</span>
        </ListItem>

        <ListItem imageSrc={bed}>
          <span>Кровать:</span>
          <span>{beds}</span>
        </ListItem>

        <ListItem imageSrc={bathroom}>
          <span>Ванная комната:</span>
          <span>{baths}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
