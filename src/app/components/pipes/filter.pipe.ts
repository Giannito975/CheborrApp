import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, arg: any): any {
        if (arg === '' || arg.length < 0) return value;
        const resultDrinks = [];
        for (const drink of value) {
          if (drink.strDrink.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            resultDrinks.push(drink);
          };
        };
        return resultDrinks;
      }

}