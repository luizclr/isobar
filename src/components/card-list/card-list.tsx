import {
  Description,
  Image,
  List,
  ListItem,
  Name,
  TextWrapper,
} from "~/components/card-list/card-list.styles";
import { CardListProps } from "~/components/card-list/types";

export const CardList: React.FC<CardListProps> = ({
  items,
  onItemClick = () => {},
}: CardListProps) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} onClick={() => onItemClick(item)}>
          <Image src={item.image} />
          <TextWrapper>
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
          </TextWrapper>
        </ListItem>
      ))}
    </List>
  );
};
