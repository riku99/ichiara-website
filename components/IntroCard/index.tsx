import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  title: string;
  subTitle?: string;
};

export const IntroCard = ({ imageSrc, title, subTitle }: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const TitleText = (
    <>
      <Text
        fontWeight="700"
        fontSize={{
          base: '1.125rem',
          md: '2rem',
        }}
      >
        {title}
      </Text>
      {!!subTitle && <Text mt="2">{subTitle}</Text>}
    </>
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      {isMobile && TitleText}

      <Box
        mt={{
          base: '4',
          md: '0',
        }}
      >
        <Image src={imageSrc} width={320} height={600} alt="アプリ紹介画像" />
      </Box>

      {!isMobile && (
        <Box
          ml={{
            md: '12',
          }}
        >
          {TitleText}
        </Box>
      )}
    </Flex>
  );
};
