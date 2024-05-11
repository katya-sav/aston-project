import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../shared/ui';

type Props = {
  isFavorite: boolean;
  onClick: () => void;
};

export const FavoritesButton = ({ isFavorite, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClick();
  };
  return (
    <div onClick={handleClick}>
      <Icon icon={isFavorite ? faHeartSolid : faHeart} size="xl" />
    </div>
  );
};
