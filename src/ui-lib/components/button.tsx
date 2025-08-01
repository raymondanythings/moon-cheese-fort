import { ark } from '@ark-ui/react';
import { forwardRef } from 'react';
import { cva, type RecipeVariantProps } from 'styled-system/css';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    borderRadius: 'lg',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    userSelect: 'none',

    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.6,
      pointerEvents: 'none',
    },

    _focusVisible: {
      outline: '2px solid',
      outlineColor: '01_primary',
      outlineOffset: '2px',
    },

    _loading: {
      cursor: 'wait',
      pointerEvents: 'none',
    },
  },

  variants: {
    variant: {
      // Primary Button - 주요 액션
      primary: {
        backgroundColor: '01_primary',
        color: 'neutral.01_black',

        _hover: {
          backgroundColor: '02_secondary',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(255, 200, 33, 0.3)',
        },

        _active: {
          backgroundColor: '03_secondary',
          transform: 'translateY(0)',
          boxShadow: '0 2px 4px rgba(255, 200, 33, 0.2)',
        },
      },

      // Secondary Button - 보조 액션
      secondary: {
        backgroundColor: '02_secondary',
        color: 'neutral.01_black',

        _hover: {
          backgroundColor: '03_secondary',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },

        _active: {
          backgroundColor: '04_red',
          transform: 'translateY(0)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },

      neutral: {
        backgroundColor: 'background.03_gray',
        color: 'neutral.01_black',

        _hover: {
          backgroundColor: 'background.02_light-gray',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },

        _active: {
          backgroundColor: 'background.03_gray',
          transform: 'translateY(0)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },

      // Outline Button - 테두리만 있는 버튼
      outline: {
        backgroundColor: 'transparent',
        color: '01_primary',
        border: '2px solid',
        borderColor: '01_primary',

        _hover: {
          backgroundColor: '01_primary',
          color: 'neutral.01_black',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(255, 200, 33, 0.3)',
        },

        _active: {
          backgroundColor: '02_secondary',
          borderColor: '02_secondary',
          transform: 'translateY(0)',
        },
      },

      // Ghost Button - 투명한 배경
      ghost: {
        backgroundColor: 'transparent',
        color: 'neutral.02_gray',

        _hover: {
          backgroundColor: 'background.02_light-gray',
          color: 'neutral.01_black',
        },

        _active: {
          backgroundColor: 'background.03_gray',
        },
      },

      // Danger Button - 위험한 액션
      danger: {
        backgroundColor: '04_red',
        color: 'neutral.05_white',

        _hover: {
          backgroundColor: '#e60000',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(250, 20, 20, 0.3)',
        },

        _active: {
          backgroundColor: '#cc0000',
          transform: 'translateY(0)',
        },
      },

      // Success Button - 성공/확인 액션
      success: {
        backgroundColor: '05_green',
        color: 'neutral.05_white',

        _hover: {
          backgroundColor: '#129e3e',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(22, 163, 73, 0.3)',
        },

        _active: {
          backgroundColor: '#0e7a30',
          transform: 'translateY(0)',
        },
      },
      black: {
        backgroundColor: 'neutral.01_black',
        color: 'neutral.05_white',

        _hover: {
          backgroundColor: 'neutral.02_gray',
        },

        _active: {
          backgroundColor: 'neutral.03_gray',
        },
      },
    },

    size: {
      xs: {
        height: '28px',
        px: '3',
        fontSize: '12px',
        lineHeight: '1.4',
        gap: '1',
      },
      sm: {
        height: '36px',
        px: '3',
        fontSize: '13px',
        lineHeight: '1.4',
        gap: '1.5',
      },
      md: {
        height: '40px',
        px: '4',
        fontSize: '14px',
        lineHeight: '1.4',
        gap: '2',
      },
      lg: {
        height: '48px',
        px: '6',
        fontSize: '16px',
        lineHeight: '1.5',
        gap: '2',
      },
      xl: {
        height: '56px',
        px: '8',
        fontSize: '18px',
        lineHeight: '1.5',
        gap: '2.5',
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    loading: {
      true: {
        cursor: 'wait',
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false,
  },
});

// Loading Spinner Component
const LoadingSpinner = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      animation: 'spin 1s linear infinite',
    }}
  >
    <style>
      {`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="32"
      strokeDashoffset="32"
      style={{
        animation: 'spin 1s linear infinite',
        opacity: 0.25,
      }}
    />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

type BaseButtonProps = ButtonVariantProps & {
  /**
   * 버튼의 로딩 상태
   */
  loading?: boolean;
  /**
   * 로딩 상태일 때 표시할 텍스트
   */
  loadingText?: string;
  /**
   * 버튼 앞에 표시할 아이콘
   */
  leftIcon?: React.ReactNode;
  /**
   * 버튼 뒤에 표시할 아이콘
   */
  rightIcon?: React.ReactNode;
};

export type ButtonProps = BaseButtonProps & HTMLStyledProps<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    disabled,
    ...rest
  } = props;

  const ButtonComponent = styled(ark.button, buttonRecipe);

  const spinnerSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  }[size];

  const isDisabled = disabled || loading;

  return (
    <ButtonComponent
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      disabled={isDisabled}
      {...rest}
    >
      {loading && <LoadingSpinner size={spinnerSize} />}
      {!loading && leftIcon && leftIcon}
      {loading ? loadingText || children : children}
      {!loading && rightIcon && rightIcon}
    </ButtonComponent>
  );
});

Button.displayName = 'Button';

export default Button;
