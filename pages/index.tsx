import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { IntroCard } from '../components/IntroCard';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>いちアラ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box>
          <Flex mt="8" justifyContent="center" alignItems="center">
            <Image
              src="/ichiara-white.png"
              width={90}
              height={90}
              alt="ロゴ画像"
            />
            <Text fontWeight="bold" color="primary" fontSize="3xl">
              いちアラ
            </Text>
          </Flex>

          <Text
            textAlign="center"
            mt="4"
            fontWeight="bold"
            fontSize="2xl"
            px="4"
          >
            電車、バスで寝過ごさない。乗り過ごさない🌷
          </Text>

          <Text px="4" mt="8" fontWeight="bold" textAlign="center">
            電車やバスでうっかり寝過ごしてしまったこと、起きてたけどゲームや本に夢中になって乗り過ごしてしまった！なんてことはありませんか？
            <br />
            <br />
            いちアラはあらかじめ目的地と範囲を登録することで、その範囲に自分が入ったらアラームを鳴らして目的地が近いことを教えます！
            <br />
            <br />
            「到着時間を毎回調べてアラームをかける」という面倒なことはもうやめましょう👋
          </Text>

          <Text textAlign="center" mt="8">
            Bluetoothイヤホン対応しています
          </Text>

          <Box mt="12">
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              bg="#fafafa"
              py={{
                base: '12',
                md: '16',
              }}
            >
              <Image
                src="/main-app.png"
                width={200}
                height={400}
                alt="アプリイメージ"
              />
              <Box mt="8">
                <a
                  href="https://apps.apple.com/jp/app/%E3%81%84%E3%81%A1%E3%82%A2%E3%83%A9/id1662104612?itsct=apps_box_badge&amp;itscg=30200"
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    borderRadius: '13px',
                    width: '230px',
                    height: '83px',
                  }}
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1672358400?h=cfe5a4bc67ae2fa858b0ed912d1fd4bf"
                    alt="Download on the App Store"
                    style={{
                      borderRadius: '13px',
                      width: '250px',
                      height: '83px',
                    }}
                  />
                </a>
              </Box>
            </Flex>

            <Flex justifyContent="center">
              <VStack
                mt={{ base: '12', md: '20' }}
                px="4"
                spacing={{
                  base: '20',
                  md: '32',
                }}
              >
                <IntroCard
                  imageSrc={'/search-station-app.png'}
                  title="駅名や建物名、住所で検索できる"
                  subTitle="降りたい場所をすぐに登録しましょう。"
                />

                <IntroCard
                  imageSrc="/tap-search-app.png"
                  title="目的地をタップで登録できる"
                  subTitle="検索が難しいようなバス停などでも、目的地のタップですぐに登録できます。"
                  imagePosition="right"
                />

                <IntroCard
                  imageSrc="/list-app.png"
                  title="管理も簡単"
                  subTitle="登録履歴が残るのでオンオフの設定のみでまた使えます。"
                />

                <IntroCard
                  imageSrc="/detail-app.png"
                  title="いつでも設定を変更できる"
                  subTitle="わかりにくい表示名などはここで変更しましょう。"
                  imagePosition="right"
                />
              </VStack>
            </Flex>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
