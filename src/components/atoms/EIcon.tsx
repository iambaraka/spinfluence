import { FunctionComponent, PropsWithChildren } from 'react';

import { Icon } from '@chakra-ui/react';

// custom icon component
export const EIcon: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...props
}) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      {children}
    </Icon>
  );
};
