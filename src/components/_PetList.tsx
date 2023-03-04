import React, { FC } from 'react';
import PetCard from './_PetCard';

import { IPetList } from '../interfaces/IPetList';

const PetList: FC<IPetList> = ({ petSrcs }) => {
  return (
    <React.Fragment>
      {petSrcs.map((src: string, index: number) => (
        <PetCard key={`${src}_${index}`} src={src} />
      ))}
    </React.Fragment>
  );
};

export default PetList;
