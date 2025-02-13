import { getLangFromUrl } from '~/utils/i18n';

export const getFormatter = (url: URL): Intl.DateTimeFormat => {
  const lang = getLangFromUrl(url);
  return new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

export const stripHtmlTags = (html: string): string => html.replace(/<[^>]*>/g, "");

export const getFormattedDate = (date: Date, url: URL): string => {
  const formatter = getFormatter(url);
  return date ? formatter.format(date) : '';
};

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

// Function to format a number in thousands (K) or millions (M) format depending on its value
export const toUiAmount = (amount: number) => {
  if (!amount) return 0;

  let value: string;

  if (amount >= 1000000000) {
    const formattedNumber = (amount / 1000000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'B';
    } else {
      value = formattedNumber + 'B';
    }
  } else if (amount >= 1000000) {
    const formattedNumber = (amount / 1000000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'M';
    } else {
      value = formattedNumber + 'M';
    }
  } else if (amount >= 1000) {
    const formattedNumber = (amount / 1000).toFixed(1);
    if (Number(formattedNumber) === parseInt(formattedNumber)) {
      value = parseInt(formattedNumber) + 'K';
    } else {
      value = formattedNumber + 'K';
    }
  } else {
    value = Number(amount).toFixed(0);
  }

  return value;
};
