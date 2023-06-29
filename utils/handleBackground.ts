import {type CSSProperties} from 'vue';
import {resolveAssetUrl} from './resolveAssetUrl';

export const handleBackground = (background?: string, dim = false): CSSProperties => {
  const isColor = background?.startsWith('#') && background.startsWith('rgb');

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
      ? dim
        ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
        : `url("${resolveAssetUrl(background)}")`
      : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (!style.background) delete style.background;

  return style;
};
