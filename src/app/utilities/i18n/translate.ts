import { InitTranslateServices } from './factory';

export function Translate(props: TranslateProps) {
  return (target: Function) => {
    InitTranslateServices();
    if (props.en) {
      (<any>window).translationLoader.extend('en', props.en);
    }
  };
}

interface TranslateProps {
  en?: any;
}
