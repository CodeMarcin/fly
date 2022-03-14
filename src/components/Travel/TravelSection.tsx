type TravelSectionProps = {
  children: React.ReactNode;
  className: string;
}

export const TravelSection = ({children, className}: TravelSectionProps) => {
  return (
    <div className={className}>{children}</div>
  )
}
