import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'covertToSpaces'
})

export class CovertToSpacesPipe implements PipeTransform{
     
    transform(value:string,character:string):string{
        return value.replace(character,' ');
    }
}
