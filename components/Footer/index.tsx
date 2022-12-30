import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Box
      px={{
        base: '4',
        md: '12',
      }}
      py={{
        base: '12',
        md: '20',
      }}
      bg="#fafafa"
      mt={{
        base: '12',
        md: '20',
      }}
    >
      <Link href="/terms">利用規約</Link>
      <Box mt="4">
        <Link href="/terms">プライバシーポリシー</Link>
      </Box>
    </Box>
  );
};
