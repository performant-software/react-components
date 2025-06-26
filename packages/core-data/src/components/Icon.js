// @flow

import React from 'react';
import clsx from 'clsx';
import BulletIcon from '../icons/BulletIcon';
import CheckboxIcon from '../icons/Checkbox';
import CheckboxFilledIcon from '../icons/CheckboxFilled';
import CloseIcon from '../icons/CloseIcon';
import DateIcon from '../icons/DateIcon';
import DownIcon from '../icons/DownIcon';
import ExportIcon from '../icons/ExportIcon';
import FiltersIcon from '../icons/FiltersIcon';
import GenderIcon from '../icons/GenderIcon';
import InfoIcon from '../icons/InfoIcon';
import LeftArrowIcon from '../icons/LeftArrowIcon';
import LeftIcon from '../icons/LeftIcon';
import ListIcon from '../icons/ListIcon';
import LocationIcon from '../icons/LocationIcon';
import MagnifyingGlassMinusIcon from '../icons/MagnifyingGlassMinusIcon';
import MagnifyingGlassPlusIcon from '../icons/MagnifyingGlassPlusIcon';
import OccupationIcon from '../icons/OccupationIcon';
import ParticipantsIcon from '../icons/ParticipantsIcon';
import PersonIcon from '../icons/PersonIcon';
import ResetIcon from '../icons/ResetIcon';
import RightIcon from '../icons/RightIcon';
import SearchIcon from '../icons/SearchIcon';
import TableIcon from '../icons/TableIcon';
import TimelineIcon from '../icons/TimelineIcon';
import ZoomInIcon from '../icons/ZoomInIcon';
import ZoomOutIcon from '../icons/ZoomOutIcon';

type Props = {
  className?: string,
  name: string,
  size?: number,
  style?: any
};

const DEFAULT_SIZE = 16;

const Icon = ({
  className, name, style, size = DEFAULT_SIZE
}: Props) => {
  let ThisIcon;

  switch (name) {
    case 'bullet':
      ThisIcon = BulletIcon;
      break;
    case 'checkbox':
      ThisIcon = CheckboxIcon;
      break;
    case 'checkbox_filled':
      ThisIcon = CheckboxFilledIcon;
      break;
    case 'close':
      ThisIcon = CloseIcon;
      break;
    case 'date':
      ThisIcon = DateIcon;
      break;
    case 'down':
      ThisIcon = DownIcon;
      break;
    case 'export':
      ThisIcon = ExportIcon;
      break;
    case 'filters':
      ThisIcon = FiltersIcon;
      break;
    case 'gender':
      ThisIcon = GenderIcon;
      break;
    case 'info':
      ThisIcon = InfoIcon;
      break;
    case 'left_arrow':
      ThisIcon = LeftArrowIcon;
      break;
    case 'left':
      ThisIcon = LeftIcon;
      break;
    case 'list':
      ThisIcon = ListIcon;
      break;
    case 'location':
      ThisIcon = LocationIcon;
      break;
    case 'magnifying_glass_minus':
      ThisIcon = MagnifyingGlassMinusIcon;
      break;
    case 'magnifying_glass_plus':
      ThisIcon = MagnifyingGlassPlusIcon;
      break;
    case 'occupation':
      ThisIcon = OccupationIcon;
      break;
    case 'participants':
      ThisIcon = ParticipantsIcon;
      break;
    case 'person':
      ThisIcon = PersonIcon;
      break;
    case 'reset':
      ThisIcon = ResetIcon;
      break;
    case 'right':
      ThisIcon = RightIcon;
      break;
    case 'search':
      ThisIcon = SearchIcon;
      break;
    case 'table':
      ThisIcon = TableIcon;
      break;
    case 'timeline':
      ThisIcon = TimelineIcon;
      break;
    case 'zoom_in':
      ThisIcon = ZoomInIcon;
      break;
    case 'zoom_out':
      ThisIcon = ZoomOutIcon;
      break;
    default:
      ThisIcon = null;
  }

  return ThisIcon ? (
    <svg
      width={size}
      height={size}
      fill='currentColor'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      id={name}
      style={style}
      className={clsx('icon', 'flex-shrink-0', className)}
    >
      <ThisIcon />
    </svg>
  ) : null;
};

export default Icon;
