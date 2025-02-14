// @flow

import clsx from 'clsx';
import React from 'react';
import bulletIcon from '../icons/Icon=bullet.svg';
import closeIcon from '../icons/Icon=close.svg';
import dateIcon from '../icons/Icon=date.svg';
import downIcon from '../icons/Icon=down.svg';
import exportIcon from '../icons/Icon=export.svg';
import filtersIcon from '../icons/Icon=filters.svg';
import genderIcon from '../icons/Icon=gender.svg';
import infoIcon from '../icons/Icon=info.svg';
import leftArrowIcon from '../icons/Icon=left_arrow.svg';
import leftIcon from '../icons/Icon=left.svg';
import listIcon from '../icons/Icon=list.svg';
import locationIcon from '../icons/Icon=location.svg';
import occupationIcon from '../icons/Icon=occupation.svg';
import participantsIcon from '../icons/Icon=participants.svg';
import personIcon from '../icons/Icon=person.svg';
import rightIcon from '../icons/Icon=right.svg';
import searchIcon from '../icons/Icon=search.svg';
import tableIcon from '../icons/Icon=table.svg';
import timelineIcon from '../icons/Icon=timeline.svg';
import zoomInIcon from '../icons/Icon=zoom_in.svg';
import zoomOutIcon from '../icons/Icon=zoom_out.svg';

type Props = {
  className?: string,
  name: string,
  size: number,
  style?: any
};

const DEFAULT_SIZE = 16;

const Icon = ({
  className, name, style, size = DEFAULT_SIZE
}: Props) => {
  let thisIcon;

  switch (name) {
    case 'bullet':
      thisIcon = bulletIcon;
      break;
    case 'close':
      thisIcon = closeIcon;
      break;
    case 'date':
      thisIcon = dateIcon;
      break;
    case 'down':
      thisIcon = downIcon;
      break;
    case 'export':
      thisIcon = exportIcon;
      break;
    case 'filters':
      thisIcon = filtersIcon;
      break;
    case 'gender':
      thisIcon = genderIcon;
      break;
    case 'info':
      thisIcon = infoIcon;
      break;
    case 'left_arrow':
      thisIcon = leftArrowIcon;
      break;
    case 'left':
      thisIcon = leftIcon;
      break;
    case 'list':
      thisIcon = listIcon;
      break;
    case 'location':
      thisIcon = locationIcon;
      break;
    case 'occupation':
      thisIcon = occupationIcon;
      break;
    case 'participants':
      thisIcon = participantsIcon;
      break;
    case 'person':
      thisIcon = personIcon;
      break;
    case 'right':
      thisIcon = rightIcon;
      break;
    case 'search':
      thisIcon = searchIcon;
      break;
    case 'table':
      thisIcon = tableIcon;
      break;
    case 'timeline':
      thisIcon = timelineIcon;
      break;
    case 'zoom_in':
      thisIcon = zoomInIcon;
      break;
    case 'zoom_out':
      thisIcon = zoomOutIcon;
      break;
    default:
      thisIcon = infoIcon;
  }

  return (
    <svg
      className={clsx('icon', className)}
      width={size}
      height={size}
      fill='currentColor'
      viewBox={`0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`}
      preserveAspectRatio='none'
      style={style}
    >
      <use
        xlinkHref={`${thisIcon}#${name}`}
      />
    </svg>
  );
};

export default Icon;
