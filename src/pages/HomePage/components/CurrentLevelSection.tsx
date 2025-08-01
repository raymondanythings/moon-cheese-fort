import ProgressBar from '@/ui-lib/components/progressbar';
import Text from '@/ui-lib/components/text';
import { Box, Flex, Stack } from 'styled-system/jsx';

function CurrentLevelSection() {
  return (
    <Stack px={5} py={4} gap={4}>
      <Text variant="H1_Bold">현재 등급</Text>
      <Box bg="background.01_white" px={5} py={4} rounded={'2xl'}>
        <Stack gap={2}>
          <Text variant="H2_Bold">Explorer</Text>

          <ProgressBar value={0.6} size="xs" />
          <Flex justifyContent="space-between">
            <Box textAlign="left">
              <Text variant="C1_Bold">현재 포인트</Text>
              <Text variant="C2_Regular" color="neutral.03_gray">
                6p
              </Text>
            </Box>
            <Box textAlign="right">
              <Text variant="C1_Bold">다음 등급까지</Text>
              <Text variant="C2_Regular" color="neutral.03_gray">
                1.5p
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}

export default CurrentLevelSection;
