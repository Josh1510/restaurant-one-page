import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';

export default function SkeletonMenu() {
  return (
    <SkeletonContainer>
      <Skeleton height={48} width="40%" />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton height={48} width="40%" />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={48}
        width="40%"
        style={{ marginLeft: 20, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
      <Skeleton
        height={38}
        width="100%"
        style={{ marginLeft: 40, marginTop: -8 }}
      />
    </SkeletonContainer>
  );
}

const SkeletonContainer = styled.div`
  width: 500px;
`;
