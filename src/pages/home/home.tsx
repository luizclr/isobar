import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardList } from "~/components/card-list/card-list";
import { CardItemType } from "~/components/card-list/types";
import { Order } from "~/components/order/order";
import { OrderOption } from "~/components/order/types";
import { Band } from "~/entities/band";
import { useApp } from "~/state/app/hook";

const Home: React.FC = () => {
  const { bandService, isLoading, setIsLoading, filter } = useApp();
  const navigate = useNavigate();
  const [bands, setBands] = useState<CardItemType[]>([]);
  const [filteredBands, setFilteredBands] = useState<CardItemType[]>(bands);
  const [selectedOrder, setSelectedOrder] = useState<OrderOption | null>(null);

  useEffect(() => {
    getBands().catch(() => {});
  }, []);

  useEffect(() => {
    filterBands();
  }, [filter, selectedOrder]);

  const getBands = async (): Promise<void> => {
    setIsLoading(true);

    await bandService.getBands({
      onSuccess,
      onError: () => {
        setIsLoading(false);
      },
    });
  };

  const onSuccess = (bands: Band[]): void => {
    const mappedBands = mapBandsToCardList(bands);
    setBands(mappedBands);
    setFilteredBands(mappedBands);
    setIsLoading(false);
  };

  const mapBandsToCardList = (bands: Band[]): CardItemType[] => {
    return bands.map(({ id, name, numPlays, image }) => ({
      id,
      image,
      name,
      description: `${numPlays.toLocaleString("pt-br")} PLAYS`,
    }));
  };

  const getNumOfPlays = (description: string): number => {
    const num = description.split(" ")[0].replaceAll(".", "");

    return parseInt(num);
  };

  const filterBands = (): void => {
    const filteredBands = bands
      .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((prev, next) => {
        if (selectedOrder === OrderOption.alphabetic) {
          return prev.name > next.name ? 1 : -1;
        }
        if (selectedOrder === OrderOption.popularity) {
          return getNumOfPlays(prev.description) < getNumOfPlays(next.description) ? 1 : -1;
        }
        return 1;
      });

    setFilteredBands(filteredBands);
  };

  return (
    <>
      <Order count={filteredBands.length} onOrderChange={setSelectedOrder} />
      {!isLoading && (
        <CardList items={filteredBands} onItemClick={(item) => navigate(`band/${item.id}`)} />
      )}
    </>
  );
};

export default Home;
