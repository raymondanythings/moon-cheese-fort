import { Button } from '@/ui-lib/button';
import { Heading } from '@/ui-lib/heading';
import { Link } from '@/ui-lib/link';
import { Text } from '@/ui-lib/text';
import { ArrowRightIcon, GithubIcon } from 'lucide-react';
import { Container, VStack, Stack } from 'styled-system/jsx';

const GITHUB_URL = 'https://github.com/ping-pong-fe/moon-cheese-react';

function Home() {
  return (
    <Container maxWidth="2xl">
      <VStack h="screen" justify="center" gap={6}>
        <VStack>
          <Heading as="h1" size={{ base: '4xl', md: '6xl' }}>
            Pingpong!
          </Heading>

          <Text size={{ base: 'lg', md: 'xl' }}>함께 만들어가는 프론트엔드 기술과제</Text>
        </VStack>

        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Button size="xl" variant="solid">
            시작하기
            <ArrowRightIcon />
          </Button>

          <Button asChild size="xl" variant="outline">
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub <GithubIcon />
            </Link>
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
}

export default Home;
