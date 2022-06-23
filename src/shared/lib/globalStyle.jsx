import { Global } from '@emotion/react';

export default function GolbalStyle() {
  return (
    <Global styles={{
      '*': {
        margin: 0,
        padding: 0,
      },
    }}
    />
  );
}
