# Emotion grid

A responsive (mobile-first) grid system built with emotion.

## Quick start

### Installation

Can you use **yarn** or **npm**.

```
$ yarn add emotion-grid
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
$ yarn docz:dev
```

## Looking for docs

Can you check [here](https://google.com/), guides and API reference.

## Built with

- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Docz](https://www.docz.site/)
- [Preconstruct](https://preconstruct.tools/)

## Contributing

Feel like contributing? That's awesome! We have a [contributing guide](https://google.com/) to help guide you.
