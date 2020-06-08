import React from 'react';
import { render } from '@testing-library/react';

import { Row } from './Row';

describe('Row', () => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  const align = [
    'baseline',
    'center',
    'flex-start',
    'flex-end',
    'stretch',
  ] as const;

  const justify = [
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ] as const;

  it('should render with default styles', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with reverse styles when passed the reverse prop', () => {
    const { container } = render(<Row reverse />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(breakpoints)(
    'should render reverse styles with breakpoint %s',
    (breakpoint) => {
      const { container } = render(<Row reverse={[breakpoint]} />);

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(align)(
    'should render align styles when passed the align %s prop as string',
    (propertie) => {
      const { container } = render(<Row align={propertie} />);

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it('should render align styles when passed the align prop as object', () => {
    const { container } = render(<Row align={{ md: 'center' }} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(justify)(
    'should render justify styles when when passed the justify %s prop as string',
    (propertie) => {
      const { container } = render(<Row justify={propertie} />);

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it('should render justify styles when passed the align prop as object', () => {
    const { container } = render(<Row justify={{ md: 'center' }} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
