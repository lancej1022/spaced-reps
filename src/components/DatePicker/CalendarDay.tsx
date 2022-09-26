export interface CalendarDayProps {
  date: string;
  dayOfMonth: number;
  isCurrentMonth: boolean;
}
export function CalendarDay(props: CalendarDayProps) {
  return (
    <button
      aria-hidden={!props.isCurrentMonth}
      tabIndex={!props.isCurrentMonth ? -1 : 0}
      class={`list-none rounded-full w-8 h-8 flex items-center justify-center m-1 ${
        !props.isCurrentMonth && 'bg-slate-500'
      }`}
      value={props.date}
    >
      <span>{props.dayOfMonth}</span>
    </button>
  );
}
