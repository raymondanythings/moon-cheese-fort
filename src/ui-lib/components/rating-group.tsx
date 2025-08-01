import { RatingGroup, ratingGroupAnatomy } from '@ark-ui/react';
import { forwardRef } from 'react';
import { sva, type RecipeVariantProps } from 'styled-system/css';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';
import Text from './text';

export type RatingGroupVariantProps = RecipeVariantProps<typeof ratingGroupRecipe>;

export const ratingGroupRecipe = sva({
  slots: ratingGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDir: 'row',
      gap: '1.5',
    },
    label: {
      color: 'neutral.01_black',
      fontWeight: 'medium',
      fontSize: '14px',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
    },
    item: {
      cursor: 'pointer',
      transitionDuration: 'normal',
      transitionProperty: 'color, fill',
      transitionTimingFunction: 'default',

      color: 'neutral.04_gray',
      _highlighted: {
        color: '04_red',
      },

      _hover: {
        fill: '04_red',
        color: '04_red',
      },
    },
  },
  variants: {
    size: {
      sm: {
        control: {
          gap: '0',
        },
        item: {
          width: '16px',
          height: '16px',
          '& svg': {
            width: '16px',
            height: '16px',
          },
        },
        label: {
          fontSize: '12px',
        },
      },
      md: {
        control: {
          gap: '2px',
        },
        item: {
          width: '20px',
          height: '20px',
          '& svg': {
            width: '20px',
            height: '20px',
          },
        },
        label: {
          fontSize: '14px',
        },
      },
      lg: {
        control: {
          gap: '2px',
        },
        item: {
          width: '24px',
          height: '24px',
          '& svg': {
            width: '24px',
            height: '24px',
          },
        },
        label: {
          fontSize: '16px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Star Icon Component
const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export type RatingGroupProps = RatingGroupVariantProps &
  HTMLStyledProps<'div'> & {
    /**
     * 현재 선택된 평점 값
     */
    value?: number;
    /**
     * 기본 평점 값
     */
    defaultValue?: number;
    /**
     * 평점 변경 시 호출되는 콜백
     */
    onValueChange?: (details: { value: number }) => void;
    /**
     * 별의 총 개수
     */
    count?: number;
    /**
     * 반쪽 별 허용 여부
     */
    allowHalf?: boolean;
    /**
     * 읽기 전용 모드
     */
    readOnly?: boolean;
    /**
     * 비활성화 상태
     */
    disabled?: boolean;
    /**
     * 라벨 텍스트
     */
    label?: string;
    /**
     * 사용자 정의 별 아이콘
     */
    icon?: React.ComponentType<{ filled?: boolean }>;
  };

const RatingGroupComponent = forwardRef<HTMLDivElement, RatingGroupProps>((props, ref) => {
  const {
    value,
    defaultValue = 0,
    onValueChange,
    count = 5,
    allowHalf = true,
    readOnly = false,
    disabled = false,
    label,
    icon: CustomIcon = StarIcon,
    size = 'md',
    ...rest
  } = props;

  const classes = ratingGroupRecipe({ size });
  const Container = styled('div');

  return (
    <Container ref={ref} className={classes.root} {...rest}>
      <RatingGroup.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        count={count}
        allowHalf={allowHalf}
        readOnly={readOnly}
        disabled={disabled}
      >
        <RatingGroup.Control className={classes.control}>
          <RatingGroup.Context>
            {({ items }) =>
              items.map(item => (
                <RatingGroup.Item key={item} index={item} className={classes.item}>
                  <RatingGroup.ItemContext>
                    {({ highlighted }) => <CustomIcon filled={highlighted} />}
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              ))
            }
          </RatingGroup.Context>
        </RatingGroup.Control>

        <RatingGroup.HiddenInput />
      </RatingGroup.Root>
      {label && (
        <Text variant="C1_Medium" color="neutral.02_gray" className={classes.label}>
          {label}
        </Text>
      )}
    </Container>
  );
});

RatingGroupComponent.displayName = 'RatingGroup';

export default RatingGroupComponent;
