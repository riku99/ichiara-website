import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  title: string;
  subTitle?: string;
  imagePosition?: 'right' | 'left';
};

export const IntroCard = ({
  imageSrc,
  title,
  subTitle,
  imagePosition = 'left',
}: Props) => {
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
      {!!subTitle && (
        <Text
          mt="2"
          w={{
            base: '100%',
            md: '84%',
          }}
        >
          {subTitle}
        </Text>
      )}
    </>
  );

  const AppImage = (
    <Box
      mt={{
        base: '8',
        md: '0',
      }}
    >
      <Image
        src={imageSrc}
        width={320}
        height={600}
        alt="アプリ紹介画像"
        style={{
          boxShadow: '0 10px 25px 0 rgba(0, 0, 0, .5)',
        }}
      />
    </Box>
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      w={{
        base: '100%',
        md: '4xl',
      }}
    >
      {isMobile && TitleText}

      {imagePosition === 'left' && AppImage}

      {!isMobile && (
        <Box
          ml={{
            md: '12',
          }}
        >
          {TitleText}
        </Box>
      )}

      {imagePosition === 'right' && AppImage}
    </Flex>
  );
};
