import Head from "next/head";

interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Kayuu Online Furniture Store" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default Header
