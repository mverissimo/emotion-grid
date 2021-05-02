import { render } from '@testing-library/react';

import { Row } from '.';
import { Col } from '../Col';

import { Breakpoints, Align, Justify } from '../../types/emotion';

describe('Row', () => {
  it('should render with default styles', () => {
    const {
      container: { firstChild },
    } = render(<Row>Row</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render with reverse styles when passed the reverse prop', () => {
    const {
      container: { firstChild },
    } = render(<Row reverse>Row reverse</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as Breakpoints[])(
    'should render reverse styles on breakpoint %s',
    (breakpoint) => {
      const {
        container: { firstChild },
      } = render(<Row reverse={[breakpoint]}>Row reverse {breakpoint}</Row>);

      expect(firstChild).toMatchSnapshot();
    }
  );

  it('should render reverse styles with an array of breakpoints', () => {
    const {
      container: { firstChild },
    } = render(<Row reverse={['xs', 'sm', 'md']}>Row reverse</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it.each([
    'baseline',
    'center',
    'flex-start',
    'flex-end',
    'stretch',
  ] as Align[])('should render align %s styles', (propertie) => {
    const {
      container: { firstChild },
    } = render(<Row align={propertie}>Row align {propertie}</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render align styles when passed the align prop as object', () => {
    const {
      container: { firstChild },
    } = render(<Row align={{ md: 'center' }}>Row align</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it.each([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ] as Justify[])(
    'should render justify styles when when passed the justify %s prop as string',
    (propertie) => {
      const {
        container: { firstChild },
      } = render(<Row justify={propertie}>Row justify {propertie}</Row>);

      expect(firstChild).toMatchSnapshot();
    }
  );

  it('should render justify styles when passed the align prop as object', () => {
    const {
      container: { firstChild },
    } = render(<Row justify={{ md: 'center' }}>Row justify</Row>);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render with noGutters styles when passed the noGutters prop', () => {
    const {
      container: { firstChild },
    } = render(
      <Row noGutters>
        <Col>Col</Col>
      </Row>
    );

    expect(firstChild).toMatchSnapshot();
  });
});
