import React from "react";
import { StatusCardStyle } from "./StatusCard.Desktop";
import { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  count: string;
  label: string;
  iconBgColor: string;
  iconColor: string;
}

const StatusCard = ({
  Icon,
  count,
  label,
  iconBgColor,
  iconColor,
}: Props) => {
  return (
    <StatusCardStyle.Container>
      <StatusCardStyle.Content>
        <StatusCardStyle.ContentCount>
          {count}
        </StatusCardStyle.ContentCount>
        <StatusCardStyle.ContentLabel>
          {label}
        </StatusCardStyle.ContentLabel>
      </StatusCardStyle.Content>
      <StatusCardStyle.IconContent
        iconBgColor={iconBgColor}
        iconColor={iconColor}
      >
        <Icon />
      </StatusCardStyle.IconContent>
    </StatusCardStyle.Container>
  );
};

export default StatusCard;
