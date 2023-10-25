import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

export default function Feature({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  in_instructions,
}) {
  return (
    <Box className="price">
      <span className="price__value">Дополнительные особенности</span>
      <ul className="price__list">
        <ListItem title="Правила дома">
          <span>{house_rules}</span>
        </ListItem>

        <ListItem title="Политика отмены">
          <span>{cancellation_policy}</span>
        </ListItem>

        <ListItem title="Местный транспорт">
          <span>{local_transportation}</span>
        </ListItem>

        <ListItem title="Языки хоста">
          <span>{host_languages}</span>
        </ListItem>

        <ListItem title="Специальные пропозиции">
          <span>{special_offers}</span>
        </ListItem>

        <ListItem title="Инструкция по регистрации">
          <span>{in_instructions}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
