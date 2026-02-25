import React from 'react';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Download Icon
 * Displays a download arrow pointing downward with a save indicator below
 */
export const DownloadIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12.6563 5.65625C12.6563 5.29381 12.3624 5 12 5C11.6376 5 11.3438 5.29381 11.3438 5.65625V13.1931L8.75835 10.4557C8.5095 10.1922 8.09415 10.1803 7.83065 10.4291C7.56716 10.678 7.55529 11.0934 7.80415 11.3568L11.5229 15.2943C11.6469 15.4256 11.8194 15.5 12 15.5C12.1806 15.5 12.3531 15.4256 12.4771 15.2943L16.1959 11.3568C16.4447 11.0934 16.4328 10.678 16.1693 10.4291C15.9059 10.1803 15.4905 10.1922 15.2416 10.4557L12.6563 13.1931V5.65625Z"
      fill="currentColor"
    />
    <path
      d="M6.3125 14.4062C6.3125 14.0438 6.01869 13.75 5.65625 13.75C5.29381 13.75 5 14.0438 5 14.4062V16.5938C5 17.9227 6.07732 19 7.40625 19H16.5938C17.9227 19 19 17.9227 19 16.5938V14.4062C19 14.0438 18.7062 13.75 18.3438 13.75C17.9813 13.75 17.6875 14.0438 17.6875 14.4062V16.5938C17.6875 17.1978 17.1978 17.6875 16.5938 17.6875H7.40625C6.80219 17.6875 6.3125 17.1978 6.3125 16.5938V14.4062Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Copy Icon (Document Duplicate)
 * Displays two overlapping document pages representing a copy action
 */
export const CopyIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M15.75 17.25V20.625C15.75 21.2463 15.2463 21.75 14.625 21.75H4.875C4.25368 21.75 3.75 21.2463 3.75 20.625V7.875C3.75 7.25368 4.25368 6.75 4.875 6.75H6.75C7.26107 6.75 7.76219 6.7926 8.25 6.87444M15.75 17.25H19.125C19.7463 17.25 20.25 16.7463 20.25 16.125V11.25C20.25 6.79051 17.0066 3.08855 12.75 2.37444C12.2622 2.2926 11.7611 2.25 11.25 2.25H9.375C8.75368 2.25 8.25 2.75368 8.25 3.375V6.87444M15.75 17.25H9.375C8.75368 17.25 8.25 16.7463 8.25 16.125V6.87444M20.25 13.5V11.625C20.25 9.76104 18.739 8.25 16.875 8.25H15.375C14.7537 8.25 14.25 7.74632 14.25 7.125V5.625C14.25 3.76104 12.739 2.25 10.875 2.25H9.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Eye Icon
 * Displays an open eye representing visibility or a view action
 */
export const EyeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M2.0355 12.3224C1.96642 12.1151 1.96635 11.8907 2.03531 11.6834C3.42368 7.50972 7.36074 4.5 12.0008 4.5C16.6386 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0334 12.1093 21.9645 12.3166C20.5761 16.4903 16.639 19.5 11.999 19.5C7.36115 19.5 3.42559 16.4931 2.0355 12.3224Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 8.99995 13.6569 8.99995 12C8.99995 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Plus Icon
 * Displays a plus sign for add/create actions
 */
export const PlusIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M4 12H20M12 4V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Menu Icon
 * Displays three horizontal lines representing a menu or navigation toggle
 */
export const MenuIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron Down Icon
 * Displays a downward pointing chevron for collapse/dropdown actions
 */
export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M19.5 8.25L12 15.75L4.5 8.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron Up Icon
 * Displays an upward pointing chevron for expand/collapse actions
 */
export const ChevronUpIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M4.5 15.75L12 8.25L19.5 15.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * X Mark Icon
 * Displays an X for close/dismiss actions
 */
export const XMarkIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Icon component map for easy access by name
 * Usage: <Icon name="download" />
 */
export const iconMap = {
  download: DownloadIcon,
  copy: CopyIcon,
  eye: EyeIcon,
  plus: PlusIcon,
  menu: MenuIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  xMark: XMarkIcon,
} as const;

export type IconName = keyof typeof iconMap;

interface IconComponentProps extends IconProps {
  name: IconName;
}

/**
 * Generic Icon component that renders icons by name
 * Usage: <Icon name="download" size={32} className="text-blue-500" />
 */
export const Icon: React.FC<IconComponentProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} />;
};

export default Icon;
