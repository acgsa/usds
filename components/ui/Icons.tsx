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
 * Star Icon (Linear/Default)
 * Displays an outlined star
 */
export const StarIcon: React.FC<IconProps> = ({
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
      d="M11.4806 3.61064C11.6728 3.14867 12.3272 3.14867 12.5193 3.61064L14.6453 8.7221C14.7263 8.91686 14.9095 9.04993 15.1197 9.06678L20.638 9.50918C21.1367 9.54916 21.339 10.1716 20.959 10.4971L16.7546 14.0985C16.5945 14.2357 16.5245 14.4511 16.5734 14.6562L17.8579 20.0411C17.974 20.5278 17.4446 20.9125 17.0176 20.6517L12.2932 17.766C12.1132 17.6561 11.8868 17.6561 11.7068 17.766L6.98238 20.6517C6.55539 20.9125 6.02594 20.5278 6.14203 20.0411L7.42652 14.6562C7.47546 14.4511 7.4055 14.2357 7.24531 14.0985L3.04099 10.4971C2.661 10.1716 2.86323 9.54916 3.36197 9.50918L8.88022 9.06678C9.09048 9.04993 9.27363 8.91686 9.35464 8.7221L11.4806 3.61064Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Star Icon Filled (Active)
 * Displays a filled star
 */
export const StarIconFilled: React.FC<IconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7881 3.3214C11.2364 2.24345 12.7635 2.24345 13.2118 3.3214L15.2938 8.32711L20.6979 8.76036C21.8616 8.85365 22.3335 10.3059 21.4469 11.0654L17.3295 14.5924L18.5874 19.8659C18.8583 21.0015 17.6229 21.899 16.6266 21.2905L11.9999 18.4645L7.37329 21.2905C6.37697 21.899 5.14158 21.0015 5.41246 19.8659L6.67038 14.5924L2.55303 11.0654C1.66639 10.3059 2.13826 8.85365 3.302 8.76036L8.70609 8.32711L10.7881 3.3214Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Chat Icon (Linear/Default)
 * Displays an outlined chat bubble
 */
export const ChatIcon: React.FC<IconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0508 3.0791C19.5571 3.0795 21.5897 5.11175 21.5898 7.61816V13.2832C21.5898 15.7897 19.5572 17.8219 17.0508 17.8223H13.2383L9.18555 21.6602C8.58529 22.2282 7.5957 21.8021 7.5957 20.9756V17.8213C5.09917 17.8093 3.0791 15.7825 3.0791 13.2832V7.61816C3.07922 5.11158 5.11158 3.07922 7.61816 3.0791H17.0508ZM7.61816 4.37988C5.82955 4.38 4.38 5.82955 4.37988 7.61816V13.2832C4.37988 15.0719 5.82947 16.5223 7.61816 16.5225H8.24707C8.60578 16.5228 8.89648 16.8141 8.89648 17.1729V20.1426L12.5322 16.7012C12.6579 16.5822 12.819 16.5246 12.9795 16.5244V16.5225H17.0508C18.8392 16.5221 20.2891 15.0717 20.2891 13.2832V7.61816C20.2889 5.82972 18.8392 4.38028 17.0508 4.37988H7.61816Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Chat Icon Filled (Active)
 * Displays a filled chat bubble
 */
export const ChatIconFilled: React.FC<IconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0508 3C19.6009 3.00039 21.6688 5.06802 21.6689 7.61816V13.2832C21.6688 15.8333 19.6009 17.901 17.0508 17.9014H13.2686L9.23926 21.7168C8.58852 22.3323 7.5166 21.8705 7.5166 20.9746V17.8984C5.01299 17.8445 3.00011 15.7997 3 13.2832V7.61816C3.00012 5.06785 5.06785 3.00012 7.61816 3H17.0508Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Console Icon (Linear/Default)
 * Displays a console with bars
 */
export const ConsoleIcon: React.FC<IconProps> = ({
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
      d="M7.3461 5.2793V19.7051H2.1V5.2793H7.3461ZM3.6 18.2051H5.8461V6.7793H3.6V18.2051Z"
      fill="currentColor"
    />
    <path
      d="M14.5592 9.21289V19.7051H9.31314V9.21289H14.5592ZM10.8131 18.2051H13.0592V10.7129H10.8131V18.2051Z"
      fill="currentColor"
    />
    <path
      d="M21.7721 2V19.7049H16.5262V2H21.7721ZM18.0262 18.2049H20.2722V3.49999H18.0262V18.2049Z"
      fill="currentColor"
    />
    <path d="M22.1943 21.25V22.75H1.67773V21.25H22.1943Z" fill="currentColor" />
  </svg>
);

/**
 * Console Icon Filled (Active)
 * Displays a filled console with bars
 */
export const ConsoleIconFilled: React.FC<IconProps> = ({
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
    <path d="M2.1 5.2793H7.34591V19.7055H2.1V5.2793Z" fill="currentColor" />
    <path
      d="M7.34591 5.2793V19.7055H2.1V5.2793H7.34591ZM3.6 18.2051H5.8461V6.7793H3.6V18.2051Z"
      fill="currentColor"
    />
    <path d="M9.31314 9.21289H14.559V19.7047H9.31314V9.21289Z" fill="currentColor" />
    <path
      d="M14.559 9.21289V19.7047H9.31314V9.21289H14.559ZM10.8131 18.2051H13.0592V10.7129H10.8131V18.2051Z"
      fill="currentColor"
    />
    <path d="M16.5262 2H21.7721V19.7049H16.5262V2Z" fill="currentColor" />
    <path
      d="M21.7721 2V19.7049H16.5262V2H21.7721ZM18.0262 18.2049H20.2722V3.49999H18.0262V18.2049Z"
      fill="currentColor"
    />
    <path d="M22.1943 21.25V22.75H1.67773V21.25H22.1943Z" fill="currentColor" />
  </svg>
);

/**
 * API Icon (Linear/Default)
 * Displays an API interface icon
 */
export const APIIcon: React.FC<IconProps> = ({
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
      d="M17.8332 19.04V20.54H6.16718V19.04H17.8332ZM18.8332 18.04V6.37402C18.8332 5.82174 18.3855 5.37402 17.8332 5.37402H6.16718C5.61489 5.37402 5.16718 5.82174 5.16718 6.37402V18.04C5.16718 18.5923 5.61489 19.04 6.16718 19.04V20.54L5.91132 20.5273C4.6508 20.3992 3.66718 19.3344 3.66718 18.04V6.37402C3.66718 4.99331 4.78646 3.87402 6.16718 3.87402H17.8332C19.2139 3.87402 20.3332 4.99331 20.3332 6.37402V18.04C20.3332 19.4208 19.2139 20.54 17.8332 20.54V19.04C18.3855 19.04 18.8332 18.5923 18.8332 18.04Z"
      fill="currentColor"
    />
    <path
      d="M8.75 21.9999V20.3329C8.75003 19.9188 9.08581 19.5829 9.5 19.5829C9.91414 19.583 10.25 19.9188 10.25 20.3329V21.9999C10.2498 22.414 9.91406 22.7499 9.5 22.7499C9.08588 22.7499 8.75016 22.414 8.75 21.9999ZM11.25 21.9999V20.3329C11.25 19.9189 11.5859 19.5831 12 19.5829C12.4142 19.5829 12.75 19.9188 12.75 20.3329V21.9999C12.7498 22.414 12.4141 22.7499 12 22.7499C11.586 22.7498 11.2502 22.4139 11.25 21.9999ZM13.75 21.9999V20.3329C13.75 19.9188 14.0858 19.5829 14.5 19.5829C14.914 19.5832 15.25 19.9189 15.25 20.3329V21.9999C15.2498 22.4139 14.9139 22.7497 14.5 22.7499C14.0859 22.7499 13.7502 22.414 13.75 21.9999ZM3.66699 13.7499C4.08102 13.7501 4.41696 14.0859 4.41699 14.4999C4.41699 14.914 4.08104 15.2497 3.66699 15.2499H2C1.58579 15.2499 1.25 14.9142 1.25 14.4999C1.25003 14.0858 1.58581 13.7499 2 13.7499H3.66699ZM22 13.7499C22.4142 13.7499 22.75 14.0858 22.75 14.4999C22.75 14.9142 22.4142 15.2499 22 15.2499H20.334C19.9198 15.2499 19.584 14.9142 19.584 14.4999C19.584 14.0858 19.9198 13.7499 20.334 13.7499H22ZM3.66699 11.2499C4.08102 11.2501 4.41696 11.5859 4.41699 11.9999C4.41699 12.414 4.08104 12.7497 3.66699 12.7499H2C1.58579 12.7499 1.25 12.4142 1.25 11.9999C1.25003 11.5858 1.58581 11.2499 2 11.2499H3.66699ZM22 11.2499C22.4142 11.2499 22.75 11.5858 22.75 11.9999C22.75 12.4142 22.4142 12.7499 22 12.7499H20.334C19.9198 12.7499 19.584 12.4142 19.584 11.9999C19.584 11.5858 19.9198 11.2499 20.334 11.2499H22ZM3.66699 8.74994C4.08104 8.75013 4.41699 9.08584 4.41699 9.49994C4.41696 9.91401 4.08102 10.2497 3.66699 10.2499H2C1.58581 10.2499 1.25003 9.91412 1.25 9.49994C1.25 9.08573 1.58579 8.74994 2 8.74994H3.66699ZM22 8.74994C22.4142 8.74994 22.75 9.08573 22.75 9.49994C22.75 9.91412 22.4142 10.2499 22 10.2499H20.334C19.9198 10.2499 19.584 9.91412 19.584 9.49994C19.584 9.08573 19.9198 8.74994 20.334 8.74994H22ZM8.75 3.66693V1.99994C8.75 1.58573 9.08579 1.24994 9.5 1.24994C9.91416 1.25001 10.25 1.58577 10.25 1.99994V3.66693C10.2498 4.08094 9.91404 4.41686 9.5 4.41693C9.0859 4.41693 8.75019 4.08098 8.75 3.66693ZM11.25 3.66693V1.99994C11.25 1.58583 11.5859 1.25011 12 1.24994C12.4142 1.24994 12.75 1.58573 12.75 1.99994V3.66693C12.7498 4.08098 12.4141 4.41693 12 4.41693C11.586 4.41676 11.2502 4.08088 11.25 3.66693ZM13.749 3.66693V1.99994C13.749 1.58588 14.085 1.2502 14.499 1.24994C14.9132 1.24994 15.249 1.58573 15.249 1.99994V3.66693C15.2488 4.08098 14.9131 4.41693 14.499 4.41693C14.0851 4.41667 13.7492 4.08082 13.749 3.66693Z"
      fill="currentColor"
    />
    <path
      d="M13.5347 14.5345V16.0345H10.2788V14.5345H13.5347ZM14.5347 13.5345V10.2786C14.5347 9.72629 14.087 9.27857 13.5347 9.27857H10.2788C9.72654 9.27857 9.27882 9.72629 9.27882 10.2786V13.5345C9.27882 14.0868 9.72654 14.5345 10.2788 14.5345V16.0345L10.023 16.0218C8.76243 15.8937 7.77881 14.8288 7.77881 13.5345V10.2786C7.77881 8.98423 8.76243 7.91939 10.023 7.79126L10.2788 7.77856H13.5347C14.9154 7.77856 16.0347 8.89786 16.0347 10.2786V13.5345C16.0347 14.9152 14.9154 16.0345 13.5347 16.0345V14.5345C14.087 14.5345 14.5347 14.0868 14.5347 13.5345Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * API Icon Filled (Active)
 * Displays a filled API interface icon
 */
export const APIIconFilled: React.FC<IconProps> = ({
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
      d="M17.8331 19.0412V20.5412H6.16705V19.0412H17.8331ZM18.8331 18.0412V6.37518C18.8331 5.8229 18.3854 5.37518 17.8331 5.37518H6.16705C5.61477 5.37518 5.16705 5.8229 5.16705 6.37518V18.0412C5.16705 18.5935 5.61477 19.0412 6.16705 19.0412V20.5412L5.91119 20.5285C4.65068 20.4004 3.66705 19.3355 3.66705 18.0412V6.37518C3.66705 4.99447 4.78634 3.87518 6.16705 3.87518H17.8331C19.2138 3.87518 20.3331 4.99447 20.3331 6.37518V18.0412C20.3331 19.4219 19.2138 20.5412 17.8331 20.5412V19.0412C18.3854 19.0412 18.8331 18.5935 18.8331 18.0412Z"
      fill="currentColor"
    />
    <path
      d="M8.74975 3.66718V2.00018C8.74975 1.58597 9.08554 1.25018 9.49975 1.25018C9.91397 1.25018 10.2498 1.58597 10.2498 2.00018V3.66718C10.2496 4.08123 9.91385 4.41718 9.49975 4.41718C9.08566 4.41718 8.74994 4.08123 8.74975 3.66718Z"
      fill="currentColor"
    />
    <path
      d="M3.66687 15.2502L1.99988 15.2502C1.58566 15.2502 1.24988 14.9144 1.24988 14.5002C1.24988 14.086 1.58566 13.7502 1.99988 13.7502L3.66687 13.7502C4.08092 13.7504 4.41687 14.0861 4.41687 14.5002C4.41687 14.9143 4.08092 15.25 3.66687 15.2502Z"
      fill="currentColor"
    />
    <path
      d="M22.0005 15.2502L20.3335 15.2502C19.9193 15.2502 19.5835 14.9144 19.5835 14.5002C19.5835 14.086 19.9193 13.7502 20.3335 13.7502L22.0005 13.7502C22.4146 13.7504 22.7505 14.0861 22.7505 14.5002C22.7505 14.9143 22.4146 15.25 22.0005 15.2502Z"
      fill="currentColor"
    />
    <path
      d="M8.74976 22.0002V20.3332C8.74976 19.919 9.08554 19.5832 9.49976 19.5832C9.91397 19.5832 10.2498 19.919 10.2498 20.3332V22.0002C10.2496 22.4142 9.91385 22.7502 9.49976 22.7502C9.08566 22.7502 8.74995 22.4142 8.74976 22.0002Z"
      fill="currentColor"
    />
    <path
      d="M11.2502 3.66718V2.00018C11.2502 1.58597 11.586 1.25018 12.0002 1.25018C12.4144 1.25018 12.7502 1.58597 12.7502 2.00018V3.66718C12.75 4.08123 12.4143 4.41718 12.0002 4.41718C11.5861 4.41718 11.2504 4.08123 11.2502 3.66718Z"
      fill="currentColor"
    />
    <path
      d="M3.66687 12.7502L1.99988 12.7502C1.58566 12.7502 1.24988 12.4144 1.24988 12.0002C1.24988 11.586 1.58566 11.2502 1.99988 11.2502L3.66687 11.2502C4.08092 11.2504 4.41687 11.5861 4.41687 12.0002C4.41687 12.4143 4.08092 12.75 3.66687 12.7502Z"
      fill="currentColor"
    />
    <path
      d="M22.0005 12.7502L20.3335 12.7502C19.9193 12.7502 19.5835 12.4144 19.5835 12.0002C19.5835 11.586 19.9193 11.2502 20.3335 11.2502L22.0005 11.2502C22.4146 11.2504 22.7505 11.5861 22.7505 12.0002C22.7505 12.4143 22.4146 12.75 22.0005 12.7502Z"
      fill="currentColor"
    />
    <path
      d="M11.2502 22.0002V20.3332C11.2502 19.919 11.586 19.5832 12.0002 19.5832C12.4144 19.5832 12.7502 19.919 12.7502 20.3332V22.0002C12.75 22.4142 12.4143 22.7502 12.0002 22.7502C11.5861 22.7502 11.2504 22.4142 11.2502 22.0002Z"
      fill="currentColor"
    />
    <path
      d="M13.7494 3.66718V2.00018C13.7494 1.58597 14.0852 1.25018 14.4994 1.25018C14.9136 1.25018 15.2494 1.58597 15.2494 2.00018V3.66718C15.2492 4.08123 14.9135 4.41718 14.4994 4.41718C14.0853 4.41718 13.7496 4.08123 13.7494 3.66718Z"
      fill="currentColor"
    />
    <path
      d="M3.66687 10.2501L1.99988 10.2501C1.58566 10.2501 1.24988 9.91433 1.24988 9.50012C1.24988 9.08591 1.58566 8.75012 1.99988 8.75012H3.66687C4.08092 8.75031 4.41687 9.08602 4.41687 9.50012C4.41687 9.91422 4.08092 10.2499 3.66687 10.2501Z"
      fill="currentColor"
    />
    <path
      d="M22.0005 10.2501L20.3335 10.2501C19.9193 10.2501 19.5835 9.91433 19.5835 9.50012C19.5835 9.08591 19.9193 8.75012 20.3335 8.75012H22.0005C22.4146 8.75031 22.7505 9.08602 22.7505 9.50012C22.7505 9.91422 22.4146 10.2499 22.0005 10.2501Z"
      fill="currentColor"
    />
    <path
      d="M13.7494 22.0002V20.3332C13.7494 19.919 14.0852 19.5832 14.4994 19.5832C14.9136 19.5832 15.2494 19.919 15.2494 20.3332V22.0002C15.2492 22.4142 14.9135 22.7502 14.4994 22.7502C14.0853 22.7502 13.7496 22.4142 13.7494 22.0002Z"
      fill="currentColor"
    />
    <path
      d="M7.99988 10.2785C7.99988 8.89779 9.11917 7.7785 10.4999 7.7785H13.7558C15.1365 7.7785 16.2558 8.89779 16.2558 10.2785V13.5344C16.2558 14.9152 15.1365 16.0344 13.7558 16.0344H10.4999C9.11917 16.0344 7.99988 14.9152 7.99988 13.5344V10.2785Z"
      fill="currentColor"
    />
    <path
      d="M13.7558 14.5344L13.7558 16.0344H10.4999L10.4999 14.5344H13.7558ZM14.7558 13.5344V10.2785C14.7558 9.72624 14.3081 9.27852 13.7558 9.27852H10.4999C9.94761 9.27852 9.49989 9.72624 9.49989 10.2785V13.5344C9.49989 14.0867 9.94761 14.5344 10.4999 14.5344L10.4999 16.0344C9.11917 16.0344 7.99988 14.9152 7.99988 13.5344V10.2785C7.99988 8.89779 9.11917 7.7785 10.4999 7.7785H13.7558C15.1365 7.7785 16.2558 8.89779 16.2558 10.2785V13.5344C16.2558 14.9152 15.1365 16.0344 13.7558 16.0344L13.7558 14.5344C14.3081 14.5344 14.7558 14.0867 14.7558 13.5344Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Help Icon (Linear/Default)
 * Displays a help icon
 */
export const HelpIcon: React.FC<IconProps> = ({
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
      d="M9.09009 8.99999C9.32519 8.33166 9.78924 7.7681 10.4 7.40912C11.0108 7.05015 11.729 6.91893 12.4273 7.0387C13.1255 7.15848 13.7589 7.52151 14.2152 8.06352C14.6714 8.60552 14.9211 9.29151 14.9201 9.99999C14.9201 12 11.9201 13 11.9201 13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Help Icon Filled (Active)
 * Displays a filled help icon
 */
export const HelpIconFilled: React.FC<IconProps> = ({
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill="currentColor"
    />
    <path
      d="M9.09009 8.99999C9.32519 8.33166 9.78924 7.7681 10.4 7.40912C11.0108 7.05015 11.729 6.91893 12.4273 7.0387C13.1255 7.15848 13.7589 7.52151 14.2152 8.06352C14.6714 8.60552 14.9211 9.29151 14.9201 9.99999C14.9201 12 11.9201 13 11.9201 13M12 17H12.01"
      stroke="var(--color-bg-subtle)"
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
  star: StarIcon,
  starFilled: StarIconFilled,
  chat: ChatIcon,
  chatFilled: ChatIconFilled,
  console: ConsoleIcon,
  consoleFilled: ConsoleIconFilled,
  api: APIIcon,
  apiFilled: APIIconFilled,
  help: HelpIcon,
  helpFilled: HelpIconFilled,
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
