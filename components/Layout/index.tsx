import { Box } from '@chakra-ui/react';
import { Footer } from '../../components/Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box>
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
