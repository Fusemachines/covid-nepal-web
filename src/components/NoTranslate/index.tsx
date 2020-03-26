import React, { FC } from 'react';

interface NoTranslateProps {
  noTranslate: any
}

const NoTranslate: FC<NoTranslateProps> = (props: NoTranslateProps) => {
  return (
    <span className="notranslate">{props.noTranslate}</span>
  )
}

interface NoTransWrapperProps {
  children: any
}

export const NoTransWrapper: FC<NoTransWrapperProps> = (props: NoTransWrapperProps) => {
  return (<span className="notranslate">{props.children}</span>)
}



export default NoTranslate;
