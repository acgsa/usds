import React from "react";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
}

const defaultSize = 24;

/* Menu Icon */
export const MenuIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Plus Icon */
export const PlusIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* X Mark Icon */
export const XMarkIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.5 4.5L19.5 19.5M19.5 4.5L4.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Check Icon */
export const CheckIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 13L9 19L21 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Down Icon */
export const ArrowDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Up Icon */
export const ArrowUpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Left Icon */
export const ArrowLeftIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Right Icon */
export const ArrowRightIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chevron Down Icon */
export const ChevronDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chevron Up Icon */
export const ChevronUpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chevron Left Icon */
export const ChevronLeftIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chevron Right Icon */
export const ChevronRightIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Search Icon (Magnifying Glass) */
export const SearchIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Ellipsis Horizontal Icon */
export const EllipsisHorizontalIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

/* Settings Icon */
export const SettingsIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V4M12 20V22M22 12H20M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Help Icon */
export const HelpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 9C9 7.9 9.9 7 11 7C12.1 7 13 7.9 13 9C13 8 12.5 6.5 11 6.5M12 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Edit Icon (Pencil) */
export const EditIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 17.25V21H6.75L17.81 9.94M20.53 7.04L16.96 3.47C16.41 2.92 15.59 2.92 15.04 3.47L3 15.51V21H9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Trash Icon */
export const TrashIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 6H5H21M8 6V4C8 3.45 8.45 3 9 3H15C15.55 3 16 3.45 16 4V6M19 6V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V6M8 11V17M12 11V17M16 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Download Icon */
export const DownloadIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2V14M12 14L6 8M12 14L18 8M3 20H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Upload Icon */
export const UploadIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 22V10M12 10L6 16M12 10L18 16M3 4H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Link Icon */
export const LinkIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 13C10.6 14.1 11.6 14.7 13 14.7C15.2 14.7 17 12.9 17 10.7C17 8.5 15.2 6.7 13 6.7C11.6 6.7 10.6 7.3 10 8.4M14 13C13.4 14.1 12.4 14.7 11 14.7C8.8 14.7 7 12.9 7 10.7C7 8.5 8.8 6.7 11 6.7C12.4 6.7 13.4 7.3 14 8.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Copy Icon (Document Duplicate) */
export const CopyIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 9H21V21C21 21.55 20.55 22 20 22H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Eye Icon */
export const EyeIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 12C1 12 4 6 12 6C20 6 23 12 23 12C23 12 20 18 12 18C4 18 1 12 1 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

/* Clock Icon */
export const ClockIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Bookmark Icon */
export const BookmarkIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 2H19C19.55 2 20 2.45 20 3V22L12 17L4 22V3C4 2.45 4.45 2 5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Star Icon (Linear) */
export const StarIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L15.09 8.26H21.77L16.84 12.45L18.93 18.71L12 14.52L5.07 18.71L7.16 12.45L2.23 8.26H8.91L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Document Icon */
export const DocumentIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V9L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Code Icon */
export const CodeIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5L3 12L8 19M16 5L21 12L16 19M14 2L10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Share Icon */
export const ShareIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 12V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V12M16 7L12 3L8 7M12 3V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Collapse Icon */
export const CollapseIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 9L12 5L16 9M8 15L12 19L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Globe Icon */
export const GlobeIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 12H22M12 2C10 6 10 18 12 22C14 18 14 6 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Gear Icon */
export const GearIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.65 6.35M6.35 17.65L4.93 19.07M19.07 19.07L17.65 17.65M6.35 6.35L4.93 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Paperclip Icon */
export const PaperclipIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 18C5.3 18 4 16.7 4 15V9C4 6.24 6.24 4 9 4C11.76 4 14 6.24 14 9V14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Stop Icon */
export const StopIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

/* Arrow Path (Refresh) Icon */
export const RefreshIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 12C3 7.03 7.03 3 12 3C14.37 3 16.55 3.95 17.98 5.52M21 12C21 16.97 16.97 21 12 21C9.63 21 7.45 20.05 6.02 18.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 2V5.5H13M7.5 22V18.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Drawer Closed Icon */
export const DrawerClosedIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 4H20C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4ZM3 9H21M3 14H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Drawer Open Icon */
export const DrawerOpenIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 4H20C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4ZM3 9H21M3 14H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Thumbs Up Icon */
export const ThumbsUpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 21H5C4.45 21 4 20.55 4 20V11C4 10.45 4.45 10 5 10H7M13 2H11C9.9 2 9 2.9 9 4V10C9 10.55 9.45 11 10 11H18C18.83 11 19.54 11.5 19.84 12.2L21.54 16.8C21.83 17.4 21.5 18.2 20.84 18.5C20.3 18.75 19.7 18.6 19.35 18.15L18 16H13V20C13 20.55 12.55 21 12 21H11C10.45 21 10 20.55 10 20V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Thumbs Down Icon */
export const ThumbsDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 3H5C4.45 3 4 3.45 4 4V13C4 13.55 4.45 14 5 14H7M13 22H11C9.9 22 9 21.1 9 20V14C9 13.45 9.45 13 10 13H18C18.83 13 19.54 12.5 19.84 11.8L21.54 7.2C21.83 6.6 21.5 5.8 20.84 5.5C20.3 5.25 19.7 5.4 19.35 5.85L18 8H13V4C13 3.45 12.55 3 12 3H11C10.45 3 10 3.45 10 4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Trending Up Icon */
export const TrendingUpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M23 5L13 15M23 5H17M23 5V11M2 19L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Trending Down Icon */
export const TrendingDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M23 19L13 9M23 19H17M23 19V13M2 5L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Squares Stack Icon */
export const SquaresStackIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

/* Pencil Square Icon */
export const PencilSquareIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 7L17 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chat Linear Icon */
export const ChatIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H19C19.5304 2 20.0391 2.21071 20.4142 2.58579C20.7893 2.96086 21 3.46957 21 4V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Console Linear Icon */
export const ConsoleIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 9L9 12L6 15M12 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* API Linear Icon */
export const ApiIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 9L6 3H18L21 9M3 9V21H21V9M9 15L12 12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Star Fill Icon */
export const StarFillIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L15.09 8.26H21.77L16.84 12.45L18.93 18.71L12 14.52L5.07 18.71L7.16 12.45L2.23 8.26H8.91L12 2Z"/>
  </svg>
);

/* Arrow Long Up Icon */
export const ArrowLongUpIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2V22M12 2L7 7M12 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Long Down Icon */
export const ArrowLongDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2V22M12 22L7 17M12 22L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Line Left Icon */
export const ArrowLineLeftIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 12H22M2 12L7 17M2 12L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Arrow Line Right Icon */
export const ArrowLineRightIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 12H22M22 12L17 17M22 12L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Chevron Up Down Icon */
export const ChevronUpDownIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 7L12 3L16 7M8 17L12 21L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Document with Text Icon */
export const DocumentWithTextIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V9L13 2ZM8 12H16M8 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Document Duplicate Icon */
export const DocumentDuplicateIcon = ({ size = defaultSize, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 6H16C16.55 6 17 6.45 17 7V17M5 9H13C13.55 9 14 9.45 14 10V20C14 20.55 13.55 21 13 21H5C4.45 21 4 20.55 4 20V10C4 9.45 4.45 9 5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
