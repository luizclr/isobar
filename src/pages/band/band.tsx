import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useParams } from "react-router-dom";

import { Band } from "~/entities/band";
import {
  AlbumImage,
  BandWrapper,
  BannerImage,
  Description,
  RoundedImage,
  Title,
} from "~/pages/band/band.styles";
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

  return (
    <>
      {!isLoading && band && (
        <BandWrapper>
          <BannerImage src={band.image} />
          <Title>{band.name}</Title>
          <RoundedImage src={band.image} />
          <Description>{band.biography}</Description>
          <Container>
            <Row>
              {band.albums.map((albumId) => (
                <Col key={albumId} xs={4} sm={4}>
                  <AlbumImage src={band.image} />
                </Col>
              ))}
            </Row>
          </Container>
        </BandWrapper>
      )}
    </>
  );
};

export default BandPage;
