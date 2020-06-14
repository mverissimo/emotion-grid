import React from 'react';
import { render } from '@testing-library/react';

import { Row } from './Row';
import { Col } from '../Col';

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
    const { container } = render(<Row>Row</Row>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with reverse styles when passed the reverse prop', () => {
    const { container } = render(<Row reverse>Row reverse</Row>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(breakpoints)(
    'should render reverse styles with breakpoint %s',
    (breakpoint) => {
      const { container } = render(
        <Row reverse={[breakpoint]}>Row reverse {breakpoint}</Row>
      );

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it.each(align)(
    'should render align styles when passed the align %s prop as string',
    (propertie) => {
      const { container } = render(
        <Row align={propertie}>Row align {propertie}</Row>
      );

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it('should render align styles when passed the align prop as object', () => {
    const { container } = render(<Row align={{ md: 'center' }}>Row align</Row>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(justify)(
    'should render justify styles when when passed the justify %s prop as string',
    (propertie) => {
      const { container } = render(
        <Row justify={propertie}>Row justify {propertie}</Row>
      );

      expect(container.firstChild).toMatchSnapshot();
    }
  );

  it('should render justify styles when passed the align prop as object', () => {
    const { container } = render(
      <Row justify={{ md: 'center' }}>Row justify</Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with noGutters styles when passed the noGutters prop', () => {
    const { container } = render(
      <Row noGutters>
        <Col>Col</Col>
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
