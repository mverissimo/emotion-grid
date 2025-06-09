# DEPRECATED

Use [emotion-grid-system](https://github.com/mverissimo/emotion-grid-system) instead


# Emotion grid

A responsive (mobile-first) grid system built with emotion.

## Quick start

### Installation

You can use **yarn** or **npm**.

> Emotion is used has peerDependencie, so you need install to.

```bash
yarn add @emotion/react @emotion/styled @mverissimoo/emotion-grid
```

### Usage

```jsx
import { Container, Row, Col } from '@mverissimoo/emotion-grid';

function Page() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={6} xl={12}>
          Col
        </Col>
        <Col xs={4} md={6} xl={12}>
          Col
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
```

## Development

```bash
yarn docz:dev
```

## Looking for docs

You can check [here](https://emotion-grid.netlify.app/), guides and API reference.

## Built with

- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Docz](https://www.docz.site/)
- [Preconstruct](https://preconstruct.tools/)

## Contributing

Feel like contributing? That's awesome! We have a [contributing guide](https://github.com/mverissimo/emotion-grid/blob/master/CONTRIBUTING.md) to help guide you.
