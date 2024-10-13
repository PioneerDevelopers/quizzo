import * as React from 'react';
import BasicCard from './Card';

export interface IFunZoneProps {
}

export default function FunZone (props: IFunZoneProps) {
  return (
    <div>
        <div>
          <BasicCard>
            <h1 className="text-3xl font-bold underline">
              Welcome
            </h1>
          </BasicCard>
        </div>
      Lets get Started
    </div>
  );
}
