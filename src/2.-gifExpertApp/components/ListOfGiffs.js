import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import {GiffCard} from './GiffCard'
import './listOfGiffs.css'

export const ListOfGiffs = ({categories=[]}) => {
    return (
      <div className="listContainer">
        {categories.map((giff) => (
            <Fragment key={giff.id}>
            <GiffCard giff={giff} />
            </Fragment>
        ))}
      </div>
    );
}
