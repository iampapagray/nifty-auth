import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  nifty: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none" {...props}>
      <path
        opacity="0.3"
        d="M12.6118 22.8596L0.530056 0L24.3453 11.5817L36.4052 36L12.6118 22.8596ZM0 10.9771L8.27574 26.5108L0 34.477V10.9771ZM28.615 7.98735L36.9024 0.0408858V23.543L28.615 7.98735Z"
        fill="#D0D5DD"
      />
    </svg>
  ),
}
