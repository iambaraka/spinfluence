import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

import { Box } from '@chakra-ui/react';

type PageContentContainerProps = {
  Nav: FunctionComponent<{
    isSticky?: boolean;
  }>;
};

export const PageCOntentContainer: FunctionComponent<
  PropsWithChildren<PageContentContainerProps>
> = ({ children, Nav }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStickyStateChange = useCallback(
    (isSticky: boolean) => {
      setIsSticky(isSticky);
    },
    [setIsSticky],
  );

  useEffect(() => {
    // if user scrolls down, then the header will be sticky and vice versa
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleStickyStateChange(true);
      } else {
        handleStickyStateChange(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 50) {
          handleStickyStateChange(true);
        } else {
          handleStickyStateChange(false);
        }
      });
    };
  }, [handleStickyStateChange]);

  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <Box style={style} zIndex={'sticky'}>
            <Nav isSticky={isSticky} />
          </Box>
        )}
      </Sticky>
      {children}
    </StickyContainer>
  );
};
