import { Person } from "../person.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: 'GetCovidStatus'
})

export class GetCovidStatusPipe implements PipeTransform {
  transform(person: Person): string {
    return JSON.parse(person.is_COVID_positive) ? 'Positive' : 'Negative';
  }
}
