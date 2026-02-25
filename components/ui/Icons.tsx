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
    <path d="M12.8438 3.84375C12.8438 3.37776 12.466 3 12 3C11.534 3 11.1563 3.37776 11.1563 3.84375V13.534L7.83217 10.0144C7.51221 9.67563 6.97819 9.66037 6.63941 9.98033C6.30063 10.3003 6.28538 10.8343 6.60533 11.1731L11.3866 16.2356C11.546 16.4044 11.7679 16.5 12 16.5C12.2321 16.5 12.454 16.4044 12.6134 16.2356L17.3947 11.1731C17.7146 10.8343 17.6994 10.3003 17.3606 9.98033C17.0218 9.66037 16.4878 9.67563 16.1678 10.0144L12.8438 13.534V3.84375Z" fill="currentColor"/>
    <path d="M4.6875 15.0938C4.6875 14.6278 4.30974 14.25 3.84375 14.25C3.37776 14.25 3 14.6278 3 15.0938V17.9062C3 19.6149 4.38512 21 6.09375 21H17.9062C19.6149 21 21 19.6149 21 17.9062V15.0938C21 14.6278 20.6222 14.25 20.1562 14.25C19.6903 14.25 19.3125 14.6278 19.3125 15.0938V17.9062C19.3125 18.6829 18.6829 19.3125 17.9062 19.3125H6.09375C5.3171 19.3125 4.6875 18.6829 4.6875 17.9062V15.0938Z" fill="currentColor"/>
  </svg>
);

/**
 * Upload Icon
 * Displays an upload arrow pointing upward with a save indicator below
 */
export const UploadIcon: React.FC<IconProps> = ({
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
    <path d="M11.1563 15.6562C11.1563 16.1222 11.534 16.5 12 16.5C12.466 16.5 12.8438 16.1222 12.8438 15.6562L12.8438 5.96597L16.1678 9.48559C16.4878 9.82437 17.0218 9.83963 17.3606 9.51967C17.6994 9.19971 17.7146 8.66569 17.3947 8.32691L12.6134 3.26441C12.454 3.09564 12.2321 3 12 3C11.7679 3 11.546 3.09564 11.3866 3.26441L6.60534 8.32691C6.28537 8.66569 6.30063 9.19971 6.63941 9.51967C6.97819 9.83963 7.51221 9.82437 7.83217 9.48559L11.1563 5.96597L11.1563 15.6562Z" fill="currentColor"/>
    <path d="M4.6875 15.0938C4.6875 14.6278 4.30974 14.25 3.84375 14.25C3.37776 14.25 3 14.6278 3 15.0938V17.9062C3 19.6149 4.38512 21 6.09375 21H17.9062C19.6149 21 21 19.6149 21 17.9062V15.0938C21 14.6278 20.6222 14.25 20.1562 14.25C19.6903 14.25 19.3125 14.6278 19.3125 15.0938V17.9062C19.3125 18.6829 18.6829 19.3125 17.9062 19.3125H6.09375C5.3171 19.3125 4.6875 18.6829 4.6875 17.9062V15.0938Z" fill="currentColor"/>
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
 * Drawer Closed Icon
 * Displays parallel lines representing a closed drawer/navigation panel
 */
export const DrawerClosedIcon: React.FC<IconProps> = ({
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
      d="M9.18018 3.27196V20.9481M5.25 3H18.75C19.9926 3 21 4.09894 21 5.45455V18.5455C21 19.9011 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9011 3 18.5455V5.45455C3 4.09894 4.00736 3 5.25 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Drawer Open Icon
 * Displays a panel open representation for drawer/navigation panel
 */
export const DrawerOpenIcon: React.FC<IconProps> = ({
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
      d="M8.18018 5.45501V18.5459M5.25 3H18.75C19.9926 3 21 4.09894 21 5.45455V18.5455C21 19.9011 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9011 3 18.5455V5.45455C3 4.09894 4.00736 3 5.25 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Arrow Line Right Icon
 * Displays a right-pointing arrow with line for navigation
 */
export const ArrowLineRightIcon: React.FC<IconProps> = ({
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
      d="M11.75 18L18 12M18 12L11.75 6M18 12L3 12M21 3V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Arrow Line Left Icon
 * Displays a left-pointing arrow with line for navigation
 */
export const ArrowLineLeftIcon: React.FC<IconProps> = ({
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
      d="M12.25 18L6 12M6 12L12.25 6M6 12L21 12M3 3V21"
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
  upload: UploadIcon,
  copy: CopyIcon,
  eye: EyeIcon,
  plus: PlusIcon,
  menu: MenuIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  xMark: XMarkIcon,
  drawerClosed: DrawerClosedIcon,
  drawerOpen: DrawerOpenIcon,
  arrowLineRight: ArrowLineRightIcon,
  arrowLineLeft: ArrowLineLeftIcon,
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
