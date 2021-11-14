import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'toseconds' })
export class ToSecondsPipe implements PipeTransform {
    transform(value: number): any {
        return value / 1000;
    }
}