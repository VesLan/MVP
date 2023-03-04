import React from 'react';

export interface IProjectList {
  showMd: boolean;
  setShowMd: React.Dispatch<React.SetStateAction<boolean>>;
  setProjIndex: React.Dispatch<
    React.SetStateAction<number>
  >;
}
