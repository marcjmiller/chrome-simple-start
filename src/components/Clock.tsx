import { useEffect, useState } from 'react';

interface OwnProps {
  dateInput?: Date;
}

const Clock = ({ dateInput }: OwnProps) => {
  const [date, setDate] = useState(dateInput ? dateInput : new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  const niceDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' }).format(date);
  const hour = date.getHours();
  const niceHr = hour > 12 ? hour - 12 : hour;
  const mins = date.getMinutes().toString().padStart(2, '0');
  const ampm = hour > 12 ? 'PM' : 'AM';

  return (
    <div className={'clock-container'} data-testid={'clock-container'}>
      It is currently {niceHr}:{mins} {ampm} on {niceDate}.
    </div>
  );
};

export default Clock;
