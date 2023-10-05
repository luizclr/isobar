export type CardItemType = {
  id: string;
  image: string;
  name: string;
  description: string;
};

export type CardListProps = {
  items: CardItemType[];
  onItemClick?: (item: CardItemType) => void;
};
