import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import NavbarFundation from "../../src/components/organismos/Navbar/Navbar";
import FooterPage from "../../src/components/templates/footer/footer";

import {
  BannerProjects,
  Info,
  DescriptionProject,
  WrapperProjects,
} from "../../src/components/Styled";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "data",
  });

  const paths = res.items.map((item) => {
    return {
      params: { projects: item.fields.projects },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "data",
    "fields.projects": params.projects,
  });

  return {
    props: { data: items[0] },
  };
}

export default function ProyectosDetails({ data }) {
  const { title, thumbnail, objectives, Method, date } = data.fields;

  return (
    <>
      <NavbarFundation />

      <WrapperProjects>
        <>
          <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
          />
        </>
        <h2>{title}</h2>

        <Info>
          <h3>Objetivos:</h3>

          {objectives.map((obj) => (
            <span key={obj}>{obj}</span>
          ))}
        </Info>

        <DescriptionProject>
          <h3>Descripción del proyecto</h3>

          <div>{documentToReactComponents(Method)}</div>

          <h6> Publicado el {date}</h6>
        </DescriptionProject>
      </WrapperProjects>

      <FooterPage />
    </>
  );
}
