import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/ventas.interface';


@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {
    transform(value: boolean) {

        return (value) ? 'vuela' : 'no vuela';
        
    }
}