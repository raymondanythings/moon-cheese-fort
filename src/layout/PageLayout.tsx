import { Outlet } from 'react-router';
import { Box, Container } from 'styled-system/jsx';
import { Header } from './Header';

function PageLayout() {
  return (
    <Box minH="screen" bg="background.03_gray">
      <Header />
      <Container maxW="md" px={0}>
        <main>
          <Outlet />
        </main>
      </Container>
    </Box>
  );
}

export default PageLayout;
