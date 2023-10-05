import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Title } from "~/components/title/title";
import { Band } from "~/entities/band";
import { useApp } from "~/state/app/hook";

const BandPage: React.FC = () => {
  const { id } = useParams();
  const { bandService, isLoading, setIsLoading } = useApp();
  const [band, setBand] = useState<Band | null>(null);

  useEffect(() => {
    getBand().catch(() => {});
  }, []);

  const getBand = async (): Promise<void> => {
    if (!id) return;

    setIsLoading(true);

    await bandService.getBandById(id, {
      onSuccess,
      onNotFound: () => {},
      onError: () => {},
    });

    setIsLoading(false);
  };

  const onSuccess = (band: Band): void => {
    setBand(band);
    setIsLoading(false);
  };

  return <>{!isLoading && <Title>{band?.name}</Title>}</>;
};

export default BandPage;
