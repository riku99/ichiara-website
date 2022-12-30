import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Flex
      pt={{
        base: '12',
        md: '20',
      }}
      pb={{
        base: '12',
        md: '20',
      }}
      justifyContent="center"
    >
      <Box
        alignSelf="center"
        w={{
          base: '90%',
          md: '70%',
        }}
      >
        <Heading
          as="h1"
          fontSize={{
            base: 'xl',
            md: '3xl',
          }}
        >
          いちアラ　プライバシーポリシー
        </Heading>

        <Text mt="4">
          本サービスにおけるユーザーの個人情報を含む利用者情報は、以下の方針に基づいて取り扱います。
        </Text>

        <Text mt="8">本サービスは利用者の位置情報を利用します。</Text>
        <Text>
          利用目的は本サービスのメイン機能である「ある特定の範囲にユーザーが入ったタイミングでアラームを鳴らす」という挙動を実現するためです。
        </Text>

        <Text mt="8">
          本サービスはユーザーの同意なしに利用者情報を第三者に提供することはありません。
        </Text>

        <Text mt="8">
          本プライバシーポリシーはユーザーへの通知なしで変更される可能性があります。
        </Text>

        <Text mt="8">令和4年12月30日 制定</Text>
      </Box>
    </Flex>
  );
};

export default Privacy;
