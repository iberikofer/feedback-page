import React from 'react';
import type { FC } from 'react';
import type { FeedbackType, FeedbackState } from '../../types/feedback';
import css from './FeedbackOptions.module.css';

interface OptionConfig {
  label: string;
  emoji: string;
  className: string;
  ariaLabel: string;
}

const OPTION_CONFIG: Record<FeedbackType, OptionConfig> = {
  good: {
    label: 'Good',
    emoji: '👍',
    className: css.buttonGood,
    ariaLabel: 'Rate as Good',
  },
  neutral: {
    label: 'Neutral',
    emoji: '👌',
    className: css.buttonNeutral,
    ariaLabel: 'Rate as Neutral',
  },
  bad: {
    label: 'Bad',
    emoji: '👎',
    className: css.buttonBad,
    ariaLabel: 'Rate as Bad',
  },
};

interface FeedbackOptionsProps {
  options: FeedbackType[];
  onLeaveFeedback: (option: FeedbackType) => void;
  counts?: Partial<FeedbackState>;
}

export const FeedbackOptions: FC<FeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
  counts = {},
}) => {
  return (
    <div className={css.container} role="group" aria-label="Feedback ratings">
      {options.map(option => {
        const config = OPTION_CONFIG[option] || {
          label: option,
          emoji: '✨',
          className: '',
          ariaLabel: `Rate as ${option}`,
        };
        const count = counts[option];

        return (
          <button
            key={option}
            type="button"
            className={`${css.button} ${config.className}`.trim()}
            onClick={() => onLeaveFeedback(option)}
            aria-label={config.ariaLabel}
          >
            <span className={css.icon} role="img" aria-hidden="true">
              {config.emoji}
            </span>
            <span>{config.label}</span>
            {typeof count === 'number' && count > 0 && (
              <span className={css.badge}>{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
