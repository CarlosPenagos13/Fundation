import Link from "next/link";
import { ListGroup } from "react-bootstrap";

export default function ListProjects({ data }) {
  const { title, projects } = data.fields;

  return (
    <ListGroup.Item>
      <Link href={"/publicacion/" + projects}>
        <a>{title}</a>
      </Link>
    </ListGroup.Item>
  );
}
