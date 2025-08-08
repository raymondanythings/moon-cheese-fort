import { Box, Flex, styled } from 'styled-system/jsx';
import { ProgressBar, Spacing, Text } from '@/ui-lib';
import { useSuspenseQueries } from '@tanstack/react-query';
import { getMeQueryOptions } from '@/remotes/queries/me';
import { getGradePointQueryOptions } from '@/remotes/queries/grade-point';
import type { GradePoint } from '@/types';

const formatFirstCharacterUppercase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getNextGradePoint = (point: number, gradePointList: GradePoint[]) => {
  const nextGradePoint = gradePointList.find(gradePoint => gradePoint.minPoint > point);
  if (typeof nextGradePoint === 'undefined') return null;
  return nextGradePoint?.minPoint;
};
function CurrentLevelSection() {
  const [
    {
      data: { grade, point },
    },
    {
      data: { gradePointList },
    },
  ] = useSuspenseQueries({ queries: [getMeQueryOptions, getGradePointQueryOptions] });

  const nextGradePoint = getNextGradePoint(point, gradePointList);
  const nextGradePointRatio = nextGradePoint ? point / nextGradePoint : 1;

  return (
    <styled.section css={{ px: 5, py: 4 }}>
      <Text variant="H1_Bold">현재 등급</Text>

      <Spacing size={4} />

      <Box bg="background.01_white" css={{ px: 5, py: 4, rounded: '2xl' }}>
        <Flex flexDir="column" gap={2}>
          <Text variant="H2_Bold">{formatFirstCharacterUppercase(grade)}</Text>

          <ProgressBar value={nextGradePointRatio} size="xs" />

          <Flex justifyContent="space-between">
            <Box textAlign="left">
              <Text variant="C1_Bold">현재 포인트</Text>
              <Text variant="C2_Regular" color="neutral.03_gray">
                {point}p
              </Text>
            </Box>
            <Box textAlign="right">
              <Text variant="C1_Bold">다음 등급까지</Text>
              <Text variant="C2_Regular" color="neutral.03_gray">
                {nextGradePoint ? nextGradePoint - point : gradePointList[gradePointList.length - 1]?.minPoint}p
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </styled.section>
  );
}

export default CurrentLevelSection;
