import React, { useState } from 'react';
import {ToolTipDesktop} from "./ToolTip.Desktop";


interface ToolTipProps {
  children?: React.ReactNode;
  title?: string;
  content: string;
}
export const ToolTip = ({ content }: ToolTipProps) => {
  const [hover, setHover] = useState<boolean>(false);


  return (
    <ToolTipDesktop.Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <>
          <ToolTipDesktop.Center/>
          <ToolTipDesktop.Content>{content}</ToolTipDesktop.Content>
        </>
      )}
    </ToolTipDesktop.Container>
  );
}

export default ToolTip;
