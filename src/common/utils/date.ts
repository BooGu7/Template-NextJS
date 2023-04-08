import moment, { Moment } from 'moment';

export const getListBetweenTwoDays = (fromTime: number, toTime: number) => {
  const from = moment.unix(fromTime);
  const to = moment.unix(toTime);
  const diffs = moment.duration(to.diff(from)).asDays();

  const result = [from.format('ddd Do MMM')];

  for (let i = 0; i < diffs; i++) {
    result.push(from.add(1, 'd').format('ddd Do MMM'));
  }

  return result;
};

export const diffTime = ({ start_time, end_time }: { start_time: number; end_time: number }) => {
  const mins = moment.duration(end_time - start_time, 'seconds').minutes();

  const hours = Math.floor(moment.duration(end_time - start_time, 'seconds').asHours());

  //   const days = moment.duration(end_time - start_time, 'seconds').days();

  return { days: 0, hours, mins };
};

export const formatHrsMins = ({
  start_time,
  end_time,
}: {
  start_time: number | number[];
  end_time: number | number[];
}) => {
  const { days, hours, mins } = diffTime(formatDurationTimes({ start_time, end_time }));
  return (
    (days ? `${days} days ` : '') +
    (hours ? `${hours} hrs` : '') +
    (hours && mins ? ' : ' : '') +
    (mins ? `${mins} mins` : '')
  );
};

export const formatDurationTimes = ({ start_time, end_time }: { start_time: any; end_time: any }) => {
  if (Array.isArray(start_time)) {
    return {
      start_time: (start_time as number[]).reduce((sum, cur) => {
        sum += moment(moment.unix(cur), 'HH:mm A').unix();
        return sum;
      }, 0),
      end_time: (end_time as number[]).reduce((sum, cur) => {
        sum += moment(moment.unix(cur), 'HH:mm A').unix();
        return sum;
      }, 0),
    };
  } else {
    return {
      start_time: moment(moment.unix(start_time), 'HH:mm A').unix(),
      end_time: moment(moment.unix(end_time), 'HH:mm A').unix(),
    };
  }
};

export const setTimesOfCurrentDay = ({
  day,
  hour,
  min,
  sec,
}: {
  day: Moment;
  hour: string;
  min: string;
  sec: string;
}) => {
  const clone = day.clone();

  clone.set('hour', Number(hour));
  clone.set('minute', Number(min));
  clone.set('second', Number(sec));

  return clone;
};

export const formatDate = (date: number) => {
  return moment.unix(date).format('DD MMM, YYYY hh:mm A');
};
