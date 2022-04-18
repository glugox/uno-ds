import { Subject } from 'rxjs';

const subject = new Subject<number|void>();

export const menuService = {
    setItemSelected: (id: number) => subject.next(id),
    reset: () => subject.next(),
    onChange: () => subject.asObservable()
};
