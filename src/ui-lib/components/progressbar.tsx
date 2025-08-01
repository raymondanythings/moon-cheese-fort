import { ark, Progress, progressAnatomy } from '@ark-ui/react';
import { forwardRef } from 'react';
import { sva, type RecipeVariantProps } from 'styled-system/css';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';

export type ProgressBarVariantProps = RecipeVariantProps<typeof progressBarRecipe>;

export const progressBarRecipe = sva({
  slots: progressAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    label: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 'medium',
      color: 'neutral.02_gray',
    },
    track: {
      width: '100%',
      backgroundColor: 'neutral.04_gray',
      borderRadius: 'full',
      overflow: 'hidden',
      position: 'relative',
    },
    range: {
      height: '100%',
      borderRadius: 'full',
      transition: 'width 0.3s ease-in-out',
      position: 'relative',
      overflow: 'hidden',
    },
  },
  variants: {
    size: {
      xs: {
        track: { height: 1 },
      },
      sm: {
        track: { height: 2 },
      },
      md: {
        track: { height: 3 },
      },
      lg: {
        track: { height: 4 },
      },
      xl: {
        track: { height: 5 },
      },
    },
    color: {
      primary: {
        range: {
          backgroundColor: '01_primary',
        },
      },
      success: {
        range: {
          backgroundColor: '05_green',
        },
      },
      warning: {
        range: {
          backgroundColor: '02_secondary',
        },
      },
      danger: {
        range: {
          backgroundColor: '04_red',
        },
      },
    },
    animated: {
      true: {
        range: {
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'shimmer 2s infinite',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    animated: false,
  },
});

export type ProgressBarProps = HTMLStyledProps<'div'> &
  ProgressBarVariantProps & {
    /**
     * 0 ~ 1 사이의 값
     */
    value: number;
    showLabel?: boolean;
    label?: string;
  };

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const { value, size = 'md', color = 'primary', animated = false, showLabel = false, label, ...rest } = props;

  const percentage = Math.min(Math.max(value * 100, 0), 100);
  const classes = progressBarRecipe({ size, color, animated });

  const Container = styled(ark.div);

  return (
    <Container ref={ref} className={classes.root} {...rest}>
      {(showLabel || label) && (
        <div className={classes.label}>
          {label && <span>{label}</span>}
          {showLabel && <span>{Math.round(percentage)}%</span>}
        </div>
      )}

      <Progress.Root value={value * 100}>
        <Progress.Track className={classes.track}>
          <Progress.Range className={classes.range} />
        </Progress.Track>
      </Progress.Root>
    </Container>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
