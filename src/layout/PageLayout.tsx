import { Outlet } from 'react-router';
import { Box, Container } from 'styled-system/jsx';
import { Header } from './Header';

function PageLayout() {
  return (
    <Box minH="screen" bg="gray.100">
      <Header />
      <Container maxWidth="lg" py={6}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default PageLayout;
