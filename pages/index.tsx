import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: './dicionario',
      permanent: false,
    },
  }
}

export default function Home() {
  return (
    <>
    
    </>
  );
}