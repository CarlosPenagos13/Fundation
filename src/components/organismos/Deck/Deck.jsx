import Link from "next/link";
import Image from "next/image";
import { CardDeck, Card } from "react-bootstrap";

export default function Deck({ data }) {
  const { title, thumbnail, projects } = data.fields;

  return (
    <CardDeck>
      <Card>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Body>{}</Card.Body>
        </Card.Body>
        <Card.Footer>
          <Link href={"/publicacion/" + projects}>
            <a>Mira en lo que estamos trabajando</a>
          </Link>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}
