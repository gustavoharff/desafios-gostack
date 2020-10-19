import { format, parseISO } from 'date-fns';

const formatDate = (date: string): string => format(parseISO(date), 'dd/MM/yy'); // TODO

export default formatDate;
