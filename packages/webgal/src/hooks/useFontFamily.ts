import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { textFont } from '@/store/userDataInterface';
import { match } from '@/Core/util/match';

export function useFontFamily() {
  const fontFamily = useSelector((state: RootState) => state.userData.optionData.textboxFont);

  function getFont() {
    return match(fontFamily)
      // .with(textFont.junjun, () => '"JJ", serif')
      // .with(textFont.shijin, () => '"SJ", serif')
      .with(textFont.yuanhei, () => '"YH", serif')
      .with(textFont.fangyuan, () => '"WebgalUI", serif')
      .default(() => '"WebgalUI", serif');
  }

  return getFont();
}
